import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Education() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gray-50" id="education">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('education.title')}</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-900">{t('education.systems')}</h3>
            <div className="text-lg text-gray-700 mb-2">{t('education.systems.semester')}</div>
            <p className="text-gray-600">
              {t('education.systems.desc')}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-900">{t('education.tech')}</h3>
            <div className="text-lg text-gray-700 mb-2">{t('education.tech.specialty')}</div>
            <p className="text-gray-600">
              {t('education.tech.desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}