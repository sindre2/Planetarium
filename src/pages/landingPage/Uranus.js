import { motion } from "framer-motion";
import { PlanetInfo } from "../../components/PlanetInfo";

const Uranus = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PlanetInfo index={0} name={"Uranus"} />
    </motion.div>
  );
};

export default Uranus;
