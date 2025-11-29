"use client";

import React, { useState } from 'react';
import { Share2, X, Facebook, Twitter, Linkedin, Mail, MessageCircle, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ShareButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const shareText = "PODIJELITE DA DADO NE MOŽE VIŠE VARATI";
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  const shareLinks = [
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-5 h-5" />,
      url: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-5 h-5" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      color: 'bg-sky-500 hover:bg-sky-600'
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      url: `mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent(shareText + '\n\n' + shareUrl)}`,
      color: 'bg-gray-600 hover:bg-gray-700'
    },
    {
      name: 'SMS',
      icon: <MessageSquare className="w-5 h-5" />,
      url: `sms:?body=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
      color: 'bg-yellow-600 hover:bg-yellow-700'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: 'bg-blue-700 hover:bg-blue-800'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 bg-black/90 border border-green-500/30 p-4 rounded-xl shadow-[0_0_20px_rgba(0,255,0,0.2)] backdrop-blur-md min-w-[280px]"
          >
            <div className="text-green-500 font-bold text-center mb-4 text-sm tracking-wider border-b border-green-500/20 pb-2">
              {shareText}
            </div>
            <div className="grid grid-cols-2 gap-3">
              {shareLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 p-2 rounded-lg text-white transition-all transform hover:scale-105 ${link.color}`}
                >
                  {link.icon}
                  <span className="text-xs font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold shadow-lg transition-all duration-300 ${
          isOpen 
            ? 'bg-red-600 hover:bg-red-700 text-white shadow-red-500/30' 
            : 'bg-green-600 hover:bg-green-700 text-white shadow-green-500/30'
        }`}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Share2 className="w-5 h-5" />}
        <span>{isOpen ? 'ZATVORI' : 'PODIJELITE ISTINU'}</span>
      </motion.button>
    </div>
  );
};
