import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-6">
      <h1 className="text-white text-3xl font-bold mb-6">🎬 Avengers: Endgame - Official Trailer</h1>

      <div className="w-full max-w-4xl aspect-video">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=M1N_zFCOj5g"
          controls={true}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
