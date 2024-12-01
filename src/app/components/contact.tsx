'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formState)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Let's Connect</h2>
      <motion.form
        className="max-w-lg mx-auto"
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm sm:text-base">Name</label>
          <motion.input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-sm sm:text-base text-gray-300 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
            whileFocus={{ scale: 1.02 }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm sm:text-base">Email</label>
          <motion.input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-sm sm:text-base text-gray-300 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
            whileFocus={{ scale: 1.02 }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 text-sm sm:text-base">Message</label>
          <motion.textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-sm sm:text-base text-gray-300 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
            rows={4}
            whileFocus={{ scale: 1.02 }}
          ></motion.textarea>
        </div>
        <motion.button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-lg text-sm sm:text-base shadow-lg hover:shadow-xl transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  )
}

