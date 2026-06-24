import { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import services from "../data/servicesData";

import SearchBar from "../components/Services/SearchBar";
import CategoryFilter from "../components/Services/CategoryFilter";
import ServiceCard from "../components/Services/ServiceCard";

import "../components/Services/ServicesPage.css";

function Services() {

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const filteredServices = services.filter(
    (service) =>
      (selectedCategory === "All" ||
        service.category === selectedCategory) &&
      service.title
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <section className="services-page">

        <h1>Explore Services</h1>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={
            setSelectedCategory
          }
        />

        <div className="services-grid">

          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Services;