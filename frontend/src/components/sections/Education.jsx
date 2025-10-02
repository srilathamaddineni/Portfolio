import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            My academic background and qualifications
          </p>
        </div>

        {/* Education Items */}
        <div className="space-y-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Header with Degree and School */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-start mb-4 md:mb-0">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold flex items-center mt-1">
                      {edu.school}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 flex items-center mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {edu.location}
                    </p>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="font-medium">{edu.duration}</span>
                </div>
              </div>

              {/* Description */}
              {edu.description && (
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;