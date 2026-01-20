import React from "react";
import { allstaff } from "../assets/images";
import Partners from "../sections/Partners";
import Slider from "react-slick";
import {
  FaHandshake,
  FaTree,
  FaChartBar,
  FaUsers,
  FaBullhorn,
  FaMoneyBillWave,
} from "react-icons/fa";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaCommentDots,
  FaPhoneAlt,
} from "react-icons/fa";

const newsData = [
  {
    category: "Investments",
    title: "Businesses that are doing good",
    description: "Aperiam sint autem quae ut ipsa repudiandae.",
    image: "your-image-url-1.jpg",
    color: "bg-orange",
  },
  {
    category: "News",
    title: "How to make your business more sustainable",
    description:
      "Dolorem pariatur reiciendis. Mollitia necessitatibus ut sequi et maiores.",
    image: "your-image-url-2.jpg",
    color: "bg-red",
  },
  {
    category: "Investments",
    title: "Socially responsible businesses to support",
    description:
      "Voluptatem voluptatem voluptate qui assumenda in incidunt repudiandae.",
    image: "your-image-url-3.jpg",
    color: "bg-orange",
  },
  {
    category: "Business",
    title: "Business news for students",
    description: "Provident praesentium et nemo dolorem vel totam.",
    image: "your-image-url-4.jpg",
    color: "bg-red",
  },
  {
    category: "Stock Market",
    title: "How to get ahead in business",
    description: "Dignissimos officiis ut est quo et cumque dolores.",
    image: "your-image-url-5.jpg",
    color: "bg-orange",
  },
  {
    category: "Startups",
    title: "Startups to watch out for in 2022",
    description: "Inventore ut. Corporis a harum et aut deleniti assumenda.",
    image: "your-image-url-6.jpg",
    color: "bg-red",
  },
];

const services = [
  {
    icon: <FaHandshake className="text-orange text-4xl mx-auto" />,
    title: "PDA Support Services",
    description:
      "The PDA Support Services handles a host of business support services for PDA as well as for individuals, small commercial or home-based businesses, and large enterprises.",
  },
  {
    icon: <FaTree className="text-orange text-4xl mx-auto" />,
    title: "PDA Agri-Industry and Social Enterprise",
    description:
      "PASE is a social enterprise platform to provide agricultural services to rural communities, especially women and young people.",
  },
  {
    icon: <FaChartBar className="text-orange text-4xl mx-auto" />,
    title: "PDA Research Evaluation and Learning",
    description:
      "The REL Unit is a knowledge production hub in PDA and plays a critical role in knowledge development and capacity building.",
  },
  {
    icon: <FaUsers className="text-orange text-4xl mx-auto" />,
    title: "PDA Africa",
    description:
      "The PDA Africa handles the design, implementation, and management of community-led projects and programs both within PDA and on behalf of partners.",
  },
  {
    icon: <FaBullhorn className="text-orange text-4xl mx-auto" />,
    title: "PDA Communications and Advocacy",
    description:
      "The Advocacy and Communication Unit (ACU) handles PDA's social development initiatives, advocacy projects and also liases with other units within the organization.",
  },
  {
    icon: <FaMoneyBillWave className="text-orange text-4xl mx-auto" />,
    title: "PDA Finance and Administration",
    description:
      "The Finance and Admin Unit at PDA provides logistical and financial support to ensure the effective and efficient delivery.",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const ProjectCard = ({ title, description, location, officers, text }) => (
  <div className="flip-card">
    <div className="flip-card-inner">
      {/* Front of the card */}
      <div className="flip-card-front border rounded-lg p-6 shadow-md bg-white font-poppins">
        <h3 className="text-2xl font-bold mb-2 text-orange">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <p className="mt-4 text-gray-500">Location: {location}</p>
        <p className="text-gray-500">Field Officers: {officers}</p>
      </div>

      {/* Back of the card */}
      <div className="flip-card-back border rounded-lg p-6 shadow-md bg-white font-poppins">
        {/* <h3 className="text-2xl font-bold mb-2">{title}</h3> */}
        <p className="text-gray-600 text-[12px]">{text}</p>
      </div>
    </div>
  </div>
);

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section
        className="relative w-full h-screen flex items-end justify-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${allstaff})` }}
      >
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative text-center px-6 pb-8 z-10">
          <h1 className="text-4xl md:text-6xl font-bold">
            Empowering Communities Across Sub-Saharan Africa
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Championing sustainable development through research, advocacy, and
            community engagement.
          </p>
          {/* <button className="mt-6 bg-orange px-6 py-3 text-white font-semibold rounded-lg hover:bg-red">
            Discover Our Impact
          </button> */}
        </div>
      </section>
      {/* About Us */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800">About PDA</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Participatory Development Associates (PDA) is a social development,
          project management, and advisory organization based in Ghana, working
          across Sub-Saharan Africa.
        </p>
      </section>
      {/* Services */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Our Services
        </h2>
        {/* <div className="mt-8 max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Research & Evaluation",
            "Policy Advocacy",
            "Local Economic Development",
            "Education & Agribusiness",
            "Child Labor Remediation",
            "Financial Inclusion",
            "Gender & Development",
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg text-center"
            >
              <h3 className="text-xl font-semibold text-gray-700">{service}</h3>
            </div>
          ))}
        </div> */}
        <div className="mx-auto  ">
          <Slider {...settings}>
            {services.map((service, index) => (
              <div key={index} className="px-4">
                <div className="bg-white text-center p-6 rounded-lg shadow-md border border-gray-200">
                  {service.icon}
                  <h3 className="text-xl font-semibold mt-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                  <button className="mt-4 bg-orange text-white px-4 py-2 rounded-md hover:bg-orange">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/* Key Projects */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800">Key Projects</h2>
        {/* <div className="mt-8 max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Cocoa Communities Library Project",
            "Nyonkopa Child Labor Remediation Project",
            "Young Female Businesses for Growth",
          ].map((project, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 shadow-lg rounded-lg text-center"
            >
              <h3 className="text-xl font-semibold text-gray-700">{project}</h3>
              <p className="mt-2 text-gray-600">
                Learn more about our efforts in {project}.
              </p>
            </div>
          ))}
        </div> */}
        <div className="max-w-5xl max-md:max-w-3xl mx-auto text-center">
          <div className="vslacard grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 md:gap-16 max-sm:px-20 md:px-14">
            <ProjectCard
              title="Nestle Income Accelerator Programme [Cote D’Ivoire]"
              description="Improving the livelihoods of cocoa-farming families through VSLA groups and Gender Action Learning Systems (GALS) training."
              location="Cote D’Ivoire"
              officers="7"
              text="The REL Unit is a knowledge production hub in PDA and plays a critical role in knowledge development and capacity building by conducting policy-influencing."
            />
            <ProjectCard
              title="Nestle Income Accelerator Programme [Ghana]"
              description="Income diversification and restructuring of VSLA groups for cocoa-farming communities."
              location="Ghana"
              officers="7"
              text="In Ghana, the programme still has the overall goal of improving the livelihoods of cocoa-farming families, while advancing regenerative agriculture practices. Specifically, however, there are four pillars (the promotion of school enrolment; pruning; agroforestry; and income diversification). PDA is engaged for the pillar of income diversification, through the formation of VSLA groups for selected program beneficiaries and the restructuring of existing VSLA groups which have IAP beneficiaries.
                Currently, project communities have been sensitized, and field officers have begun engaging interested project beneficiaries for the formation and restructuring of VSLA groups."
            />
            <ProjectCard
              title="SUCDEN VSLA Programme"
              description="Addressing cocoa sector challenges, improving women's earning capacity, and promoting financial literacy in Ghana."
              location="Western North Region, Ghana"
              officers="2"
              text="The Women’s Empowerment, Access to Finance and Income Generation in Ghana project is aimed at addressing the primary challenges facing the cocoa sector in Ghana including low income, low productivity, lack of access to financial services and low financial literacy — which are all some of the root causes of child labour. The project is being implemented in Akontombra, Fosukrom and Adabokrom cocoa districts in the Western North region of Ghana in partnership with Sucden and Kuapa Kokoo Farmers’ Union (KKFU). 9 VSLA groups have been formed under the project, meeting weekly to save, grant loans, and conduct Gender Action Learning Systems (GALS) training for their members."
            />
            <ProjectCard
              title="Enroute Project [Cote D’Ivoire]"
              description="Testing interventions for supporting farmers' living income and implementing VSLA-CHILD and Empowering Better Decisions (EBD) trainings."
              location="Cote D’Ivoire"
              officers="2"
              text="The Enroute Project seeks to identify the most cost-effective ways to support farmers to earn a living income. The project is testing three interventions:Cash transfer only, Cash transfer and services, Only services. Under these three interventions, PDA is working with selected household members from the cash transfer only group, to train them on a series of sessions dubbed Empowering Better Decisions. PDA is also implementing the VSLA-CHILD methodology for the remaining two groups of intervention areas. 25 VSLA-CHILD groups and 14 Empowering Better Decisions (EBD) groups have been formed under the project."
            />
            <ProjectCard
              title="ECOM/NCP VSLA-GALS Programme"
              description="Building economic and social capacities of cocoa farmers in Ghana, focusing on financial inclusion and gender empowerment."
              location="Eastern & Central Regions, Ghana"
              officers="4"
              text="The ECOM/NCP VSLA-GALS project is a financial inclusion and gender empowerment project which is aimed at building the economic and social capacities of cocoa farmers in selected communities in the Eastern and Central Region of Ghana through Village Savings and Loans Association (VSLA) groups. The project is being implemented by Participatory Development Associates (PDA) in partnership with Nestle Cocoa Plan (NCP) and ECOM. 40 VSLAs are being run under this project"
            />
            <ProjectCard
              title="New ECOM VSLA GALS Project"
              description="Economic and social empowerment through VSLA and GALS training for cocoa farmers across multiple regions in Ghana."
              location="Eastern, Central, Ashanti, Western North, Oti Regions, Ghana"
              officers="4"
              text="The VSLA-GALS project is a financial inclusion and gender empowerment project which is aimed at building the economic and social capacities of cocoa farmers in selected communities, Ofoase and Abenase in the Eastern Region, Dunkwa in the Central Region, Asankaragua in the Western North Region, Offinso in the Ashanti Region and Papase in Oti Region through Village Savings and Loans Association (VSLA) groups. The project is being implemented by Participatory Development Associates (PDA) in partnership with Lindt & Sprüngli Farming Program and ECOM. 49 VSLA groups have been formed under the project."
            />
            {/* Add more ProjectCards as needed */}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Testimonials</h2>
        <p className="mt-4 text-lg text-gray-600">
          Hear from those who have benefited from our initiatives.
        </p>
        <div className="mt-8 max-w-4xl mx-auto">
          <blockquote className="text-xl italic text-gray-700">
            “PDA’s support has transformed our community by providing essential
            training and resources.”
          </blockquote>
          <p className="mt-2 font-bold text-gray-800">- Community Leader</p>
        </div>
      </section>
      {/*Partner */}
      <section className="py-20 px-6 bg-white text-center">
        <Partners />
      </section>
      {/* Latest News */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Latest News</h2>
        <div className="mt-8 max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {newsData.map((news, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <span
                  className={`text-white text-xs px-3 py-1 rounded-full ${news.color}`}
                >
                  {news.category}
                </span>
                <h3 className="text-lg font-bold mt-3">{news.title}</h3>
                <p className="text-gray-600 mt-2">{news.description}</p>
                <a
                  href="/#updates"
                  className="text-blue-500 font-semibold mt-3 inline-block hover:text-orange transition-colors duration-300"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Get Involved */}
      {/* <section className="py-20 px-6 bg-gray-100  text-center">
        <h2 className="text-3xl font-bold text-gray-800">Get Involved</h2>
        <p className="mt-4 text-lg text-gray-600">
          Join us in making a difference. Explore partnership opportunities,
          volunteer, or donate to support our initiatives.
        </p>
        <button className="mt-6 bg-green-600 px-6 py-3 text-white font-semibold rounded-lg hover:bg-green-700">
          Become a Volunteer
        </button>
      </section> */}
      {/* Contact */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Questions or Comments?
        </h2>
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden">
          {/* Left Side - Contact Info */}
          <div className="bg-orange text-white p-8 md:w-1/3 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <FaCommentDots className="text-2xl" /> Let's talk
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-2xl" />
              <div>
                <p className="text-sm">Our Location</p>
                <p className="font-semibold">710 N6, Kumasi, Ghana</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-2xl" />
              <div>
                <p className="text-sm">Email Address</p>
                <p className="font-semibold">info@pdaghana.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-2xl" />
              <div>
                <p className="text-sm">Phone</p>
                <p className="font-semibold">+233 (0)302 252998 / 2970177</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="p-8 md:w-2/3">
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border-b border-gray-300 w-full py-2 focus:outline-none focus:border-orange"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border-b border-gray-300 w-full py-2 focus:outline-none focus:border-orange"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="border-b border-gray-300 w-full py-2 focus:outline-none focus:border-orange"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="border-b border-gray-300 w-full py-2 focus:outline-none focus:border-orange"
              ></textarea>
              <button className="bg-orange text-white px-6 py-2 font-semibold rounded hover:bg-red">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
