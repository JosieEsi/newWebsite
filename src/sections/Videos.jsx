import { useState, useEffect } from "react";
import Tab from "../components/Tab";

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null); // New state to track errors

  useEffect(() => {
    const fetchVideos = async () => {
      const channelId = "UC_SePgsyHh7YvekBLSv4XZA";
      //const apiKey = "AIzaSyB8v-m8cwvsQsP96sBsRHil0ISvvWiNQec";
      const maxResults = 2; // Number of videos to fetch

      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`
        );
        const data = await response.json();
        if (data.items) {
          setVideos(data.items);
        } else {
          setError("No videos found.");
        }
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
        setError("Failed to fetch videos.");
      }
    };

    fetchVideos();
  }, []);

  return (
    <section id="videos" className="flex max-container lg:justify-center ">
      <div className=" bg-white w-full lg:w-2/3  ">
        <div className="flex justify-between ml-10 max-sm:ml-0 max-sm:gap-7 ">
          <h3 className="font-poppins font-bold text-3xl text-ash pb-4">
            Videos
          </h3>

          <a href="https://www.youtube.com/@pdatv3656/videos">
            <Tab label="MORE VIDEOS" />
          </a>
        </div>
        <div className="flex flex-row gap-5 justify-center mt-10 flex-wrap ">
          {videos.map((video) => (
            <iframe
              key={video.id.videoId}
              width="350"
              height="250"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
