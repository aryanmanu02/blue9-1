import React from "react";
import Header from "../common/Header";
import ServiceCard from "../cards/ServiceCard";

function ServiceSection() {
  const serviceData = [
    {
      id: 0,
      iconUrl: "/images/activity_icon.png",
      title: "Website Development ",
      description:
        " Web development fuses creativity with technology, building visually appealing, functional websites. It creates user-friendly interfaces, turning ideas into digital realities, ensuring businesses thrive in an ever-evolving online landscape",
    },
    {
      id: 1,
      iconUrl: "/images/video_icon.png",
      title: "App Development ",
      description:
        "App development blends creativity with technology to create user-friendly, innovative mobile experiences. It involves designing and coding apps that solve problems, engage users, and enhance daily life, driving success in the digital era.",
    },
    {
      id: 2,
      iconUrl: "/images/chart_icon.png",
      title: "Digital Marketing",
      description:
        "Digital marketing combines creativity with data-driven strategies to reach and engage target audiences online. It’s about crafting compelling content, leveraging social media, SEO, and analytics to drive brand growth and customer engagement in the digital age..",
    },
  ];
  return (
    <section>
      <Header title="service" subtitle="Our Vison & Our Goal" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[3.56rem] justify-around mt-8 md:mt-[6.75rem]">
        {serviceData.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            iconUrl={service.iconUrl}
          />
        ))}
      </div>
    </section>
    
  );
}

export default ServiceSection;
