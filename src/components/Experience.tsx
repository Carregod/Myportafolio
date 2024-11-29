import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const experiences = [

  {
    key: 'xorex',
    company: 'experience.xorex.company',
    position: 'experience.xorex.title',
    period: 'experience.xorex.period',
    description: 'experience.xorex.description'
  },
  {
    key: 'comware',
    company: 'experience.comware.company',
    position: 'experience.comware.title',
    period: 'experience.comware.period',
    description: 'experience.comware.description'
  },
  {
    key: 'milleniem',
    company: 'experience.milleniem.company',
    position: 'experience.milleniem.title',
    period: 'experience.milleniem.period',
    description: 'experience.milleniem.description'
  },
  {
    key: 'compusertec',
    company: 'experience.compusertec.company',
    position: 'experience.compusertec.title',
    period: 'experience.compusertec.period',
    description: 'experience.compusertec.description'
  }
];

export function Experience() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gray-50" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('experience.title')}</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp) => (
            <div key={exp.key} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-blue-900">{t(exp.company)}</h3>
              <div className="text-lg text-gray-700 mb-2">{t(exp.position)}</div>
              <div className="text-sm text-gray-500 mb-4">{t(exp.period)}</div>
              <p className="text-gray-600">{t(exp.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



