import { Code, Database, Globe, Smartphone } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

const About = () => {
  const { personal } = portfolioData;

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with React and modern CSS frameworks"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend Development",
      description: "Creating robust APIs and server-side applications with Node.js and databases"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Full Stack Projects",
      description: "End-to-end application development from concept to deployment"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring great experience across all devices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-gray-600 dark:text-gray-400 mb-2">
                      {personal.name.charAt(0)}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Add your photo here
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>

          {/* Bio Text */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm {personal.name}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {personal.bio}
            </p>
            
            {/* Additional Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="font-semibold mr-2">Email:</span>
                <a href={`mailto:${personal.email}`} className="text-blue-600 hover:text-blue-700 dark:text-blue-400">
                  {personal.email}
                </a>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="font-semibold mr-2">Location:</span>
                <span>{personal.location}</span>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={personal.resume}
              download
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                {item.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;