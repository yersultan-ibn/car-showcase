"use client";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

const CarDetails = ({ isOpen, closeModal }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog open={isOpen} className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <Dialog.Panel>
            <div className="modal-wrapper">
              <div className="modal-inner">
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-1 text-gray-600 z-10 bg-primary-blue-100 rounded-full p-[10px]"
                >
                  <Image
                    width={20}
                    height={20}
                    alt="close"
                    className="object-contain"
                    src="/close.svg"
                  />
                </button>
                <div className="modal">
                  <div className="modal-top">
                    <div className="modal-top__main">
                      <img
                        className="w-[50%] m-auto"
                        src="https://project-next13-car-showcase-mu.vercel.app/_next/image?url=https%3A%2F%2Fcdn.imagin.studio%2Fgetimage%3Fcustomer%3Dusnexacore%26make%3Dbmw%26modelFamily%3Dm8%26zoomType%3Dfullscreen%26modelYear%3D2022%26angle%3Dundefined&w=3840&q=75"
                        alt=""
                      />
                    </div>
                    <div className="modal-mini__wrapper">
                      <div className="modal-top__mini">
                        <img
                          src="https://project-next13-car-showcase-mu.vercel.app/_next/image?url=https%3A%2F%2Fcdn.imagin.studio%2Fgetimage%3Fcustomer%3Dusnexacore%26make%3Dbmw%26modelFamily%3Dm8%26zoomType%3Dfullscreen%26modelYear%3D2022%26angle%3D29&w=3840&q=75"
                          alt=""
                        />
                      </div>
                      <div className="modal-top__mini">
                        <img
                          src="https://project-next13-car-showcase-mu.vercel.app/_next/image?url=https%3A%2F%2Fcdn.imagin.studio%2Fgetimage%3Fcustomer%3Dusnexacore%26make%3Dbmw%26modelFamily%3Dm8%26zoomType%3Dfullscreen%26modelYear%3D2022%26angle%3D33&w=3840&q=75"
                          alt=""
                        />
                      </div>
                      <div className="modal-top__mini">
                        <img
                          src="https://project-next13-car-showcase-mu.vercel.app/_next/image?url=https%3A%2F%2Fcdn.imagin.studio%2Fgetimage%3Fcustomer%3Dusnexacore%26make%3Dbmw%26modelFamily%3Dm8%26zoomType%3Dfullscreen%26modelYear%3D2022%26angle%3D13&w=3840&q=75"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="modal-content">
                    <h2 className="font-bold text-xl mt-5">
                      Bmw M8 Competition Coupe
                    </h2>
                    <div className="modal-content__item">
                      <p className="text-grey capitalize">City Mpg</p>
                      <span className="text-black-100 font-semibold">15</span>
                    </div>
                    <div className="modal-content__item">
                      <p className="text-grey capitalize">City Mpg</p>
                      <span className="text-black-100 font-semibold">15</span>
                    </div>
                    <div className="modal-content__item">
                      <p className="text-grey capitalize">City Mpg</p>
                      <span className="text-black-100 font-semibold">15</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
