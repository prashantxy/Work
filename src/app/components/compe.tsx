'use client'

import { motion } from 'framer-motion'
import { Code2, Award, TrendingUp } from 'lucide-react'

const platforms = [
  { name: 'Codeforces', icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />, description: 'Participated in numerous contests, solving complex algorithmic problems' },
  { name: 'LeetCode', icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />, description: 'Solved a wide range of data structure and algorithm questions' },
  { name: 'GeeksforGeeks', icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />, description: 'Improved problem-solving skills through diverse coding challenges' },
  { name: 'CodeChef', icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />, description: 'Engaged in both long and short coding competitions' },
  { name: 'AtCoder', icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />, description: 'Tackled high-level algorithmic problems in timed contests' }
]

export default function CompetitiveProgramming() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
          My Competitive Programming Journey
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 text-center">
          Sharpening my skills and tackling complex problems across various coding platforms.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              className="bg-gray-800 bg-opacity-50 p-4 sm:p-6 rounded-lg backdrop-filter backdrop-blur-lg"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center mb-2 sm:mb-4">
                {platform.icon}
                <h3 className="text-lg sm:text-xl font-semibold ml-2">{platform.name}</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-300">{platform.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

