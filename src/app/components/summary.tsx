'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Summary() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">About Me</h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8">
          I'm a passionate problem solver and web developer with expertise in Docker, Web3, and AI/ML. 
          My approach combines analytical thinking with creative solutions, allowing me to tackle complex challenges 
          in the ever-evolving tech landscape. Whether it's building robust web applications, optimizing containerized 
          deployments, or exploring the frontiers of blockchain and artificial intelligence, I'm always eager to learn 
          and push the boundaries of what's possible.
        </p>
        <div className="flex justify-center space-x-4 sm:space-x-6">
          <motion.a
            href="https://www.linkedin.com/in/prashant-dubey-59826521b/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 sm:p-3"
          >
            <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
            <span className="sr-only">LinkedIn</span>
          </motion.a>
          <motion.a
            href="https://github.com/prashantxy"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 sm:p-3"
          >
            <Github className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            <span className="sr-only">GitHub</span>
          </motion.a>
          <motion.a
            href="https://x.com/pdubey1924"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 sm:p-3"
          >
            <Twitter className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
            <span className="sr-only">Twitter</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

