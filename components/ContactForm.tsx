import React, { useState } from 'react';
import { CursorHover } from './Cursor';

interface ContactFormProps {
  idPrefix: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ idPrefix }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setStatus('Message envoyé avec succès !');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } else {
      setStatus('Veuillez remplir tous les champs.');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor={`${idPrefix}-name`} className="sr-only">Nom</label>
        <CursorHover cursorStyle="text">
          <input
            type="text"
            name="name"
            id={`${idPrefix}-name`}
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom"
            className="w-full bg-gray-800/50 border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-white focus:border-white transition"
          />
        </CursorHover>
      </div>
      <div>
        <label htmlFor={`${idPrefix}-email`} className="sr-only">Email</label>
        <CursorHover cursorStyle="text">
          <input
            type="email"
            name="email"
            id={`${idPrefix}-email`}
            value={formData.email}
            onChange={handleChange}
            placeholder="Votre email"
            className="w-full bg-gray-800/50 border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-white focus:border-white transition"
          />
        </CursorHover>
      </div>
      <div>
        <label htmlFor={`${idPrefix}-message`} className="sr-only">Message</label>
        <CursorHover cursorStyle="text">
          <textarea
            name="message"
            id={`${idPrefix}-message`}
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Parlez-nous de votre projet"
            className="w-full bg-gray-800/50 border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-white focus:border-white transition"
          ></textarea>
        </CursorHover>
      </div>
      <div className="flex justify-between items-center">
        <CursorHover>
          <button
            type="submit"
            className="bg-white text-black font-bold py-3 px-6 rounded-md hover:bg-gray-200 transition-all duration-300"
          >
            Envoyer
          </button>
        </CursorHover>
        {status && <p className="text-sm text-gray-300">{status}</p>}
      </div>
    </form>
  );
};

export default ContactForm;