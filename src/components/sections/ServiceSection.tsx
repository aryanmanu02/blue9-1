import React from "react";
import Header from "../common/Header";
import ServiceCard from "../cards/ServiceCard";

function ServiceSection() {
  const serviceData = [
    {
      id: 0,
      iconUrl: "https://cdn-icons-png.flaticon.com/128/7991/7991055.png",
      title: "Website Development",
      description:
         "Crafting responsive, user-friendly websites that elevate your brand. We deliver innovative web development solutions tailored to drive your business forward.",
    },
    {
      id: 1,
      iconUrl: "https://cdn-icons-png.flaticon.com/128/9662/9662287.png",
      title: "App Development",
      description:
      "Building intuitive, high-performance apps that engage users. We deliver custom app development solutions designed to grow your business and brand.",
    },
    {
      id: 2,
      iconUrl: "https://cdn-icons-png.flaticon.com/128/1968/1968666.png",
      title: "Digital Marketing",
      description:
      "Driving growth with targeted digital marketing strategies. We elevate your brand with tailored campaigns designed to engage and convert your audience.",
    },
  ];

  return (
    <div id="services">
      <span>
      {" "}
    </span>
    <section id="services">
      <Header title="service" subtitle="Our Vision & Our Goal" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3.56rem] justify-around mt-8 md:mt-[6.75rem]">
        {serviceData.map((service) => (
          <div
            key={service.id}
            className="animate-fadeInUp"
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              iconUrl={service.iconUrl}
            />
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}

export default ServiceSection;
