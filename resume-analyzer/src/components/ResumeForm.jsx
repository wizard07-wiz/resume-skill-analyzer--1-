import React from 'react'
import { ROLE_OPTIONS, ROLES } from '../utils/skillData'

export default function ResumeForm({ resumeText, setResumeText, selectedRole, setSelectedRole, onAnalyze, errors, loading }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 md:p-8 animate-fade-up">
      <h2 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-1">
        Analyze Your Resume
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        Paste your full resume text and select the role you're targeting.
      </p>

      {/* Job Role Selector */}
      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Target Job Role <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {ROLE_OPTIONS.map(role => {
            const { icon, color } = ROLES[role]
            const isSelected = selectedRole === role
            return (
              <button
                key={role}
                type="button"
                onClick={() => setSelectedRole(role)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-left transition-all duration-200 ${
                  isSelected
                    ? 'border-brand-500 bg-brand-50 dark:bg-brand-900/20 shadow-sm'
                    : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-base bg-gradient-to-br ${color} flex-shrink-0`}>
                  {icon}
                </span>
                <span className={`text-sm font-semibold ${isSelected ? 'text-brand-600 dark:text-brand-400' : 'text-gray-700 dark:text-gray-300'}`}>
                  {role}
                </span>
                {isSelected && (
                  <svg className="w-4 h-4 text-brand-500 ml-auto flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            )
          })}
        </div>
        {errors.role && (
          <p className="mt-2 text-xs text-red-500 flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.role}
          </p>
        )}
      </div>

      {/* Resume Textarea */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Resume Text <span className="text-red-500">*</span>
        </label>
        <textarea
          value={resumeText}
          onChange={e => setResumeText(e.target.value)}
          placeholder="Paste your resume content here — work experience, skills, education, projects...

Example:
Skills: Java, Spring Boot, Docker, AWS, MySQL
Experience: 2 years building REST APIs with Spring Boot..."
          rows={10}
          className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 text-sm leading-relaxed resize-y transition-colors focus:outline-none focus:ring-0 ${
            errors.resume
              ? 'border-red-400 focus:border-red-500'
              : 'border-gray-200 dark:border-gray-700 focus:border-brand-400 dark:focus:border-brand-500'
          }`}
        />
        <div className="mt-1 flex items-center justify-between">
          {errors.resume ? (
            <p className="text-xs text-red-500 flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.resume}
            </p>
          ) : <span />}
          <span className="text-xs text-gray-400 dark:text-gray-500">{resumeText.length} chars</span>
        </div>
      </div>

      {/* Analyze Button */}
      <button
        type="button"
        onClick={onAnalyze}
        disabled={loading}
        className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-500 to-violet-600 text-white font-bold text-base shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.02] active:scale-100 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-3"
      >
        {loading ? (
          <>
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Analyzing…
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Analyze Resume
          </>
        )}
      </button>
    </div>
  )
}
