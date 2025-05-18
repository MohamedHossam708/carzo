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
    <div className="min-h-screen  bg-gradient-to-b from-[#90949c] to-[#0f172a] text-white py-16 px-6">
      <div className="max-w-3xl mx-auto space-y-12 p-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-bold text-center mb-8"
        >
          Carzo Blog
        </motion.h1>

        {blogPosts.map((post, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="border-b pb-6"
          >
            <p className="font-bold text-blue-900 mb-2">{post.date}</p>
            <h2 className="text-3xl font-semibold mb-3">{post.title}</h2>
            <p className="text-base leading-relaxed text-white">{post.content}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}



