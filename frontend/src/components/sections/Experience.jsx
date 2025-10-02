import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            My professional journey and the experiences that shaped my skills
          </p>
        </div>

        {/* Experience Items */}
        <div className="space-y-8">
          {experience.map((job) => (
            <div
              key={job.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Header with Company and Position */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-start mb-4 md:mb-0">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {job.position}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold flex items-center mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.company}
                    </p>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="font-medium">{job.duration}</span>
                </div>
              </div>

              {/* Responsibilities - Bullet Points */}
              <ul className="space-y-3 mb-4 ml-6">
                {job.responsibilities.map((item, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed text-left relative before:content-['•'] before:absolute before:-left-6 before:text-blue-600 dark:before:text-blue-400 before:font-bold">
                    {item}
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              {job.technologies && job.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Experience;