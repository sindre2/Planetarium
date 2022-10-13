import { motion } from "framer-motion";
import { PlanetInfo } from "../../components/PlanetInfo";

const Mars = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PlanetInfo index={3} name={"Mars"} />
    </motion.div>
  );
};

export default Mars;
