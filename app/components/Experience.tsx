"use client"

import { Briefcase, Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

export default function Experience() {
  const experiences = [
    {
      company: "Kairiz Cyber Technology",
      location: "Remote",
      period: "May 2024 - July 2024",
      role: "Software Development Intern",
      responsibilities: [
        "Developed dynamic user interfaces using JavaScript, React, and Supabase (PostgreSQL)",
        "Ensured smooth and seamless user experiences across web applications",
        "Collaborated with cross-functional teams to implement full-stack web solutions",
        "Integrated front-end and back-end systems to deliver robust and feature-rich websites",
      ],
    },
    {
      company: "Glowingsoft Technologies",
      location: "Lahore, Pakistan",
      period: "June 2023 - Aug 2023",
      role: "Data Science Intern",
      responsibilities: [
        "Collected, cleaned, and preprocessed datasets using web scraping techniques (BeautifulSoup and Selenium)",
        "Visualized insights using Power BI",
        "Developed and fine-tuned machine learning and deep learning models",
        "Leveraged neural networks with TensorFlow and PyTorch for predictive analytics",
      ],
    },
  ]

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Professional Experience" />
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-blue-200 dark:bg-blue-700 rounded-bl-full z-0 opacity-50 
                transition-transform duration-300 group-hover:scale-110"
              ></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">{exp.company}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {exp.location}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </p>
                <p className="text-xl font-medium mb-4 dark:text-gray-200 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  {exp.role}
                </p>
                <ul className="list-none space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

