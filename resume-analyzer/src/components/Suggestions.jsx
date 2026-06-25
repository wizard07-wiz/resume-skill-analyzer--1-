import React from 'react'

export default function Suggestions({ suggestions }) {
  if (!suggestions || suggestions.length === 0) {
    return (
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 rounded-2xl border border-emerald-200 dark:border-emerald-800 p-6 text-center animate-fade-up animation-delay-300">
        <div className="text-3xl mb-2">🏆</div>
        <h3 className="font-display font-bold text-emerald-700 dark:text-emerald-400 mb-1">Perfect Score!</h3>
        <p className="text-sm text-emerald-600 dark:text-emerald-500">
          Your resume covers every required skill for this role. Time to apply with confidence!
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 animate-fade-up animation-delay-300">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
          <svg className="w-5 h-5 text-brand-600 dark:text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Personalized Suggestions</h3>
          <p className="text-xs text-gray-400">{suggestions.length} action items to boost your profile</p>
        </div>
      </div>

      <div className="space-y-3">
        {suggestions.map(({ skill, tip }, i) => (
          <div
            key={skill}
            className="flex gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-brand-200 dark:hover:border-brand-800 transition-colors group"
          >
            <div className="w-7 h-7 rounded-full bg-brand-100 dark:bg-brand-900/40 border-2 border-brand-200 dark:border-brand-800 flex items-center justify-center text-xs font-bold text-brand-600 dark:text-brand-400 flex-shrink-0 mt-0.5">
              {i + 1}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-0.5 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                Add <span className="text-brand-600 dark:text-brand-400">{skill}</span>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{tip}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
