import { Github, Linkedin, Mail, MapPin, Download } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

const Hero = () => {
  const { personal, social } = portfolioData;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-4xl font-bold text-gray-700 dark:text-gray-300">
              S
            </div>
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {personal.name}
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
          {personal.title}
        </p>

        {/* Bio */}
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          {personal.bio}
        </p>

        {/* Location */}
        <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 mb-8">
          <MapPin className="w-5 h-5 mr-2" />
          <span>{personal.location}</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Get In Touch
          </a>
          
          <a
            href={personal.resume}
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-200 flex items-center"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center space-x-6">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
          >
            <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </a>
          
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
          >
            <Linkedin className="w-6 h-6 text-blue-600" />
          </a>
          
          <a
            href={`mailto:${social.email}`}
            className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
          >
            <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;