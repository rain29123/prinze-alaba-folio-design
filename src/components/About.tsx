
import { motion } from "framer-motion";
import { Calendar, MapPin, Phone, Mail, Camera, Palette, Music } from "lucide-react";

const About = () => {
  const personalInfo = [
    { icon: Calendar, label: "Age", value: "24 years old" },
    { icon: Calendar, label: "Birthdate", value: "January 29, 2001" },
    { icon: MapPin, label: "Address", value: "Zone 4 Bugo, Cagayan de Oro City" },
    { icon: Phone, label: "Contact", value: "09282217788" },
    { icon: Mail, label: "Email", value: "alaba.prinzzerobinson29@gmail.com" },
  ];

  const interests = [
    { icon: Camera, name: "Photography", description: "Capturing moments and telling stories through the lens" },
    { icon: Palette, name: "Art", description: "Creating visual expressions and exploring different mediums" },
    { icon: Music, name: "Music", description: "Appreciating melodies and rhythms that inspire creativity" },
  ];

  return (
    <section className="min-h-screen py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Get to know more about who I am, my background, and what drives my passion for creativity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              Personal Information
            </h3>
            
            <div className="space-y-6">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <info.icon size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm font-medium">{info.label}</p>
                    <p className="text-white font-semibold">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
              Personal Interests
            </h3>

            {interests.map((interest, index) => (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/20 p-3 rounded-lg">
                    <interest.icon size={24} className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{interest.name}</h4>
                    <p className="text-white/70">{interest.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Skills & Expertise</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {["Creative Design", "Web Development", "Digital Arts"].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">
                  {skill.split(' ').map(word => word[0]).join('')}
                </div>
                <h4 className="text-white font-semibold">{skill}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
