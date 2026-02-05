import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { search } from "../assets/icons";
import { navLinks as baseNavLinks, navigation as baseNavigation, socialMedia } from "../constants";
import Button from "./Button";
import SearchModal from "./SearchModal";
import { useTranslation } from "../hooks/useTranslation";

const Menu = ({ onLinkClick }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Generate translated navigation
  const navLinks = useMemo(() => [
    { href: "/", label: t("nav.home") },
    { href: "/ethical-review-committee", label: t("nav.ethicalReviewCommittee") },
    { href: "/child-abuse-tracker", label: t("nav.childAbuseTracker") },
    { href: "/covid-19", label: t("nav.covid19") },
    { href: "/partners", label: t("nav.partners") },
    { href: "/#events", label: t("nav.events") },
    { href: "https://www.pdaafrica.org", label: "PDA Africa", external: true },
  ], [t]);

  const navigation = useMemo(() => [
    {
      title: t("nav.whoWeAre"),
      link: "/who-we-are",
      links: [
        { name: t("nav.vision"), link: "/who-we-are#vision" },
        { name: t("nav.mission"), link: "/who-we-are#mission" },
        { name: t("nav.teams"), link: "/teams" },
        { name: t("nav.board"), link: "/board" },
        { name: t("nav.staff"), link: "/staff" },
      ],
    },
    {
      title: t("nav.whatWeDo"),
      link: "/what-we-do",
      links: [
        { name: t("nav.strategicObjectives"), link: "/what-we-do#strategic-objectives" },
        { name: t("nav.ourProjects"), link: "/our-projects" },
        { name: t("nav.expertise"), link: "/what-we-do#expertise" },
      ],
    },
    {
      title: t("nav.resources"),
      link: "/publications",
      links: [
        { name: t("nav.publications"), link: "/publications" },
        { name: t("nav.podcast"), link: "/podcast" },
        { name: t("nav.vodcast"), link: "/vodcast" },
        { name: t("nav.videos"), link: "/videos" },
        { name: t("nav.photos"), link: "/photos" },
      ],
    },
    {
      title: t("nav.impact"),
      link: "/our-impact",
      links: [
        { name: t("nav.impactStories"), link: "/our-impact#impact-stories" },
        { name: t("nav.webinars"), link: "/our-impact#webinars" },
        { name: t("nav.workshops"), link: "/our-impact#workshops" },
      ],
    },
  ], [t]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      // Handle hash links
      const hash = href.substring(1);
      if (hash === "events") {
        // Navigate to home and scroll to section
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      navigate(href);
    }
    onLinkClick();
  };

  return (
    <>
      <section className="max-container flex flex-col lg:flex-row justify-between p-6 lg:p-10 gap-8 overflow-y-auto max-h-screen">
        {/* Main Navigation Links */}
        <div className="flex flex-col text-red gap-6 lg:gap-10 font-semibold text-lg lg:text-xl font-poppins">
          {navLinks.map((section) => (
            section.external ? (
              <a
                key={section.label}
                href={section.href}
                onClick={onLinkClick}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button label={section.label} />
              </a>
            ) : (
              <a
                key={section.label}
                href={section.href}
                onClick={(e) => handleLinkClick(e, section.href)}
                className="hover:text-orange transition-colors duration-300"
              >
                {section.label}
              </a>
            )
          ))}
          <div className="flex gap-5 mt-4">
            {socialMedia.map((icon) => (
              <div className="flex" key={icon.alt}>
                <a
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onLinkClick}
                  className="hover:scale-110 transition-transform duration-300"
                >
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Divider - Hidden on mobile */}
        <div className="bg-orange h-auto w-0.5 mx-0 lg:mx-10 hidden lg:block"></div>

        {/* Navigation Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 xl:gap-16 flex-1">
          {navigation.map((section) => (
            <div key={section.title} className="min-w-[180px]">
              <a
                href={section.link === "#" ? "#" : section.link}
                onClick={(e) => {
                  if (section.link !== "#") {
                    handleLinkClick(e, section.link);
                  } else {
                    e.preventDefault();
                  }
                }}
                className="hover:text-orange transition-colors duration-300"
              >
                <h4 className="font-poppins text-black font-semibold text-lg lg:text-xl mb-6 lg:mb-8">
                  {section.title}
                </h4>
              </a>
              <ul className="space-y-3 lg:space-y-4">
                {section.links.map((link) => (
                  <li
                    className="font-poppins text-sm lg:text-base text-black hover:text-orange transition-colors duration-300"
                    key={link.name}
                  >
                    <a
                      href={link.link}
                      onClick={(e) => handleLinkClick(e, link.link)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* Contact Us Section */}
          <div className="min-w-[180px]">
            <a href="/contact" onClick={(e) => handleLinkClick(e, "/contact")}>
              <Button label={t("nav.contactUs")} />
            </a>
          </div>
        </div>
      </section>
      
      {/* Search Button at Bottom Corner */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.button
          onClick={() => setIsSearchOpen(true)}
          className="bg-orange hover:bg-red text-white rounded-full p-4 shadow-2xl flex items-center gap-3 transition-all duration-300"
          whileHover={{ scale: 1.1, boxShadow: "0 10px 30px rgba(248, 154, 35, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          aria-label="Search"
        >
          <img src={search} alt="Search Icon" className="w-6 h-6" />
          <span className="font-poppins font-bold text-lg hidden sm:block">{t("common.search").toUpperCase()}</span>
        </motion.button>
      </motion.div>
      
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Menu;
