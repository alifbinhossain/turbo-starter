import * as React from 'react';
import { motion } from 'framer-motion';
const Button = () => {
  return (
    <motion.button
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          ease: 'easeIn',
        },
      }}
      className='rounded-sm bg-orange-600 px-4 py-2 font-medium text-white'
    >
      Boop
    </motion.button>
  );
};

export default Button;
