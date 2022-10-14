import { motion } from "framer-motion";
import { PlanetInfo } from "../../components/Planets/PlanetInfo";

const Earth = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PlanetInfo index={6} name={"Earth"} />
    </motion.div>
  );
};

export default Earth;
