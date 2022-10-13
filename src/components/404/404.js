import { motion } from "framer-motion";
import fourOfFour from "../../img/404.svg";
import astronaut from "../../img/astronaut.svg";
import { Astronaut, AstronautWrapper, Image404, Wrapper404 } from "./404Styles";

const PageNotFound = () => {
  console.log(astronaut);
  return (
    <Wrapper404
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Image404 src={fourOfFour} alt=""></Image404>
      <AstronautWrapper>
        <Astronaut src={astronaut} alt=""></Astronaut>
      </AstronautWrapper>
    </Wrapper404>
  );
};

export default PageNotFound;
