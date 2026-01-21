import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Tab from "../components/Tab";
import { useTranslation } from "../hooks/useTranslation";

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null); // New state to track errors
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    // Using hardcoded videos as fallback since API key is not available
    // You can replace these with actual video IDs from your YouTube channel
    const fallbackVideos = [
      {
        id: { videoId: "vE39_togVdE" },
        snippet: {
          title: "Introduction of the VLSA/GALS Program to Farmer 2",
        },
      },
      {
        id: { videoId: "iIA6YCYQK7s" },
        snippet: {
          title: "Short video on VSLA/GALS project",
        },
      },
    ];
    
    setVideos(fallbackVideos);
    
    // Uncomment and add your API key if you want to fetch videos dynamically
    // const fetchVideos = async () => {
    //   const channelId = "UC_SePgsyHh7YvekBLSv4XZA";
    //   const apiKey = "YOUR_API_KEY_HERE";
    //   const maxResults = 2;
    //   try {
    //     const response = await fetch(
    //       `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`
    //     );
    //     const data = await response.json();
    //     if (data.items) {
    //       setVideos(data.items);
    //     } else {
    //       setVideos(fallbackVideos);
    //     }
    //   } catch (error) {
    //     console.error("Error fetching YouTube videos:", error);
    //     setVideos(fallbackVideos);
    //   }
    // };
    // fetchVideos();
  }, []);

  return (
    <section id="videos" className="flex max-container lg:justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        className="bg-white w-full lg:w-2/3"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-between ml-10 max-sm:ml-0 max-sm:gap-7 flex-wrap">
          <motion.h3
            className="font-poppins font-bold text-3xl text-ash pb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t("nav.videos")}
          </motion.h3>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/videos" onClick={(e) => { e.preventDefault(); navigate("/videos"); }}>
              <Tab label={t("common.moreVideos")} />
            </a>
          </motion.div>
        </div>
        <div className="flex flex-row gap-5 justify-center mt-10 flex-wrap">
          {videos.length > 0 ? (
            videos.map((video, index) => (
              <motion.div
                key={video.id.videoId}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="rounded-lg overflow-hidden shadow-lg"
              >
                <iframe
                  width="350"
                  height="250"
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  title={video.snippet.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="max-w-full"
                ></iframe>
              </motion.div>
            ))
          ) : error ? (
            <p className="text-gray-500">{error}</p>
          ) : (
            <p className="text-gray-500">Loading videos...</p>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Videos;
