import Image from "next/image";
import { CustomButton } from "./CustomButton";

const Hero = () => {
  return (
    <div className="hero max-width">
      <div className="flex-1 pt-36 sm:px-16 px-6">
        <div className="hero__title">
          Find, book, rent a car—quick and super easy!
        </div>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-blue-700 rounded-full"
          textStyles="text-white"
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
