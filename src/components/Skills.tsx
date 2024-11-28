import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Skills() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('skills.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              titleKey: 'skills.technical',
              skillsKey: 'skills.technical.list'
            },
            {
              titleKey: 'skills.analysis',
              skillsKey: 'skills.analysis.list'
            },
            {
              titleKey: 'skills.soft',
              skillsKey: 'skills.soft.list'
            }
          ].map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">
                {t(category.titleKey)}
              </h3>
              <div className="space-y-2">
                {t(category.skillsKey)
                  .split('|')
                  .map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}