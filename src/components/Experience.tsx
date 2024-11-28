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



// const experiences = [
//   {
//     company: 'Xorex',
//     position: 'NOC Analyst',
//     period: 'Feb 2023 – Actualidad',
//     description: 'Monitored network infrastructure and systems, performed troubleshooting, and maintained network security. Implemented preventive measures and responded to technical incidents.'
//   },
//   {
//     company: 'Comware',
//     position: 'Support Ambassador',
//     period: 'Ago 2022 – Feb 2023',
//     description: 'Led technical support initiatives and served as main point of contact for client concerns. Provided advanced troubleshooting and maintained high customer satisfaction levels.'
//   },
//   {
//     company: 'Millenium MBPO',
//     position: 'Support Ambassador',
//     period: 'Abr 2022 – Ago 2022',
//     description: 'Suministrar apoyo, reparaciones y mantenimiento de equipos de cómputo, generación y escalamiento de tickets, soporte a múltiples plataformas tales como CRM, SAP, Directorio Activo, Generación de Arandas, etc.'
//   },
//   {
//     company: 'Compucertec, Asesorías Forestales LTDA',
//     position: 'Technical Support Specialist',
//     period: 'Feb 2018 – Sep 2020',
//     description: 'Delivered comprehensive technical support for hardware and software issues. Managed structured cabling projects and system maintenance.'
//   }
// ];