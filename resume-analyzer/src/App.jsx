import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ResumeForm from './components/ResumeForm'
import Results from './components/Results'
import { analyzeResume } from './utils/skillData'

function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-16 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="font-display font-bold text-gray-800 dark:text-white text-sm">Lingesh B</p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">your-email@example.com</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-violet-600 text-white text-sm font-bold shadow hover:shadow-lg hover:scale-105 active:scale-100 transition-all duration-200"
          >
            <span>⚡</span>
            Built for Digital Heroes
          </a>
        </div>
      </div>
      <p className="text-center text-xs text-gray-400 dark:text-gray-600 mt-6">
        © {new Date().getFullYear()} ResumeIQ · Built with React + Tailwind CSS
      </p>
    </footer>
  )
}

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
    return false
  })

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const [resumeText, setResumeText] = useState('')
  const [selectedRole, setSelectedRole] = useState('')
  const [result, setResult] = useState(null)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e = {}
    if (!selectedRole) e.role = 'Please select a job role.'
    if (!resumeText.trim()) e.resume = 'Resume text cannot be empty.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleAnalyze = () => {
    if (!validate()) return
    setLoading(true)
    setResult(null)
    // Simulate brief processing delay for UX
    setTimeout(() => {
      const analysis = analyzeResume(resumeText, selectedRole)
      setResult(analysis)
      setLoading(false)
      // Scroll to results
      setTimeout(() => {
        document.getElementById('results')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }, 600)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleDark={() => setDarkMode(d => !d)} />
      <Hero />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-6">
        <ResumeForm
          resumeText={resumeText}
          setResumeText={setResumeText}
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
          onAnalyze={handleAnalyze}
          errors={errors}
          loading={loading}
        />

        {result && (
          <div id="results">
            <Results result={result} role={selectedRole} />
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
