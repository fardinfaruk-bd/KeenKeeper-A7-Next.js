"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full blur-[120px] opacity-20 animate-pulse"></div>

      <div className="text-center z-10">
        
        {/* Animated 404 */}
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-8xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          404
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-lg text-gray-300"
        >
          Opps! The page you are looking for does not exist.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/"
            className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            Return Home
          </Link>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-10 left-10 w-6 h-6 bg-pink-500 rounded-full"
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-4 h-4 bg-purple-400 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        />
      </div>
    </div>
  );
}