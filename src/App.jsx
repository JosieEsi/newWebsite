import {
  Hero,
  Work,
  Updates,
  Units,
  Events,
  Publications,
  Videos,
  Partners,
  Footer,
  Aboutafrica,
  Volunteer,
  Projects,
  CustomerReviews,
  PdaafricaContact,
  AfricaGallery,
  VideoGallery,
  CurrentProjects,
} from "./sections";
import Nav from "./components/Nav";
import PDAAFRICA from "./pages/PDAAFRICA";
import { Outlet, useLocation } from "react-router-dom";
import PDAAFRICAMenu from "./components/PDAAFRICAMenu";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "./components/ScrollToTop";


const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  // console.log("React App Loaded");

  return (
    <main className="relative">
      <ScrollToTop />
      <header>
        {location.pathname.startsWith("/pdaafrica") ? (
          <PDAAFRICAMenu /> // Render PDAAFRICA menu
        ) : (
          <Nav /> // Render home page menu
        )}
      </header>

      {location.pathname === "/" ? (
        // Home page layout with all the sections
        <>
          <section>
            <Hero />
          </section>
          <section className="padding">
            <Work />
          </section>
          <section className="padding bg-gray-200">
            <Updates />
          </section>
          {/* <section className="padding">
            <CurrentProjects />
          </section> */}
          <section className="padding">
            <Units />
          </section>
          <section className="padding">
            <Events />
          </section>
          <section className="bg-gray-200 padding">
            <Publications />
          </section>
          <section className="padding">
            <Videos />
          </section>
          <section className="padding">
            <Partners />
          </section>
        </>
      ) : location.pathname === "/pdaafrica" ? (
        // PDAAFRICA page layout
        <>
          <PDAAFRICA />
          {/* Add more sections here as needed */}
          <section className="padding">
            <Aboutafrica />
          </section>
          <section className="padding bg-gray-200">
            <Projects />
          </section>
          <section className="padding">
            <AfricaGallery />
          </section>
          <section className="padding">
            <VideoGallery />
          </section>
          <section className="padding">
            <CustomerReviews />
          </section>
          <section className="padding  bg-gray-200">
            <Volunteer />
          </section>
          <section className="padding">
            <PdaafricaContact />
          </section>
        </>
      ) : (
        // Outlet for other routes like Contact page
        <Outlet />
      )}

      <section className="bg-[#525050] padding">
        <Footer />
      </section>
    </main>
  );
};

export default App;
