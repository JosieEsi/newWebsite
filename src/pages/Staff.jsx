import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  annabelle,
  alex,
  ampah,
  edem,
  kamil,
  raymond,
  asuanew,
  asuaold,
  allstaff,
} from "../assets/images";
import { FaUser, FaChevronDown, FaChevronUp, FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Staff = () => {
  const [expandedStaff, setExpandedStaff] = useState(null);

  const toggleExpand = (index) => {
    setExpandedStaff(expandedStaff === index ? null : index);
  };

  // Staff organized by department
  const staffByDepartment = {
    leadership: [
      {
        name: "EDEM AGBE",
        position: "Managing Director",
        image: edem,
        bio: "Edem Agbe is the Managing Director of PDA. With almost 2 decades in the development sector, Edem leverages a wealth of experience and in-depth knowledge of research, evaluation, project management, organizational development, and training to lead and engage a wide range of global development issues. He has led the ideation of several novel development-focused initiatives in areas such as rural financial inclusion, community-driven development, youth development, tech and digitization in development, entrepreneurship, women economic empowerment, among others. He is an ardent advocate for the use of indigenous knowledge for development. Edem has an MA in Development Studies from the University of Ghana, and a BA in Economics from the Kwame Nkrumah University of Science and Technology.",
        profileLink: "#",
      },
      {
        name: "ANNABELLE YEBOAH OSEI",
        position: "Director of Operations",
        image: annabelle,
        bio: "Annabelle is the Director of Operations for PDA. She brings on board her strong knowledge of operations and organizational management, project management, conflict management, and policy formulation and execution – all these developed in her 13 years of career experience. Annabelle is also adept at developing innovative solutions within organizational settings. She is a graduate of the Australian Institute of Business (MBA), the University of Ghana (BSc Agriculture Economics), and the Project Management Institute (Project Management Professional). She combines her many years of working experience and strong academic foundation to drive higher organizational performance.",
        profileLink: "#",
      },
    ],
    rel: [
      {
        name: "CLEMENT SEFA-NYARKO",
        position: "Principal Consultant and Technical Advisor",
        image: null,
        bio: "Before joining the PDA team as Research Manager in August 2015, Clement has been involved in a number of security-related research activities. As consultant for the African Leadership Centre he provided research and advisory services in an IDRC-funded assessment of Kenya's post-election violence and potential prospects for sustainable peace. He presented papers in a number of international conferences, the latest of which was the European Conference for African Studies (ECAS), in Paris in July 2015.",
        profileLink: "#",
      },
      {
        name: "ALEXANDER AFRAM",
        position: "Research, Evaluation & Learning Manager",
        image: alex,
        bio: "Alexander Afram leads PDA Research Evaluation and Learning as the Manager. With an excellent academic foundation and over a decade working in development settings, Alex is highly skilled in policy analysis and providing technical support for program design and implementation. Alex is also experienced in training and capacity building, and design and implementation of quantitative and qualitative research. He has pioneered several research and evaluation projects and led the development of both quantitative and qualitative methodologies. Alex holds an MSc in Development Management, and a BA in Geography and Rural Development from London School of Economics and Political Science – UK, and Kwame Nkrumah University of Science and Technology – Ghana.",
        profileLink: "#",
      },
      {
        name: "CHINEBOABA ARABA AFFUL",
        position: "Senior Research Officer, REL",
        image: null,
        bio: "Araba serves a senior research officer with the PDA Research Evaluation and Learning department. Drawing on her background in Economics, Araba has engaged in collaborative research and has taken on both leadership and co-leadership roles in research projects. Over the years, she has developed expertise in survey planning and management, proposal writing, methodology development, data analysis, communicating findings, and monitoring and evaluating project indicators. She holds a Ph.D. in Economics and Climate Change from the Université Cheikh Anta Diop de Dakar, an M.Phil. in Economics, and a B.A. in Economics from the Kwame Nkrumah University of Science and Technology.",
        profileLink: "#",
      },
      {
        name: "PRINCE AMOAKO",
        position: "Research and Data Analyst",
        image: null,
        bio: "Prince Amoako is an eminent economist with many years of professional and practical experience in research and data analysis.",
        profileLink: "#",
      },
      {
        name: "ARNOLD KWESI BEDIAKO",
        position: "Assistant Programmes Coordinator, REL",
        image: null,
        bio: "Arnold is an Assistant Coordinator with the PDA Research Evaluation and Learning department. He is an experienced researcher with strong expertise in organization development, monitoring and evaluation, WASH program design and implementation, program design and implementation, and training and facilitation. He has over 8 years of working experience. Arnold graduated from the University of Cape Coast with a BSc in Psychology, and an MPhil in Development Studies.",
        profileLink: "#",
      },
      {
        name: "IGNATIUS BOADI",
        position: "Senior Project Officer, REL",
        image: null,
        bio: "Ignatius is a Senior Project Officer with the PDA Research Evaluation and Learning department. Throughout his 5 years of experience, Ignatius uses his programming skills to develop innovative solutions for development management. With his postgraduate degree in Mathematical Sciences from the African Institute for Mathematical Sciences and the University of Cape Coast, Ignatius is particularly skilled in machine learning, data analysis, database management, GUI development, and Python programming.",
        profileLink: "#",
      },
      {
        name: "CHARLES SELORM DEKU",
        position: "Project Officer, REL",
        image: null,
        bio: "Charles is a Project Officer with PDA Research Evaluation and Learning department. He holds a BA in Sociology and Social Work and an MPhil in Sociology from the Kwame Nkrumah University of Science and Technology. Over his 8 years of combined working experience, Charles has become adept at quantitative and qualitative analysis, proposal development, project planning and management, training and facilitation, and report writing.",
        profileLink: "#",
      },
      {
        name: "GABRIEL OPOKU-ANTWI",
        position: "Project Officer, REL",
        image: null,
        bio: "Gabriel Opoku-Antwi is a Project Officer and a member of the Research, Evaluation, and Learning (REL) Unit at Participatory Development Associates (PDA) Ghana. He is a young and self-motivated researcher and development planner who aims to assist any organization to achieve its targeted goals in the capacity he finds himself in. Gabriel holds an MSc in Development Planning and Management and a BA in Geography and Rural Development both from the Kwame Nkrumah University of Science and Technology.",
        profileLink: "#",
      },
    ],
    finance: [
      {
        name: "OSEI YEBOAH ASUAMAH",
        position: "Finance Manager",
        image: asuanew || asuaold,
        bio: "Mr. Osei Yeboah Asuamah is a Chartered Accountant and a proud member of the Institute of Chartered Accountants Ghana (ICAG), with over 11 years of experience in finance and accounting. He holds an MSc in Accounting and Finance from KNUST, as well as a Bachelor of Technology in Accounting with Computing and a Higher National Diploma (HND) in Accounting both from Kumasi Technical University (KSTU). Professionally, he has served in key roles such as Director of Finance at Christian Service University, where his leadership drove transformative achievements.",
        profileLink: "#",
      },
      {
        name: "VICTORIA AMPAH",
        position: "Senior Finance Officer",
        image: ampah,
        bio: "Victoria is an HND holder (accounting option) from Cape Coast Polytechnic and is currently pursuing a degree programme in Commerce at the University of Cape Coast (UCC). She is presently the Senior Finance Officer at PDA, after having joined the organisation in August 2008 as National Service personnel. She is mainly responsible for maintaining accurate financial data and reporting on PDA and all project activities.",
        profileLink: "#",
      },
      {
        name: "GODSWAY DZATO",
        position: "Assistant Finance and Administrative Officer",
        image: null,
        bio: "Godsway serves as the Finance Officer for PDA Africa. Throughout his five years of experience in finance roles, he has developed rich expertise in financial reporting and analysis. Godsway holds a BSc Administration (Accounting) from the University of Ghana Business School.",
        profileLink: "#",
      },
    ],
    communications: [
      {
        name: "ASEDA MENSAH",
        position: "Programmes Coordinator, Advocacy and Communications",
        image: null,
        bio: "Aseda is the Coordinator for the PDA Communications and Advocacy Department. Aseda is an experienced communicator, digital media manager, editor, event moderator, and training facilitator. She has over 6 years of experience using various tools to design, implement and lead communication- and advocacy-centred initiatives to promote meaningful social change. Aseda is a graduate of the University of Ghana with an MPhil in Marketing and a BSc in E-Commerce and Customer Management.",
        profileLink: "#",
      },
    ],
    pdaAfrica: [
      {
        name: "KAMIL ABDUL SALAM",
        position: "Assistant Project Coordinator, PDA Africa",
        image: kamil,
        bio: "Kamil serves as an Assistant Project Coordinator for PDA Africa. Throughout his career, Kamil has developed expertise in training facilitation, field supervision, monitoring, and community mobilization.",
        profileLink: "#",
      },
      {
        name: "ANDREWS OWUSU",
        position: "Assistant Project Officer, PDA Africa",
        image: null,
        bio: "Andrews works with PDA Africa to economically empower women and young people. He is stationed with PDA Africa as an Assistant Project Officer. Throughout his career, Andrews has developed expertise in training facilitation, field supervision, monitoring, and community mobilization. He holds a BSc in Organizational Development from the College for Community and Organisational Development, Sunyani.",
        profileLink: "#",
      },
      {
        name: "PATRICK ASIHENE DWAMENA",
        position: "Senior Project Officer",
        image: null,
        bio: "Patrick is a Senior Project Officer with PDA Africa team and brings over 16 years of experience leading community-based development initiatives. He supervises projects in Ghana, Cameroon, and Côte d'Ivoire. He has played a key role in shaping PDA's financial inclusion initiatives at the community level. His professional strengths include training, facilitation, report writing, icebreaking, and data analysis. Patrick holds a Higher National Diploma (HND) in Journalism and Communication from the Institute of Business Management and Journalism, Kumasi.",
        profileLink: "#",
      },
      {
        name: "DAVID ESHUN",
        position: "Assistant Project Coordinator, PDA Africa",
        image: null,
        bio: "David serves as an Assistant Project Coordinator for PDA Africa. David has 14 years of experience leading the implementation of several community-level initiatives in Ghana and Cote d'Ivoire. He leverages his many years of experience and skills in project design and coordination, facilitation of gender action and learning systems training, data analysis, design of training manuals, and monitoring and evaluation to deliver excellent project implementation. David is an economist with an MSc in Economics and a BSc in Natural Resources Management from the Kwame Nkrumah University of Science and Technology.",
        profileLink: "#",
      },
    ],
    administration: [
      {
        name: "STELLA TAKYI",
        position: "Secretarial Support Personnel",
        image: null,
        bio: "Stella joined PDA in November 2000 as a part time worker. She holds an NVTI certificate in Secretarialship. Prior to joining PDA, She worked at Catholic Graduate for Action (CAGA) as professional secretarial personnel. She is currently works at PDA's Secretarial Support Unit as a full time secretarial support personnel and oversees the daily up keep of the PSS office in Kumasi, Tech- Junction.",
        profileLink: "#",
      },
      {
        name: "BREH JIMAH",
        position: "Assistant Administrative Officer",
        image: null,
        bio: "Jimah worked with PDA for about six years as a Logistics Assistant from June, 2007 to 2012 before taking a leave. He re-joined the team again on June 1st 2015. He currently provides logistical support for administrative and programmes staff. He also sees to the records of movement, maintenance and road-worthiness of the vehicles in the Kumasi office.",
        profileLink: "#",
      },
      {
        name: "CHARLES KWADWO ANOKYE",
        position: "Assistant Administrative Officer",
        image: null,
        bio: "Charles has over 2 decades of experience as a logistics person and a professional driver. Here at PDA, Charles plays key roles in the Finance and Administration department as a Logistics and Administration Officer. He is skilled in driving, performing inventory roles, administration, and community mobilisation.",
        profileLink: "#",
      },
      {
        name: "ZINGLE BELAUNE PATRICIA",
        position: "Assistant Administrative Officer",
        image: null,
        bio: "Patricia brings on board her 13 years of experience to lead PDA's administrative wing as the HR and Administrative Officer. She is an astute member of the Chartered Institute of Human Resources (CIHR), and also holds a bachelor's degree in Management Studies from the University of Cape Coast. Patricia is competent in facilitating training sessions, data collection, general administrative and logistics, and customer relation management.",
        profileLink: "#",
      },
      {
        name: "KENNEDY ANKOMAH BOADU",
        position: "Logistics Assistant",
        image: null,
        bio: "Ken joined PDA in 2018 as a logistics assistant. He manages program logistics and provides general administrative and programmatic support to PDA staff primarily in Accra. With several years of experience as a driver, he also assists in community entry during PDA field research and plays an important role in providing any necessary background support.",
        profileLink: "#",
      },
    ],
    fieldOfficers: [
      { name: "LOUIS AHOIN MENSAH", position: "Field Officer", image: null },
      { name: "ABDALLAH YAKUBU", position: "Field Officer", image: null },
      { name: "JOSHUA ARKOH", position: "Field Officer", image: null },
      { name: "GUIDE GADRI ELEFO", position: "Field Officer", image: null },
      { name: "BASHIRU SEIDU", position: "Field Officer", image: null },
      {
        name: "EUNICE WEBASWEA AVERITIGA",
        position: "Field Officer",
        image: null,
      },
    ],
  };

  const StaffCard = ({ staff, index, department }) => {
    const isExpanded = expandedStaff === `${department}-${index}`;
    const hasImage = staff.image !== null;

    return (
      <motion.div
        className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-l-4 border-orange group cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
      >
        <div className="p-6">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
            {hasImage ? (
              <motion.div
                className="relative flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-orange/30 shadow-lg group-hover:border-orange transition-colors duration-300">
                  <img
                    src={staff.image}
                    alt={staff.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-orange rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                  <FaUser className="text-white text-sm" />
                </div>
              </motion.div>
            ) : (
              <motion.div
                className="h-32 w-32 rounded-full bg-gradient-to-br from-orange/20 to-red/20 flex items-center justify-center flex-shrink-0 border-4 border-orange/30 group-hover:border-orange transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-orange text-5xl font-bold">
                  {staff.name.charAt(0)}
                </span>
              </motion.div>
            )}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="font-poppins font-bold text-xl md:text-2xl text-ash mb-2 group-hover:text-orange transition-colors duration-300">
                {staff.name}
              </h3>
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <FaBriefcase className="text-orange text-sm" />
                <p className="font-poppins text-base md:text-lg text-orange font-semibold">
                  {staff.position}
                </p>
              </div>
              {staff.bio && (
                <>
                  <motion.div
                    className="overflow-hidden"
                    initial={false}
                    animate={{
                      maxHeight: isExpanded ? "1000px" : "120px",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="font-poppins text-sm md:text-base text-gray-600 leading-relaxed">
                      {staff.bio}
                    </p>
                  </motion.div>
                  {staff.bio.length > 150 && (
                    <motion.button
                      onClick={() => toggleExpand(`${department}-${index}`)}
                      className="mt-4 flex items-center gap-2 text-orange font-semibold text-sm hover:underline transition-all duration-300"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isExpanded ? (
                        <>
                          <span>Read Less</span>
                          <FaChevronUp />
                        </>
                      ) : (
                        <>
                          <span>Read More</span>
                          <FaChevronDown />
                        </>
                      )}
                    </motion.button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const DepartmentSection = ({ title, staff, departmentKey, icon: Icon }) => (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-4 mb-8 pb-4 border-b-4 border-orange">
        {Icon && (
          <motion.div
            className="bg-orange rounded-full p-3"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Icon className="text-white text-2xl" />
          </motion.div>
        )}
        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-ash">
          {title}
        </h2>
        <span className="text-gray-400 text-lg">({staff.length})</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {staff.map((member, index) => (
          <StaffCard
            key={index}
            staff={member}
            index={index}
            department={departmentKey}
          />
        ))}
      </div>
    </motion.div>
  );

  return (
    <section
      id="staff"
      className="max-container max-w-full w-full min-h-screen font-poppins bg-gradient-to-b from-white to-gray-50"
    >
      {/* Hero Section */}
      <motion.div
        className="relative w-full mt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={allstaff}
          className="w-full h-[400px] md:h-[500px] object-cover"
          alt="PDA Staff"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <motion.h1
          className="font-poppins font-bold text-4xl md:text-6xl text-white text-center absolute bottom-10 left-0 right-0 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          PDA STAFF
        </motion.h1>
      </motion.div>

      {/* Introduction */}
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-poppins text-lg md:text-xl text-gray-600 leading-relaxed">
          Meet our dedicated team of professionals working across various
          departments to drive development and positive change in communities
          across Sub-Saharan Africa.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Leadership */}
        <DepartmentSection
          title="Leadership"
          staff={staffByDepartment.leadership}
          departmentKey="leadership"
          icon={FaUser}
        />

        {/* Research, Evaluation & Learning */}
        <DepartmentSection
          title="Research, Evaluation & Learning (REL)"
          staff={staffByDepartment.rel}
          departmentKey="rel"
          icon={FaGraduationCap}
        />

        {/* Finance & Administration */}
        <DepartmentSection
          title="Finance & Administration"
          staff={staffByDepartment.finance}
          departmentKey="finance"
          icon={FaBriefcase}
        />

        {/* Communications & Advocacy */}
        <DepartmentSection
          title="Communications & Advocacy"
          staff={staffByDepartment.communications}
          departmentKey="communications"
          icon={FaUser}
        />

        {/* PDA Africa */}
        <DepartmentSection
          title="PDA Africa"
          staff={staffByDepartment.pdaAfrica}
          departmentKey="pdaAfrica"
          icon={FaUser}
        />

        {/* Administration */}
        <DepartmentSection
          title="Administration"
          staff={staffByDepartment.administration}
          departmentKey="administration"
          icon={FaBriefcase}
        />

        {/* Field Officers */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8 pb-4 border-b-4 border-orange">
            <motion.div
              className="bg-orange rounded-full p-3"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <FaUser className="text-white text-2xl" />
            </motion.div>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-ash">
              Field Officers
            </h2>
            <span className="text-gray-400 text-lg">
              ({staffByDepartment.fieldOfficers.length})
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staffByDepartment.fieldOfficers.map((officer, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center border-l-4 border-orange group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="h-24 w-24 rounded-full bg-gradient-to-br from-orange/20 to-red/20 flex items-center justify-center mx-auto mb-4 border-4 border-orange/30 group-hover:border-orange transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="text-orange text-3xl font-bold">
                    {officer.name.charAt(0)}
                  </span>
                </motion.div>
                <h3 className="font-poppins font-bold text-lg text-ash mb-2 group-hover:text-orange transition-colors duration-300">
                  {officer.name}
                </h3>
                <p className="font-poppins text-sm md:text-base text-orange font-semibold">
                  {officer.position}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Staff;
