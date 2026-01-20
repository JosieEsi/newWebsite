import React, { useState } from "react";
import { motion } from "framer-motion";
import { ethical, tony, akosua, eleanor } from "../assets/images";
import { arrow, line, line2, paper } from "../assets/icons";
import Button from "../components/Button";
import { FaUser, FaDownload, FaChevronDown, FaChevronUp } from "react-icons/fa";

const EthicalReviewCommittee = () => {
  const [expandedBio, setExpandedBio] = useState(null);

  const committeeMembers = [
    {
      name: "TONY DOGBE",
      role: "CHAIRPERSON",
      image: tony,
      bio: "Tony Dogbe has completed over 70 consultancy assignments, alongside full-time executive/managing director roles in a CSO and in a development consultancy firm over the past 21 years. He is an experienced process and participatory oriented social/community development worker, trainer, researcher, manager, consultant and workshop facilitator/moderator who has worked with government, non-government and private sector institutions in various areas of human development endeavour."
    },
    {
      name: "PROFESSOR AKOSUA ADOMAKO AMPOFO",
      role: "MEMBER",
      image: akosua,
      bio: "Akosua Adomako Ampofo is a Professor of African and Gender Studies at the Institute of African Studies, University of Ghana (UG). As an activist-scholar, her work addresses African Knowledge systems; Higher education; Identity Politics; Gender relations; and Popular Culture. Adomako Ampofo is a founding member of the African Studies Association of Africa and its immediate past president; Editor-in-Chief, Contemporary Journal of African Studies; Co-Editor, Critical Investigations into Humanitarianism in Africa blog, as well as African Studies Review. She is a fellow of the Ghana Academy of Arts and Sciences. Her work has been variously recognized including being a 3-time Fulbright scholar among many other awards."
    },
    {
      name: "DR. ELEANOR HILL",
      role: "MEMBER",
      image: eleanor,
      bio: "Dr. Eleanor Hill has worked in International Public Health for 30 years, with a strong focus on participatory, solution-focused approaches. She has maintained an interest is the ethical dimensions of this work throughout her career and in her own research activities."
    },
    {
      name: "CELIA MARSHALL",
      role: "MEMBER",
      image: null,
      bio: "Celia Marshall has led and been part of a variety of research initiatives in Ghana over the last 25 years, mostly involving qualitative methods and focused on hearing from the most marginalised voices. She has led many studies with teams of up to 40 researchers and guided their related design, analysis, and dissemination processes, all with an eye on ethical considerations. National studies she has been part of have included those for the Government of Ghana in partnership with UNICEF, DFID, and the World Bank, and with a thematic focus on poverty, wellbeing, social and child protection, education, health, and transport."
    },
    {
      name: "DR. LIZ ANDERSON",
      role: "MEMBER",
      image: null,
      bio: "Liz Anderson has worked in the UK Higher Education sector for over 20 years and been involved in teaching and research in the fields of health/social care with a community focus and clinical education linked to service improvement. She brings a dual perspective to ethical research governance, having both prepared and reviewed numerous applications for ethics committees. Liz played a pivotal role in the development of the University of Bristol's BSc in Global Health, curating diverse international viewpoints to shape a programme rooted in global collaboration and cultural awareness. Her current work with the PDA Ethical Review Committee continues this global commitment, using her expertise to support researchers in Ghana."
    },
    {
      name: "DR. DAVID KORBOE",
      role: "MEMBER",
      image: null,
      bio: "David Korboe is a social development researcher and M&E consultant and has worked in Ghana, India, Mozambique, Sierra Leone, South Africa, and the United Kingdom. He is an advocate of ethical practice in all spheres of life and is passionate about participatory processes and collective impact."
    },
    {
      name: "CHALS WONTEWE",
      role: "MEMBER",
      image: null,
      bio: "Chals Wontewe is a teacher, civil servant and international development practitioner with many years of field experience with a number of International NGOs including CUSO of Canada, VSO, CRS, ActionAid, Oxfam (both GB and OI) and IBIS in Ghana, Nigeria, Sierra Leone, Liberia, Senegal, and the DRC, serving senior positions. Over the past 5 years, he has been into full-time M&E consultancy and has been involved in projects with Oxfam, DFID, Ghana Trade and Livelihoods Coalition, among others. Chals' work and research interest cut across agriculture, health, and poverty."
    },
    {
      name: "LUCY OFORI-DAVIS",
      role: "SECRETARY",
      image: null,
      bio: "Lucy Ofori-Davis is a researcher, monitoring and evaluation practitioner with over 5 years' experience in social research, impact assessment, evaluations, and project management. She is currently a MEL Specialist with the Research, Evaluation, and Learning (REL) Unit in PDA, with a strong understanding of ethical dimensions in the research industry. Lucy's work in PDA cuts across multiple sectors including agriculture, education, health and financial inclusion. Lucy serves as the Secretary to the ERC, where she coordinates committee operations, including liaising between prospective applicants/researchers (including PDA) and the Committee."
    }
  ];

  return (
    <section
      id="ethical-review-committee"
      className="max-container max-w-full w-full min-h-screen bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Hero Section */}
      <motion.div
        className="relative w-full mt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img src={ethical} alt="Ethical Review Committee" className="w-full h-[400px] md:h-[500px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <motion.h1
          className="font-poppins font-bold text-4xl md:text-6xl text-white text-center absolute bottom-10 left-0 right-0 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Ethical Review Committee
        </motion.h1>
      </motion.div>

      {/* Committee Members */}
      <motion.div
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {committeeMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-l-4 border-orange"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="p-6">
                <div className="flex flex-col items-center mb-4">
                  <motion.div
                    className="relative mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {member.image ? (
                      <>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-32 w-32 rounded-full object-cover border-4 border-orange shadow-lg"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-orange rounded-full p-2">
                          <FaUser className="text-white text-sm" />
                        </div>
                      </>
                    ) : (
                      <div className="h-32 w-32 rounded-full bg-gradient-to-br from-orange/20 to-red/20 flex items-center justify-center border-4 border-orange shadow-lg">
                        <span className="text-orange text-4xl font-bold">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </motion.div>
                  <h1 className="font-poppins text-lg font-bold text-center mb-2">
                    {member.name}
                  </h1>
                  <div className="w-12 h-0.5 bg-orange mb-2"></div>
                  <h2 className="font-poppins text-sm font-semibold text-orange mb-4">
                    {member.role}
                  </h2>
                </div>
                
                {expandedBio === index ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    <button
                      onClick={() => setExpandedBio(null)}
                      className="flex items-center gap-2 text-orange font-semibold text-sm hover:text-red transition-colors"
                    >
                      <span>Read less</span>
                      <FaChevronUp />
                    </button>
                  </motion.div>
                ) : (
                  <button
                    onClick={() => setExpandedBio(index)}
                    className="flex items-center gap-2 text-orange font-semibold text-sm hover:text-red transition-colors w-full justify-center"
                  >
                    <span>Read more</span>
                    <FaChevronDown />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Overview and Documents Section */}
      <motion.div
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <motion.h1
              className="font-poppins font-bold text-3xl md:text-4xl mb-6 text-gray-800"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Overview of the ERC
            </motion.h1>
            <motion.div
              className="space-y-6 text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="font-poppins text-base">
                Ethical and robust research underscores Participatory Development
                Associates' (PDA's) vision of: "A world where states, communities
                and organisations provide an enabling environment in which all
                people, regardless of sex, race, ethnicity, creed, age or
                disability, can realise their full potential and contribute their
                best to the common good". It is for this reason that the Ethical
                Review Committee (ERC) was set up in January 2017 to help ensure
                that research is carried out to the highest ethical standards. The
                ERC has been formed to review research proposals in PDA and the
                general research community. It advises on the research process to
                ensure that both researchers and participants are adequately
                protected. The ERC is also interested in ensuring that researchers
                put adequate measures in place to minimise biases that could arise
                from both researchers' and participants' prejudices in the research
                process. The ERC has a multidisciplinary membership of eminent
                scholars and practitioners in their fields of specialisation.
              </p>

              <p className="font-poppins text-base font-semibold text-gray-800 pt-4">
                Ethical review is aligned with our organisation's Values in the
                following ways:
              </p>

              <div className="space-y-4 pt-4">
                {[
                  {
                    title: "Empowerment",
                    text: "we believe that research should be an enlightening process for all involved, not simply an extractive exercise undertaken for the benefit of others. Paying attention to how a research process empowers and/or disempowers the people involved is of great importance to its development outcomes. In particular, PDA believes that the dignity, rights, safety and well-being of both participants and researchers is important in any research process that PDA undertakes."
                  },
                  {
                    title: "Inclusiveness",
                    text: "we believe everyone has an active role to play in realising social change and so it is important that any piece of research has carefully considered which voices are listened to, and why."
                  },
                  {
                    title: "Innovation and creativity",
                    text: "thoughtful review processes can help any group of people to think more carefully, creatively and deeply."
                  },
                  {
                    title: "Quality",
                    text: "review can help us, and others, to maintain and improve our research standards. In doing this we can also affect ethical standards in Ghana more widely."
                  },
                  {
                    title: "Efficiency",
                    text: "review can identify ways in which all can make judicious use of resources, including natural resources and time."
                  },
                  {
                    title: "Effectiveness and Impact",
                    text: "a well-honed research process is more likely to leave a lasting effect."
                  },
                  {
                    title: "Transparency and accountability",
                    text: "ethical review helps to make research processes more accountable, to ourselves as researchers, to participants in the research, as well as to those who commission it. PDA is also committed to being a learning organisation. We believe that ethical review processes should provide a framework for those involved to learn together."
                  }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-5 border-l-4 border-orange shadow-sm hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <h3 className="font-poppins font-bold text-lg text-orange mb-2">
                      {value.title}:
                    </h3>
                    <p className="font-poppins text-base text-gray-700">
                      {value.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Documents Sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-poppins font-bold text-xl mb-6 text-gray-800">
              Resources & Downloads
            </h3>
            <div className="space-y-4">
              {[
                "Preliminary Screening Tool",
                "ERC Guidelines for Applicants",
                "ERC Application Form"
              ].map((doc, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-orange/10 rounded-lg p-3">
                      <FaDownload className="text-orange text-xl" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-poppins text-sm font-semibold text-gray-800">
                        {doc}
                      </p>
                    </div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button label="Download" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default EthicalReviewCommittee;
