import React from 'react'

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-indigo-900 to-violet-900 dark:from-gray-950 dark:via-brand-900 dark:to-violet-950 px-6 py-20 md:py-28 text-center">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-brand-500 opacity-20 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500 opacity-15 rounded-full blur-3xl translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-48 h-48 bg-cyan-400 opacity-10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white/80 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse-slow" />
          Free · Instant · No signup required
        </div>

        <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
          Know exactly{' '}
          <span className="bg-gradient-to-r from-brand-400 to-violet-400 bg-clip-text text-transparent">
            what's missing
          </span>{' '}
          from your resume
        </h1>

        <p className="text-white/60 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
          Paste your resume, pick a job role, and get a skill-gap report with actionable improvement tips — in seconds.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/50">
          {['5 Job Roles', 'Instant Analysis', 'Smart Suggestions'].map(item => (
            <div key={item} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
