import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ReactShield = ({ children }) => {
  const token = localStorage.getItem('userToken');

  if (!token) {
    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white/20 backdrop-blur-md text-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center border border-white/30"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <h1 className="text-3xl font-extrabold mb-4">Access Denied</h1>
            <p className="mb-6 text-slate-200">You must be logged in to view this page.</p>
            <Link
              to="/SignIn"
              className="inline-block bg-blue-600 hover:bg-blue-700 transition-all px-6 py-2 rounded-full text-white font-medium"
            >
              Go to Login
            </Link>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return <>{children}</>;
};

export default ReactShield;
