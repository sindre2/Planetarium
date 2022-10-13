import { motion } from "framer-motion";
import { PlanetInfo } from "../../components/PlanetInfo";

const Neptune = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PlanetInfo index={1} name={"Neptune"} />
    </motion.div>
  );
};

export default Neptune;
