
import { motion } from "framer-motion";
import { ExternalLink, Github, Camera, Palette, Music, Code } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Photography Collection",
      category: "Photography",
      icon: Camera,
      description: "A curated collection of landscape and portrait photography showcasing natural beauty.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      technologies: ["Canon EOS", "Lightroom", "Photoshop"],
      color: "from-green-400 to-blue-500"
    },
    {
      id: 2,
      title: "Digital Art Gallery",
      category: "Art",
      icon: Palette,
      description: "Creative digital artwork exploring abstract concepts and modern design principles.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      technologies: ["Procreate", "Adobe Illustrator", "Blender"],
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 3,
      title: "Music Production Studio",
      category: "Music",
      icon: Music,
      description: "Original compositions and soundscapes created with modern production techniques.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      technologies: ["Logic Pro", "Ableton", "Native Instruments"],
      color: "from-yellow-400 to-red-500"
    },
    {
      id: 4,
      title: "Web Applications",
      category: "Development",
      icon: Code,
      description: "Full-stack web applications with modern frameworks and responsive design.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      technologies: ["React", "Node.js", "TypeScript"],
      color: "from-cyan-400 to-blue-600"
    }
  ];

  return (
    <section className="min-h-screen py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Portfolio
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Explore my creative works across photography, art, music, and development projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-black/50 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2">
                    <project.icon size={16} className="text-white" />
                    <span className="text-white text-sm font-medium">{project.category}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-black/50 backdrop-blur-md rounded-full p-2 text-white hover:bg-black/70 transition-colors"
                  >
                    <ExternalLink size={16} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-black/50 backdrop-blur-md rounded-full p-2 text-white hover:bg-black/70 transition-colors"
                  >
                    <Github size={16} />
                  </motion.button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm font-medium hover:bg-white/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-6 py-3 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                >
                  View Project
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
