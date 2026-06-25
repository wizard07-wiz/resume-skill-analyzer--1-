import React from 'react'
import { getScoreLabel } from '../utils/skillData'

export default function ScoreRing({ score, role }) {
  const { label, color, bg } = getScoreLabel(score)
  const circumference = 2 * Math.PI * 44
  const dashOffset = circumference - (score / 100) * circumference

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 flex flex-col items-center text-center animate-scale-in">
      <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-4">
        Resume Score
      </p>

      <div className="relative w-36 h-36 mb-4">
        {/* Background track */}
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="8" className="text-gray-100 dark:text-gray-800" />
          <circle
            cx="50" cy="50" r="44"
            fill="none"
            stroke="url(#scoreGrad)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-4xl font-bold text-gray-900 dark:text-white">{score}</span>
          <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">/ 100</span>
        </div>
      </div>

      <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${bg} text-white text-xs font-bold mb-2`}>
        {label}
      </div>

      <p className="text-xs text-gray-400 dark:text-gray-500 max-w-[160px]">
        {score >= 85 ? 'You\'re a strong candidate for this role.' :
         score >= 65 ? 'You\'re on track — a few skills to add.' :
         score >= 40 ? 'Solid foundation with room to grow.' :
         'Focus on the missing skills below.'}
      </p>
    </div>
  )
}
