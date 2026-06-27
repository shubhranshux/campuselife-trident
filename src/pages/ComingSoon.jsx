import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Construction, ArrowLeft, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const ComingSoon = () => {
  const location = useLocation();
  
  // Convert path to readable title
  const pageTitle = location.pathname
    .replace(/^\//, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase()) || 'This Page';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 flex items-center justify-center px-6 pt-24">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-xl"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-24 h-24 bg-indigo-100 rounded-3xl flex items-center justify-center mx-auto mb-8"
        >
          <Construction className="w-12 h-12 text-indigo-600" />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-display">
          Coming Soon
        </h1>
        
        <p className="text-lg text-slate-500 mb-3">
          <span className="font-semibold text-indigo-600">{pageTitle}</span>
        </p>
        
        <p className="text-slate-400 mb-10 leading-relaxed">
          This page is currently under development. We're working hard to bring you this content. Please check back later!
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all hover:shadow-lg hover:shadow-indigo-200 hover:-translate-y-0.5"
          >
            <Home size={18} />
            Go Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all hover:shadow-md hover:-translate-y-0.5"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
