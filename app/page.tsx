import CarCard from "@/components/CarCard";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import ShowMore from "@/components/ShowMore";
import { CarCardProps, HomeProps } from "@/types";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home({ searchParams }: CarCardProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <>
      <NavBar />
      <Hero />
      {!isDataEmpty ? (
        <>
          <div className="max-w-[1440px] mx-auto mb-5">
            <div className="home__cars-wrapper">
              {allCars.map((car, index) => (
                <CarCard car={car} />
              ))}
            </div>
          </div>
          <ShowMore
            pageNumber={(searchParams.limit || 10) / 10}
            isNext={(searchParams.limit || 10) > allCars.length}
          />
        </>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          <p>{allCars?.message}</p>
        </div>
      )}
    </>
  );
}
