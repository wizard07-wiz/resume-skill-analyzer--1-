import React from 'react'
import ScoreRing from './ScoreRing'
import SkillsDisplay from './SkillsDisplay'
import Suggestions from './Suggestions'
import { ROLES } from '../utils/skillData'

export default function Results({ result, role }) {
  const { matched, missing, score, suggestions } = result
  const { icon, color } = ROLES[role]

  return (
    <section className="space-y-5">
      {/* Header */}
      <div className="flex items-center gap-3 animate-fade-up">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-lg shadow-md`}>
          {icon}
        </div>
        <div>
          <h2 className="font-display text-xl font-bold text-gray-900 dark:text-white">Analysis Results</h2>
          <p className="text-xs text-gray-400 dark:text-gray-500">{role} · {matched.length}/{matched.length + missing.length} skills matched</p>
        </div>
      </div>

      {/* Score + quick stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <ScoreRing score={score} role={role} />

        {/* Quick stat cards */}
        <div className="sm:col-span-2 grid grid-cols-2 gap-4">
          <StatCard
            value={matched.length}
            label="Skills Found"
            sub="in your resume"
            icon={<path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />}
            iconColor="text-emerald-500"
            bgColor="bg-emerald-50 dark:bg-emerald-900/20"
            delay="animation-delay-100"
          />
          <StatCard
            value={missing.length}
            label="Skills Missing"
            sub="to work on"
            icon={<path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />}
            iconColor="text-red-500"
            bgColor="bg-red-50 dark:bg-red-900/20"
            delay="animation-delay-200"
          />
          <StatCard
            value={matched.length + missing.length}
            label="Total Required"
            sub="for this role"
            icon={<path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />}
            iconColor="text-brand-500"
            bgColor="bg-brand-50 dark:bg-brand-900/20"
            delay="animation-delay-300"
          />
          <StatCard
            value={`${score}%`}
            label="Match Rate"
            sub="overall score"
            icon={<path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />}
            iconColor="text-violet-500"
            bgColor="bg-violet-50 dark:bg-violet-900/20"
            delay="animation-delay-400"
          />
        </div>
      </div>

      {/* Skills breakdown */}
      <SkillsDisplay matched={matched} missing={missing} />

      {/* Suggestions */}
      <Suggestions suggestions={suggestions} />
    </section>
  )
}

function StatCard({ value, label, sub, icon, iconColor, bgColor, delay }) {
  return (
    <div className={`bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-5 animate-fade-up ${delay}`}>
      <div className={`w-9 h-9 rounded-xl ${bgColor} flex items-center justify-center mb-3`}>
        <svg className={`w-5 h-5 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          {icon}
        </svg>
      </div>
      <p className="font-display text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
      <p className="text-xs font-semibold text-gray-600 dark:text-gray-400">{label}</p>
      <p className="text-xs text-gray-400 dark:text-gray-500">{sub}</p>
    </div>
  )
}
