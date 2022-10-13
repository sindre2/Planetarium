import { motion } from "framer-motion";
import { PlanetInfo } from "../../components/PlanetInfo";

const Mercury = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PlanetInfo index={4} name={"Mercury_Planet"} />
    </motion.div>
  );
};

export default Mercury;
