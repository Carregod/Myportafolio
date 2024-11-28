import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Johan Sebastian Carreño Rusinque</h1>
          <h2 className="text-2xl mb-6">{t('header.title')}</h2>
          <div className="flex items-center gap-4 mb-6">
            <MapPin className="w-5 h-5" />
            <span>Bogotá, Colombia</span>
          </div>
          <p className="text-lg mb-8">
            {t('header.description')}
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/Carregod" className="hover:text-blue-200 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/johan-sebasti%C3%A1n-carre%C3%B1o-rusinque-3a93b7211/" className="hover:text-blue-200 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:sebatianc.1902@gmail.com" className="hover:text-blue-200 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}