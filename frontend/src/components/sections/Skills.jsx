import { Code, Server, Wrench } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

const Skills = () => {
  const { skills } = portfolioData;

  const categories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      skills: skills.frontend,
      color: "blue"
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: skills.backend,
      color: "green"
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-6 h-6" />,
      skills: skills.tools,
      color: "purple"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-100 dark:bg-blue-900",
        text: "text-blue-600 dark:text-blue-400",
        progress: "bg-blue-600"
      },
      green: {
        bg: "bg-green-100 dark:bg-green-900",
        text: "text-green-600 dark:text-green-400",
        progress: "bg-green-600"
      },
      purple: {
        bg: "bg-purple-100 dark:bg-purple-900",
        text: "text-purple-600 dark:text-purple-400",
        progress: "bg-purple-600"
      }
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color);
            
            return (
              <div
                key={categoryIndex}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center ${colors.text} mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-4 py-2 ${colors.bg} ${colors.text} rounded-lg font-medium text-sm hover:shadow-md transition-shadow duration-200`}
                    >
                      {typeof skill === 'string' ? skill : skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies. 
              Currently exploring new frameworks and best practices to deliver even better solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;