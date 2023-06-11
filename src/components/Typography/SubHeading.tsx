import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SubHeadingProps {
  children: ReactNode;
}

const SubHeading = ({ children }: SubHeadingProps) => {
  return (
    <motion.h2
      initial={{ translateX: "-100px", opacity: 0 }}
      whileInView={{ translateX: "0px", opacity: 1 }}
      exit={{ translateX: "100px", opacity: 0 }}
      transition={{ delay: 0.25 }}
    >
      {children}
    </motion.h2>
  );
};

export default SubHeading;
