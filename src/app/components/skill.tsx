'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const skills = [
  { 
    name: 'Web Development', 
    icon: '💻', 
    description: 'Front-end: React, Redux, Next.js, Three.js | Back-end: Node.js, Express, Django' 
  },
  { 
    name: 'App Development', 
    icon: '📱', 
    description: 'Cross-platform mobile development with React Native' 
  },
  { 
    name: 'Web3', 
    icon: '🌐', 
    description: 'Blockchain development with Solidity' 
  },
  { 
    name: 'Containerization', 
    icon: '🐳', 
    description: 'Docker, Kubernetes, Docker Hub for efficient deployment and scaling' 
  },
  { 
    name: 'Databases', 
    icon: '🗄️', 
    description: 'MySQL, MongoDB, PostgreSQL for robust data management' 
  },
  { 
    name: 'Cloud Services', 
    icon: '☁️', 
    description: 'AWS, Azure, GCP for scalable cloud solutions' 
  },
  { 
    name: 'CI/CD', 
    icon: '🔄', 
    description: 'Jenkins, GitLab CI for automated testing and deployment' 
  },
  { 
    name: 'Programming Languages', 
    icon: '🚀', 
    description: 'C++, Python, Java, JavaScript, TypeScript, Rust' 
  },
]

export default function SkillsShowcase() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null)

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">My Superpowers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="bg-gray-800 bg-opacity-50 p-4 sm:p-6 rounded-lg cursor-pointer backdrop-filter backdrop-blur-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveSkill(activeSkill === index ? null : index)}
          >
            <div className="text-3xl sm:text-4xl md:text-5xl mb-2">{skill.icon}</div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{skill.name}</h3>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: activeSkill === index ? 'auto' : 0, opacity: activeSkill === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-sm sm:text-base text-gray-300">{skill.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

