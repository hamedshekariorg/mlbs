import LandingTourPackage from './LandingTourPackage';
import LandingGetStart from './LandingGetStart';
import LandingHotelsAndRestaurants from './LandingHotelsAndRestaurants';
import LandingAttraction from './LandingAttraction';
import LandingMotion from './LandingMotion';

export default function LandingPage() {
  return (
    <>
      <LandingTourPackage />
      <LandingHotelsAndRestaurants
        title="Tehran"
        text="Parsian Esteghlal Hotel"
        type="hotel"
        id="my-btn"
      />
      <LandingHotelsAndRestaurants
        title="Tehran"
        text="Roast Restaurant"
        type="restaurant"
        id="my-button"
      />
      <LandingGetStart />
      <LandingAttraction />
      <LandingMotion />
    </>
  );
}
