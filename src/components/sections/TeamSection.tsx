import React from "react";
import Header from "../common/Header";
import TeamCard from "../cards/TeamCard";

function TeamSection() {
  const teamData = [
    {
      id: 0,
      imageUrl: "/images/Arya.jpg",
      name: "Arya Patil",
      profession: "Website developer",
    },
    {
      id: 1,
      imageUrl: "/images/Shlok.jpg",
      name: "Shlok Pedenekar",
      profession: "UI Designer",
    },
    {
      id: 2,
      imageUrl: "/images/Aryan.jpg",
      name: "Aryan Nimkar",
      profession: "Web Designer",
    },
    {
      id: 3,
      imageUrl: "/images/Kartik.jpg",
      name: "Kartik Mehta",
      profession: "Client Manager",
    },
    // Add more items if needed
  ];

  return (
    <section className="mt-[9rem]">
      <Header title="our team" subtitle="Meet The Team" />
      <div className="overflow-x-auto mt-8 md:mt-[3.31rem]">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {teamData.map((team) => (
            <div
              key={team.id}
              className="flex-shrink-0"
            >
              <TeamCard
                imageUrl={team.imageUrl}
                name={team.name}
                profession={team.profession}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
