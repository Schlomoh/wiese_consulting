import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
// import { hideScrollbarStyle } from "../../utils";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const PageTransitioner = (props: Props) => {
  const { children } = props;
  const { pathname } = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const pageTransition = {
    type: "tween",
    duration: 1,
  };

  return (
    <motion.div
      key={pathname}
      initial="initial"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default PageTransitioner;
