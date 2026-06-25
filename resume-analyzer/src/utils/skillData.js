// Role definitions with required skills
export const ROLES = {
  'Java Developer': {
    icon: '☕',
    color: 'from-orange-500 to-red-600',
    skills: ['Java', 'Spring Boot', 'REST API', 'MySQL', 'Git', 'Docker', 'AWS'],
    suggestions: {
      'Java': 'Strengthen Java fundamentals — focus on OOP, collections, and concurrency.',
      'Spring Boot': 'Build REST services with Spring Boot. Spring\'s official docs are excellent.',
      'REST API': 'Design and document APIs with OpenAPI/Swagger for professional-grade work.',
      'MySQL': 'Practice query optimization and schema design for relational data.',
      'Git': 'Learn branching strategies (GitFlow) and collaborative workflows on GitHub.',
      'Docker': 'Containerize a Spring Boot app and push it to Docker Hub as a portfolio piece.',
      'AWS': 'Complete AWS Certified Developer - Associate to validate cloud skills.',
    }
  },
  'Frontend Developer': {
    icon: '🎨',
    color: 'from-blue-500 to-cyan-500',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Responsive Design'],
    suggestions: {
      'HTML': 'Master semantic HTML5 for accessibility and SEO.',
      'CSS': 'Deep-dive into CSS Grid, Flexbox, and custom properties.',
      'JavaScript': 'Solidify ES6+, async/await, and DOM APIs with daily practice.',
      'React': 'Build 3 projects using hooks, context, and React Query.',
      'Git': 'Practice pull requests and code reviews on open-source projects.',
      'Responsive Design': 'Use a mobile-first approach and test across breakpoints with DevTools.',
    }
  },
  'Full Stack Developer': {
    icon: '⚡',
    color: 'from-violet-500 to-purple-600',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Git'],
    suggestions: {
      'HTML': 'Focus on semantic structure and accessibility attributes.',
      'CSS': 'Explore CSS animations and advanced layout techniques.',
      'JavaScript': 'Understand the event loop, closures, and prototype chain deeply.',
      'React': 'Learn React patterns: compound components, render props, custom hooks.',
      'Node.js': 'Build a REST API with authentication and database integration.',
      'Express': 'Create a production-ready Express app with middleware and error handling.',
      'MongoDB': 'Learn data modeling, aggregation pipelines, and indexing strategies.',
      'Git': 'Master rebasing, cherry-picking, and conflict resolution.',
    }
  },
  'Data Analyst': {
    icon: '📊',
    color: 'from-emerald-500 to-teal-600',
    skills: ['Excel', 'SQL', 'Python', 'Power BI', 'Statistics'],
    suggestions: {
      'Excel': 'Master pivot tables, VLOOKUP, and Power Query for data wrangling.',
      'SQL': 'Practice window functions, CTEs, and query optimization on real datasets.',
      'Python': 'Learn Pandas, NumPy, and Matplotlib for data analysis pipelines.',
      'Power BI': 'Build an interactive dashboard using public datasets as a portfolio piece.',
      'Statistics': 'Study descriptive stats, hypothesis testing, and regression analysis.',
    }
  },
  'AI/ML Engineer': {
    icon: '🤖',
    color: 'from-pink-500 to-rose-600',
    skills: ['Python', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'Data Analysis'],
    suggestions: {
      'Python': 'Strengthen NumPy, Pandas, and Scikit-learn for ML pipelines.',
      'Machine Learning': 'Study Andrew Ng\'s ML Specialization on Coursera.',
      'Deep Learning': 'Implement CNNs, RNNs, and Transformers from scratch.',
      'TensorFlow': 'Build and deploy a model using TensorFlow Serving or TF Lite.',
      'PyTorch': 'Complete PyTorch\'s official tutorials and recreate a research paper.',
      'Data Analysis': 'Work on Kaggle competitions to gain hands-on data wrangling experience.',
    }
  },
}

export const ROLE_OPTIONS = Object.keys(ROLES)

/**
 * Analyzes resume text against a selected role's skill requirements.
 * @param {string} resumeText
 * @param {string} role
 * @returns {{ matched: string[], missing: string[], score: number, suggestions: {skill: string, tip: string}[] }}
 */
export function analyzeResume(resumeText, role) {
  const { skills, suggestions } = ROLES[role]
  const normalizedText = resumeText.toLowerCase()

  const matched = []
  const missing = []

  skills.forEach(skill => {
    // Use word-boundary-aware matching for accuracy
    const pattern = new RegExp(
      `(?<![a-z0-9])${skill.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![a-z0-9])`,
      'i'
    )
    if (pattern.test(normalizedText)) {
      matched.push(skill)
    } else {
      missing.push(skill)
    }
  })

  const score = Math.round((matched.length / skills.length) * 100)

  const suggestionList = missing.map(skill => ({
    skill,
    tip: suggestions[skill] || `Add hands-on ${skill} experience to your resume.`,
  }))

  return { matched, missing, score, suggestions: suggestionList }
}

/**
 * Returns a label and color class based on the score.
 */
export function getScoreLabel(score) {
  if (score >= 85) return { label: 'Excellent Match', color: 'text-emerald-500', bg: 'from-emerald-400 to-teal-500' }
  if (score >= 65) return { label: 'Good Match', color: 'text-blue-500', bg: 'from-blue-400 to-cyan-500' }
  if (score >= 40) return { label: 'Fair Match', color: 'text-amber-500', bg: 'from-amber-400 to-orange-500' }
  return { label: 'Needs Work', color: 'text-red-500', bg: 'from-red-400 to-rose-500' }
}
