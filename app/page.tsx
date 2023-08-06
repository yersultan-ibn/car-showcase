import { CardList } from "@/components";
import CarCard from "@/components/CarCard";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
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

  return (
    <>
      <NavBar />
      <Hero />
      {/* <CardList /> */}
      {allCars.map((car, index) => (
        <CarCard car={car} />
      ))}
    </>
  );
}
