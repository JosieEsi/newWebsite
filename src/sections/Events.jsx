import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "../hooks/useTranslation";

const Events = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const twitterContainerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Intersection Observer to detect when Twitter container is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (twitterContainerRef.current) {
      observer.observe(twitterContainerRef.current);
    }

    return () => {
      if (twitterContainerRef.current) {
        observer.unobserve(twitterContainerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    // Load Twitter widgets script
    const loadTwitterScript = () => {
      // Check if script already exists
      if (document.getElementById("twitter-wjs")) {
        if (window.twttr && window.twttr.widgets) {
          window.twttr.widgets.load();
          setLoading(false);
        }
        return;
      }

      // Create and load script
      const script = document.createElement("script");
      script.id = "twitter-wjs";
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.charset = "utf-8";
      
      script.onload = () => {
        if (window.twttr && window.twttr.widgets) {
          window.twttr.widgets.load();
          setLoading(false);
        }
      };

      script.onerror = () => {
        setLoading(false);
      };

      document.body.appendChild(script);
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(loadTwitterScript, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [isInView]);



  const events = [
    { day: "02", month: "SEPT", title: "Cluster Reading Level Competition", location: "Mankraso" },
    { day: "16", month: "NOV", title: "Annual Reading Level Competition", location: "Mankraso" },
    { day: "12", month: "DEC", title: "8th Knowledge Sharing Workshop", location: "Accra" },
  ];

  return (
    <section
      id="events"
      className="max-container items-center justify-center flex max-sm:flex-col lg:px-32 px-4 sm:px-6"
    >
      <motion.div
        className="flex flex-1 flex-col max-sm:pb-10 justify-center items-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.h3
          className="font-poppins font-bold text-3xl text-red mb-6"
          whileHover={{ scale: 1.05 }}
        >
          {t("events.upcomingEvents")}
        </motion.h3>

        <div className="pt-5 max-sm:pl-5 space-y-5">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="flex pb-5 cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 10 }}
            >
              <div className="pr-6">
                <motion.div
                  className="bg-gray-200 w-20 h-8 text-center font-bold font-poppins"
                  whileHover={{ scale: 1.1 }}
                >
                  {event.day}
                </motion.div>
                <motion.div
                  className="bg-orange w-20 h-8 text-white text-center font-bold font-poppins"
                  whileHover={{ scale: 1.1 }}
                >
                  {event.month}
                </motion.div>
              </div>
              <div className="flex flex-col justify-start">
                <p className="font-poppins group-hover:text-orange transition-colors duration-300">
                  {event.title}
                </p>
                <p className="font-poppins text-red">{event.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* News & Activities Button */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.a
            href="/news-and-activities"
            onClick={(e) => {
              e.preventDefault();
              navigate("/news-and-activities");
            }}
            className="px-8 py-4 bg-red text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-block font-poppins"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("common.viewAll")} {t("common.newsAndActivities")} →
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex-1 flex justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="h-[350px] w-[300px] bg-black border-solid rounded-3xl max-w-full overflow-hidden" ref={twitterContainerRef}>
          <div className="w-full h-10 pt-2 pl-2 bg-yellow-50 flex justify-start rounded-tr-2xl rounded-tl-2xl">
            <p className="text-xs sm:text-sm">{t("events.tweetsFrom")}</p>
          </div>
          <div className="w-full h-[310px] overflow-hidden bg-black">
            {isInView ? (
              <div className="w-full h-full overflow-y-auto">
                {loading ? (
                  <div className="flex items-center justify-center h-full text-white/50">
                    <p className="text-sm">Loading tweets...</p>
                  </div>
                ) : (
                  <div className="w-full h-full">
                    <blockquote 
                      className="twitter-timeline" 
                      data-theme="dark" 
                      data-width="295" 
                      data-height="300"
                      data-chrome="noheader nofooter"
                      data-tweet-limit="5"
                    >
                      <a href="https://x.com/pdaghofficial?ref_src=twsrc%5Etfw">Tweets by pdaghofficial</a>
                    </blockquote>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-white/50">
                <p className="text-sm">Loading...</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Events;

// const Events = () => {
//   return (
//     <section
//       id="events"
//       className="max-container items-center justify-center flex flex-col lg:flex-row lg:px-10 py-10"
//     >
//       <div className="flex flex-1 flex-col justify-center items-center mb-10 lg:mb-0 lg:pr-10">
//         <h3 className="font-poppins font-bold text-3xl text-red mb-6">
//           Upcoming Events
//         </h3>

//         <div className="space-y-6">
//           <div className="flex items-center space-x-6">
//             <div>
//               <div className="bg-gray-200 w-20 h-8 flex items-center justify-center font-bold font-poppins">
//                 02
//               </div>
//               <div className="bg-orange w-20 h-8 flex items-center justify-center text-white font-bold font-poppins">
//                 SEPT
//               </div>
//             </div>
//             <div className="flex flex-col">
//               <p className="font-poppins">Cluster Reading Level Competition</p>
//               <p className="font-poppins text-red">Mankraso</p>
//             </div>
//           </div>

//           <div className="flex items-center space-x-6">
//             <div>
//               <div className="bg-gray-200 w-20 h-8 flex items-center justify-center font-bold font-poppins">
//                 16
//               </div>
//               <div className="bg-orange w-20 h-8 flex items-center justify-center text-white font-bold font-poppins">
//                 NOV
//               </div>
//             </div>
//             <div className="flex flex-col">
//               <p className="font-poppins">Annual Reading Level Competition</p>
//               <p className="font-poppins text-red">Mankraso</p>
//             </div>
//           </div>

//           <div className="flex items-center space-x-6">
//             <div>
//               <div className="bg-gray-200 w-20 h-8 flex items-center justify-center font-bold font-poppins">
//                 12
//               </div>
//               <div className="bg-orange w-20 h-8 flex items-center justify-center text-white font-bold font-poppins">
//                 DEC
//               </div>
//             </div>
//             <div className="flex flex-col">
//               <p className="font-poppins">8th Knowledge Sharing Workshop</p>
//               <p className="font-poppins text-red">Accra</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex-1 flex justify-center items-center">
//         <div className="h-[300px] w-[250px] bg-black border-solid rounded-3xl">
//           <div className="w-full h-10 flex items-center pl-2 bg-yellow-50 rounded-t-3xl">
//             <p className="font-poppins">Tweets from @pdaghanaofficial</p>
//           </div>
//           <div className="p-4 text-white">{/* Embed Twitter feed here */}</div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Events;
