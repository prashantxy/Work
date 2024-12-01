'use client'

import { motion } from 'framer-motion'

const projects = [
  { title: 'DTC buses', description: 'A full-stack web application built with React and Node.js', color: 'from-pink-500 to-red-500' },
  { title: 'Logistics Portfolio', description: 'A Web3 wallet for managing cryptocurrency assets', color: 'from-purple-500 to-indigo-500' },
  { title: 'React component generator', description: 'published a package for it. Use npm install react-codogen', color: 'from-green-500 to-teal-500' },
  { title: 'Nasa space visualization', description: 'Made it for NSAC', color: 'from-yellow-500 to-orange-500' },
]

export default function Projects() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">My Creations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className={`bg-gradient-to-br ${project.color} p-1 rounded-lg`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-gray-900 p-4 sm:p-6 rounded-lg h-full">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm sm:text-base text-gray-300">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

