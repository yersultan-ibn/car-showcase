"use client";
import Image from "next/image";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";

const CarCard = ({ car }) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="car-card group">
        <div className="car-card__content">
          <h2 className="car-card__content-title">
            {make} {model}
          </h2>
          <p className="card-card__prise flex text-[30px] font-semibold">
            <span className="self-start text-[15px]">$</span>
            {city_mpg} {year}
            <span className="self-end text-[13px]">/day</span>
          </p>
        </div>
        <img
          src="https://project-next13-car-showcase-mu.vercel.app/_next/image?url=https%3A%2F%2Fcdn.imagin.studio%2Fgetimage%3Fcustomer%3Dusnexacore%26make%3Dporsche%26modelFamily%3Dcayenne%26zoomType%3Dfullscreen%26modelYear%3D2023%26angle%3Dundefined&w=3840&q=75"
          alt=""
        />
        <div className="car-card__bottom group-hover:invisible">
          <div className="car-card__icon">
            <Image src="/steering-wheel.svg" width={20} height={20} alt="" />
            <p className="car-card__icon-text">Automatic</p>
          </div>
          <div className="car-card__icon">
            <Image src="/tire.svg" width={20} height={20} alt="" />
            <p className="car-card__icon-text">AWD</p>
          </div>
          <div className="car-card__icon">
            <Image src="/gas.svg" width={20} height={20} alt="" />
            <p className="car-card__icon-text">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container group-hover:flex">
          <CustomButton
            onClick={handleModal}
            title="View More"
            containerStyles="bg-primary-blue text-white rounded-full mt-10 mr-auto ml-auto"
            rightIcon="/right-arrow.svg"
            textStyles="mr-4"
          />
        </div>
      </div>
      {showModal && (
        <CarDetails
          car={car}
          isOpen={isOpen}
          closeModal={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default CarCard;
