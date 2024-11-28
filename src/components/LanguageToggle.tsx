import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 bg-white text-blue-900 p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors flex items-center gap-2"
      aria-label="Toggle language"
    >
      <Languages className="w-5 h-5" />
      <span className="font-medium">{language.toUpperCase()}</span>
    </button>
  );
}