import { motion } from "framer-motion";
import { PlanetInfo } from "../../components/Planets/PlanetInfo";

const Venus = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PlanetInfo index={7} name={"Venus"} />
    </motion.div>
  );
};

export default Venus;
