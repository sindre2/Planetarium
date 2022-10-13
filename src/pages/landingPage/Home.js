import { motion } from "framer-motion";
import SolarSystem from "../../components/solarsystem/SolarSystem";
const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SolarSystem />
    </motion.div>
  );
};

export default HomePage;
