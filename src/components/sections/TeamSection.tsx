import React from "react";
import Header from "../common/Header";
import TeamCard from "../cards/TeamCard";




function TeamSection() {
  const teamData = [
    {
      id: 0,
      imageUrl: "/images/vanessa.jpg",
      name: "Arya Patil",
      profession: "Website developer",
    },
    {
      id: 1,
      imageUrl: "/images/mason.jpg",
      name: "Shlok Pedenekar",
      profession: "UI Designer",
    },
    {
      id: 2,
      imageUrl: "/images/irea.jpg",
      name: "Aryan Nimkar",
      profession: "Web Designer",
    },
    {
      id: 3,
      imageUrl: "/images/irea.jpg",
      name: "Kartik Mehta",
      profession: "Client Manager",
    },
    // Add more items if needed
  ];

  return (
    <section className="mt-[9rem]">
      <Header title="our team" subtitle="Meet The Team" />
      <div className="overflow-x-auto mt-8 md:mt-[3.31rem]">
        <div className="flex space-x-4">
          {teamData.map((team) => (
            <div
              key={team.id}
              className="flex-shrink-0 w-64"
              style={{ flex: '1 0 calc(25% - 1rem)' }} // Adjust to fit 4 cards
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
