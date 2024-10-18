import React from "react";

const WebDevelopmentExpertise = () => {
  const categories = [
    {
      title: "Frontend",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      bgColor: "bg-gradient-to-r from-blue-500 to-blue-700",
    },
    {
      title: "Backend",
      technologies: ["Node.js", "Django", "Express", "Ruby on Rails"],
      bgColor: "bg-gradient-to-r from-pink-500 to-pink-700",
    },
    {
      title: "Tools & Libraries",
      technologies: ["Webpack", "Babel", "ESLint", "Jest"],
      bgColor: "bg-gradient-to-r from-green-500 to-green-700",
    },
    {
      title: "Cloud Services",
      technologies: ["AWS", "Azure", "Firebase", "Heroku"],
      bgColor: "bg-gradient-to-r from-yellow-500 to-yellow-700",
    },
  ];

  return (
    <div className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">
          Our Expertise in Web Development
        </h2>
        <p className="text-lg text-center mb-8">
          At Bigmac, we combine innovative design with technical excellence to
          deliver impactful, user-centric web solutions.
        </p>
        <div className="text-center mb-8">
          <button className="bg-gray-700 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
            Get in Touch
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 ${category.bgColor} hover:opacity-90`}
            >
              <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.technologies.map((tech, idx) => (
                  <li key={idx} className="text-md">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentExpertise;
