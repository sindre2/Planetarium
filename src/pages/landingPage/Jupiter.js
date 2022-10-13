import { motion } from "framer-motion";
import { PlanetInfo } from "../../components/PlanetInfo";

const Jupiter = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PlanetInfo index={2} name={"Jupiter"} />
    </motion.div>
  );
};

export default Jupiter;
