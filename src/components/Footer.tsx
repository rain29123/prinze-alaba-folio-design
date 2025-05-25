
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="bg-black/20 backdrop-blur-md border-t border-white/10 py-8"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.p
          className="text-white/60 flex items-center justify-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          Made with <Heart size={16} className="text-red-400" /> by Prinze Robinson B Alaba
        </motion.p>
        <motion.p
          className="text-white/40 text-sm mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          © 2024 All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
