import { motion } from "framer-motion";
import { PlanetInfo } from "../../components/Planets/PlanetInfo";

const Saturn = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PlanetInfo index={5} name={"Saturn"} />
    </motion.div>
  );
};

export default Saturn;
