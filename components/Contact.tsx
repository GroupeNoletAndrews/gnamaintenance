
import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { motion } from 'framer-motion';
import { AnimatedContainer, itemVariants } from './Animated';
import ContactForm from './ContactForm';
import { CursorHover } from './Cursor';
import Footer from './Footer';

interface ContactProps {
  isActive?: boolean;
}

const Contact: React.FC<ContactProps> = ({ isActive }) => {
  const variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.3, when: "beforeChildren" } },
    hidden: { opacity: 0, scale: 0.95, transition: { duration: 0.5 } }
  };

  return (
    <>
      <section id="contact" className="w-full bg-gray-950/70 backdrop-blur-sm py-32">
        <motion.div
          className="w-full"
          variants={variants}
          initial="hidden"
          animate={isActive ? 'visible' : 'hidden'}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedContainer className="text-center" stagger={0.1}>
              <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Contactez-nous</motion.h2>
              <motion.p variants={itemVariants} className="mt-4 max-w-3xl mx-auto text-xl text-gray-400">
                Prêt à démarrer un projet ou simplement envie de discuter ? Nous sommes là pour vous.
              </motion.p>
            </AnimatedContainer>
            <AnimatedContainer className="mt-16 grid md:grid-cols-2 gap-16 items-start" stagger={0.2}>
              <motion.div variants={itemVariants} className="bg-gray-900/50 border border-gray-800 p-8 rounded-lg">
                <h3 className="text-3xl font-bold text-white mb-6">Envoyer un message</h3>
                <ContactForm idPrefix="page" />
              </motion.div>
              <motion.div variants={itemVariants} className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Email</h3>
                  <CursorHover as="a" href="mailto:info@noletandrews.ca" className="text-lg text-gray-400 hover:text-white transition inline-block">info@noletandrews.ca</CursorHover>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Téléphone</h3>
                  <CursorHover as="a" href="tel:5819868494" className="text-lg text-gray-400 hover:text-white transition inline-block">+1 (581) 986-8494</CursorHover>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Suivez-nous</h3>
                  <div className="flex space-x-4">
                    {SOCIAL_LINKS.map((link) => (
                      <CursorHover as="a" key={link.name} href={link.href} className="text-gray-400 hover:text-white transition">
                        <span className="sr-only">{link.name}</span>
                        {link.icon}
                      </CursorHover>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedContainer>
          </div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
