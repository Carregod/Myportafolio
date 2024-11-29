import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-16 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <a href="mailto:contact@email.com" 
               className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Mail className="w-6 h-6 text-blue-900" />
              <span>sebastianc.1902@hotmail.com  sebatianc.1902@gmail.com</span>
            </a>
            <a href="tel:+57 3132671764" 
               className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Phone className="w-6 h-6 text-blue-900" />
              <span>+57 313 267 1764</span>
            </a>
            <a href="https://www.linkedin.com/in/johan-sebasti%C3%A1n-carre%C3%B1o-rusinque-3a93b7211/" 
               className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Linkedin className="w-6 h-6 text-blue-900" />
              <span>LinkedIn Profile</span>
            </a>
            <a href="https://github.com/Carregod" 
               className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Github className="w-6 h-6 text-blue-900" />
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}