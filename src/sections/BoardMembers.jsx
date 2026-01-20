import React from "react";
import {
  edem,
  annabelle,
//   clement,
  alex,
//   osei,
} from "../assets/images";

const BoardMembers = () => {
  const members = [
    {
      name: "EDEM AGBE",
      role: "Managing Director",
      image: edem,
    },
    {
      name: "Annabelle Y. Osei",
      role: "Director of Operations",
      image: annabelle,
    },
    {
      name: "Clement Sefa Nyarko (PhD)",
      role: "Technical Consultant",
      image: alex,
    },
    {
      name: "Alexander Afram",
      role: "Research, Evaluation, and Learning Manager",
      image: alex,
    },
    {
      name: "Osei Y. Asumah",
      role: "Finance Manager",
      image: alex,
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-24">
      {/* Title */}
      <h2 className="text-center font-poppins font-bold text-4xl text-ash mb-16">
        BOARD MEMBERS
      </h2>

      {/* Members */}
      <div className="flex flex-wrap justify-center gap-12 px-6 lg:px-20">
        {members.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center max-w-[200px]"
          >
            <div className="w-40 h-40 rounded-full overflow-hidden mb-6 shadow-md">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="font-poppins font-semibold text-lg text-ash">
              {member.name}
            </h3>

            <p className="font-poppins text-sm text-gray-500 mt-1">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BoardMembers;
