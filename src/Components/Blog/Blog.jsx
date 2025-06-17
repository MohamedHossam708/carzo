import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Why 2025 Could Be the Best Year to Buy a Car",
    date: "May 1, 2025",
    content:
      "With the economic shift and growing EV options, the car market in 2025 is shaping up to be one of the most dynamic in recent years. Here’s what experts suggest you should know.",
  },
  {
    title: "Top 3 Mistakes People Make When Buying a Used Car",
    date: "April 15, 2025",
    content:
      "Used cars can be great deals—but only if you know what to look for. Avoid these common pitfalls when choosing your next vehicle.",
  },
  {
    title: "How to Spot a Trusted Dealership in Egypt",
    date: "March 29, 2025",
    content:
      "Whether buying new or used, choosing a trustworthy dealer is key. Here's a quick checklist to help you avoid scams and hidden issues.",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white text-slate-800 py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-14 p-6 lg:p-10">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold text-center text-slate-800"
        >
          Carzo Blog
        </motion.h1>

        {/* Posts */}
        {blogPosts.map((post, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300"
          >
            <p className="text-sm text-blue-600 font-medium mb-2">{post.date}</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 hover:text-blue-500 transition">
              {post.title}
            </h2>
            <p className="text-slate-700 leading-relaxed">{post.content}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}




