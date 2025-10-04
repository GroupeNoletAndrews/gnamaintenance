
import React, { useState, useEffect } from 'react';
import { CursorProvider } from './components/Cursor';
import Prism from './components/PrismOptimized';
import TiltedCard from './components/TiltedCard';
import { motion } from 'framer-motion';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 75) {
          clearInterval(progressTimer);
          return 75;
        }
        return prev + Math.random() * 10;
      });
    }, 200);

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, []);

  return (
    <CursorProvider>
      <div className="fixed inset-0 -z-10 opacity-50">
        <Prism
          animationType="3drotate"
          height={3.5}
          baseWidth={5.5}
          glow={1.5}
          noise={0}
          scale={3.6}
          timeScale={0.2}
          suspendWhenOffscreen
        />
      </div>

      <div className="fixed inset-0 -z-5 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="bg-transparent text-gray-300 h-full w-full flex items-center justify-center text-center">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            {/* Logo */}
            <motion.div 
              className="mx-auto h-auto w-full max-w-xs sm:max-w-md lg:max-w-2xl mb-6 sm:mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <TiltedCard
                    imageSrc="https://plexview.ca/assets/Nolet__andrews_blanc-CHc9YYqz.png"
                    altText="Groupe Nolet & Andrews"
                    containerWidth="100%"
                    containerHeight="200px"
                    imageWidth="100%"
                    imageHeight="200px"
                    scaleOnHover={1.05}
                    rotateAmplitude={8}
                    showMobileWarning={false}
                    showTooltip={false}
                />
            </motion.div>
            
            <h1 className="sr-only">Groupe Nolet & Andrews</h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl lg:text-3xl text-gray-300 px-4">
                  Notre site web est en pleine reconstruction.
                  <br />
                  Revenez bientôt pour découvrir notre nouvelle plateforme.
              </p>
            </motion.div>

            <motion.div
              className="mt-8 sm:mt-12 max-w-md mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-center justify-center space-x-2 mb-4">
                <span className="text-xs sm:text-sm text-gray-400">Construction en cours</span>
                <motion.div
                  className="flex space-x-1"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <div className="w-2 h-2 bg-white/60 rounded-full" />
                  <div className="w-2 h-2 bg-white/60 rounded-full" />
                  <div className="w-2 h-2 bg-white/60 rounded-full" />
                </motion.div>
              </div>
              
              <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(progress, 75)}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
              
              <motion.p
                className="mt-2 text-xs sm:text-sm text-gray-400"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {Math.round(Math.min(progress, 75))}% terminé
              </motion.p>
            </motion.div>

            <motion.div
              className="mt-6 sm:mt-8 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            >
              <p className="text-sm sm:text-base lg:text-lg text-gray-400 italic">
                "La patience est la clé de la perfection"
              </p>
            </motion.div>
        </div>
      </div>
    </CursorProvider>
  );
}
