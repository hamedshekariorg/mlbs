import { useSelector } from 'react-redux';
import StepOne from './StepOne';
import LevelOne from './LevelOne';
import LevelTwo from './LevelTwo';
import LevelThree from './LevelThree';
import LevelFour from './LevelFour';
import LevelFive from './LevelFive';
import LevelSixSeven from './LevelSixSeven';
import LevelEight from './LevelEight';
import Contact from './Contact';
import Done from '../Done';

const Content = () => {
  const { step, level, done } = useSelector(
    (state) => state?.customTourPackage,
  );

  done && <Done />;

  switch (step) {
    case 0:
      return <StepOne />;
    case 1:
      switch (level) {
        case 1:
          return <LevelOne />;
        case 2:
          return <LevelTwo />;
        case 3:
          return <LevelThree />;
        case 4:
          return <LevelFour />;
        case 5:
          return <LevelFive />;
        case 6:
          return <LevelSixSeven type="city" />;
        case 7:
          return <LevelSixSeven type="attraction" />;
        case 8:
          return <LevelEight />;
      }
    case 2:
      return <Contact />;
    default:
      return <StepOne />;
  }
};

export default Content;
