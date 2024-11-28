import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    'header.title': 'IT Analyst & Systems Engineer',
    'header.description': 'Experienced IT professional with over 5 years in network operations, technical support, and systems analysis. Currently completing Systems Engineering degree (10th semester).',
    'experience.title': 'Professional Experience',
    'experience.milleniem.title': 'React Developer & IT Analyst',
    'experience.milleniem.company': 'Milleniem',
    'experience.milleniem.period': 'Abr 2022 – Ago 2022',
    'experience.milleniem.description': 'Developed and maintained React applications while providing IT analysis support. Collaborated with cross-functional teams to implement technical solutions and improve system performance.',
    'experience.xorex.title': 'NOC Analyst',
    'experience.xorex.company': 'Xorex',
    'experience.xorex.period': 'feb 2023 - Present',
    'experience.xorex.description': 'Monitored network infrastructure and systems, performed troubleshooting, and maintained network security. Implemented preventive measures and responded to technical incidents.',
    'experience.comware.title': 'Support Ambassador',
    'experience.comware.company': 'Comware',
    'experience.comware.period': 'Ago 2022 – Feb 2023',
    'experience.comware.description': 'Led technical support initiatives and served as main point of contact for client concerns. Provided advanced troubleshooting and maintained high customer satisfaction levels.',
    'experience.compusertec.title': 'Technical Support Specialist',
    'experience.compusertec.company': 'Compusertec',
    'experience.compusertec.period': 'Feb 2018 – Sep 2020',
    'experience.compusertec.description': 'Delivered comprehensive technical support for hardware and software issues. Managed structured cabling projects and system maintenance.',
    'skills.title': 'Skills & Expertise',
    'skills.technical': 'Technical Skills',
    'skills.analysis': 'Analysis & Tools',
    'skills.soft': 'Soft Skills',
    'skills.technical.list': 'React.js Development|Network Operations|System Administration|Technical Support|Structured Cabling|Hardware Maintenance|Network Security|Incident Management',
    'skills.analysis.list': 'Microsoft Office Excel|Power BI|Data Analysis|Project Management|Technical Documentation|System Monitoring|Troubleshooting|Network Diagnostics',
    'skills.soft.list': 'Problem Solving|Effective Communication|Team Leadership|Client Relations|Time Management|Critical Thinking|Adaptability|Customer Service',
    'education.title': 'Education',
    'education.systems': 'Systems Engineering',
    'education.systems.semester': '10th Semester',
    'education.systems.desc': 'Advanced coursework in software development, network architecture, and systems design.',
    'education.tech': 'Technology Degree',
    'education.tech.specialty': 'PC Maintenance & Structured Cabling',
    'education.tech.desc': 'Specialized training in hardware maintenance, network infrastructure, and technical support.',
    'contact.title': 'Contact Me',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.linkedin': 'LinkedIn Profile',
    'contact.github': 'GitHub Profile',
    'footer.rights': 'All rights reserved'
  },
  es: {
    'header.title': 'Analista IT & Ingeniero de Sistemas',
    'header.description': 'Profesional IT con más de 5 años de experiencia en operaciones de red, soporte técnico y análisis de sistemas. Actualmente cursando último semestre de Ingeniería de Sistemas.',
    'experience.title': 'Experiencia Profesional',
    'experience.milleniem.title': 'Desarrollador React & Analista IT',
    'experience.milleniem.company': 'Milleniem',
    'experience.milleniem.period': 'Abr 2022 – Ago 2022',
    'experience.milleniem.description': 'Desarrollo y mantenimiento de aplicaciones React mientras brindo soporte de análisis IT. Colaboración con equipos multifuncionales para implementar soluciones técnicas y mejorar el rendimiento del sistema.',
    'experience.xorex.title': 'Analista NOC',
    'experience.xorex.company': 'Xorex',
    'experience.xorex.period': 'feb 2023 - Actual ',
    'experience.xorex.description': 'Monitoreo de infraestructura de red y sistemas, resolución de problemas y mantenimiento de seguridad de red. Implementación de medidas preventivas y respuesta a incidentes técnicos.',
    'experience.comware.title': 'Embajador de Soporte',
    'experience.comware.company': 'Comware',
    'experience.comware.period': 'Ago 2022 – Feb 2023 ',
    'experience.comware.description': 'Lideré iniciativas de soporte técnico y serví como punto principal de contacto para inquietudes de clientes. Proporcioné resolución avanzada de problemas y mantuve altos niveles de satisfacción del cliente.',
    'experience.compusertec.title': 'Especialista en Soporte Técnico',
    'experience.compusertec.company': 'Compusertec',
    'experience.compusertec.period': 'Feb 2018 – Sep 2020',
    'experience.compusertec.description': 'Brindé soporte técnico integral para problemas de hardware y software. Gestioné proyectos de cableado estructurado y mantenimiento de sistemas.',
    'skills.title': 'Habilidades y Experiencia',
    'skills.technical': 'Habilidades Técnicas',
    'skills.analysis': 'Análisis y Herramientas',
    'skills.soft': 'Habilidades Blandas',
    'skills.technical.list': 'Desarrollo React.js|Operaciones de Red|Administración de Sistemas|Soporte Técnico|Cableado Estructurado|Mantenimiento de Hardware|Seguridad de Red|Gestión de Incidentes',
    'skills.analysis.list': 'Microsoft Office Excel|Power BI|Análisis de Datos|Gestión de Proyectos|Documentación Técnica|Monitoreo de Sistemas|Resolución de Problemas|Diagnóstico de Red',
    'skills.soft.list': 'Resolución de Problemas|Comunicación Efectiva|Liderazgo de Equipo|Relaciones con Clientes|Gestión del Tiempo|Pensamiento Crítico|Adaptabilidad|Servicio al Cliente',
    'education.title': 'Educación',
    'education.systems': 'Ingeniería de Sistemas',
    'education.systems.semester': '10º Semestre',
    'education.systems.desc': 'Formación avanzada en desarrollo de software, arquitectura de redes y diseño de sistemas.',
    'education.tech': 'Tecnología',
    'education.tech.specialty': 'Mantenimiento de PC y Cableado Estructurado',
    'education.tech.desc': 'Formación especializada en mantenimiento de hardware, infraestructura de red y soporte técnico.',
    'contact.title': 'Contacto',
    'contact.email': 'Correo',
    'contact.phone': 'Teléfono',
    'contact.linkedin': 'Perfil de LinkedIn',
    'contact.github': 'Perfil de GitHub',
    'footer.rights': 'Todos los derechos reservados'
  }
};