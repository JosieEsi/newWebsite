import React from "react";
import { globe, research, signal, finance } from "../assets/icons";
import Button from "../components/Button";
import { relteam, acuteam, africateam1, finan, allstaff } from "../assets/images";
import { useNavigate } from "react-router-dom";

const Teams = () => {
  const navigate = useNavigate();

  const teams = [
    {
      id: "rel",
      name: "PDA RESEARCH EVALUATION & LEARNING",
      icon: research,
      image: relteam,
      description:
        "The REL Unit is a knowledge production hub in PDA and plays a critical role in knowledge development and capacity building. Our team conducts rigorous research, evaluations, and learning activities to inform development practice and policy.",
      keyAreas: [
        "Research and impact evaluation",
        "Policy analysis and advocacy",
        "Quantitative and qualitative research",
        "Data analysis and reporting",
        "Capacity building and training",
        "Methodology development",
      ],
      link: "#",
    },
    {
      id: "pda-africa",
      name: "PDA AFRICA",
      icon: globe,
      image: africateam1,
      description:
        "PDA Africa handles the design, implementation and management of community-led projects and programmes both within PDA and on behalf of partners. Our team works directly with communities across Sub-Saharan Africa to drive sustainable development initiatives.",
      keyAreas: [
        "Financial inclusion and VSLA programs",
        "Child Protection & Labor Remediation",
        "Education & Literacy Project Management",
        "Women's Economic Empowerment",
        "Climate-smart Agriculture",
        "Smallholder Farmer Capacity Building",
        "Community Mobilization & Sensitization",

 
      ],
      link: "/pdaafrica",
    },
    {
      id: "communications",
      name: "PDA COMMUNICATIONS & ADVOCACY",
      icon: signal,
      image: acuteam,
      description:
        "The Advocacy and Communications Unit (ACU) handles PDA's social development initiatives, advocacy projects, and also liaises with other units within the organization. We amplify voices and share knowledge to drive positive change.",
      keyAreas: [
        "Digital media management",
        "Event moderation and facilitation",
        "Content creation and editing",
        "Advocacy campaigns",
        "Stakeholder engagement",
      ],
      link: "#",
    },
    {
      id: "finance-admin",
      name: "PDA FINANCE & ADMINISTRATION",
      icon: finance,
      image: finan || allstaff,
      description:
        "The Finance and Admin Unit at PDA provides logistical and financial support to ensure the effective and efficient delivery of all programs and projects. Our team ensures organizational sustainability and operational excellence.",
      keyAreas: [
        "Financial management and reporting",
        "Budget planning and control",
        "Administrative support",
        "Logistics and procurement",
        "Human resources management",
        "Office administration",
      ],
      link: "#",
    },
  ];

  const TeamCard = ({ team }) => {
    return (
      <div className="h-full flex flex-col gap-6">
        <div className="flex justify-center sm:justify-start">
          <div className="bg-orange h-20 w-20 sm:h-24 sm:w-24 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-md">
            <img
              src={team.icon}
              alt={`${team.name} icon`}
              className="w-14 h-14 sm:w-16 sm:h-16"
            />
          </div>
        </div>

        <div className="flex-1 bg-white shadow-lg rounded-3xl overflow-hidden flex flex-col min-h-0">
          <div className="relative">
            <img
              src={team.image}
              alt={team.name}
              className="w-full h-52 sm:h-56 object-cover"
            />
          </div>

          <div className="p-6 sm:p-8 flex flex-col flex-1">
            <h3 className="text-orange font-bold text-xl sm:text-2xl lg:text-3xl mb-4 font-poppins leading-snug">
              {team.name}
            </h3>

            <p className="text-base sm:text-lg mb-6 font-poppins leading-7 text-gray-700 flex-1">
              {team.description}
            </p>

            <div className="mb-6">
              <h4 className="font-poppins font-semibold text-lg sm:text-xl text-ash mb-3">
                Key Areas of Focus:
              </h4>
              <ul className="list-disc list-inside space-y-2 font-poppins text-gray-700 text-sm sm:text-base">
                {team.keyAreas.map((area, index) => (
                  <li key={index}>
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-end mt-auto">
                <button
                  onClick={() => {
                    // Map team IDs to staff page department sections
                    const teamToDepartmentMap = {
                      "pda-africa": "pdaAfrica",
                      "rel": "rel",
                      "communications": "communications",
                      "finance-admin": "finance",
                    };
                    const department = teamToDepartmentMap[team.id] || null;
                    if (department) {
                      navigate(`/staff#${department}`);
                      // Scroll to section after navigation
                      setTimeout(() => {
                        const element = document.getElementById(department);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }, 100);
                    } else {
                      navigate("/staff");
                    }
                  }}
                  className="bg-orange text-white px-6 py-3 rounded-lg font-poppins font-semibold hover:bg-orange/90 transition-colors"
                >
                  View Team Members
                </button>
                {team.link !== "#" && (
                  <a href={team.link}>
                    <Button label="Learn More" />
                  </a>
                )}
              </div>
            </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="teams"
      className="max-container max-w-full w-full min-h-screen padding"
    >
      {/* Header Section */}
      <div className="mt-28 text-center mb-10">
        <h1 className="font-poppins font-bold text-5xl text-orange mb-4">
          OUR TEAMS
        </h1>
        <p className="font-poppins text-lg text-gray-600 max-w-3xl mx-auto">
          PDA is organized into specialized teams, each playing a crucial role in
          advancing our mission of empowering communities across Sub-Saharan
          Africa. Learn more about our departments and their areas of expertise.
        </p>
      </div>

      {/* Teams Display */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-10 lg:gap-y-14 items-stretch">
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>

      {/* Quick Links Section */}
      <div className="mt-20 flex flex-col sm:flex-row gap-6 justify-center items-center">
        <button
          onClick={() => navigate("/board")}
          className="bg-gray-200 hover:bg-gray-300 text-ash px-8 py-4 rounded-lg font-poppins font-semibold transition-colors"
        >
          Board of Directors
        </button>
        <button
          onClick={() => navigate("/staff")}
          className="bg-orange hover:bg-orange/90 text-white px-8 py-4 rounded-lg font-poppins font-semibold transition-colors"
        >
          View All Staff
        </button>
      </div>
    </section>
  );
};

export default Teams;
