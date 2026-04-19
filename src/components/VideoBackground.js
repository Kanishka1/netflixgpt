import { MOVIE_TRAILER_YOUTUBE_ID } from "../utils/trailerLists";

const VideoBackground = ({ title }) => {

  const youtubeTrailerId = MOVIE_TRAILER_YOUTUBE_ID[title];
  if (!youtubeTrailerId) return null;

  return (
    <div className="w-screen">
      <iframe
       className="w-screen aspect-video"
       key={youtubeTrailerId}
        src={"https://www.youtube.com/embed/" + youtubeTrailerId+ "?autoplay=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
