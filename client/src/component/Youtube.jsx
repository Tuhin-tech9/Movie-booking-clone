import React, { useState } from "react";
import Blurcircle from "./Blurcircle";

const trailers = [
  {
    id: "TcMBFSGVi1c",
    title: "Avengers: Endgame",
  },
  {
    id: "zSWdZVtXT7E",
    title: "Interstellar",
  },
  {
    id: "JfVOs4VSpmA",
    title: "Spider-Man: No Way Home",
  },
  {
     id: "Way9Dexny3w",
    title: "Dune: Part Two",
  },
  {
  id: "mqqft2x_Aa4",
    title: "The Batman (2022)",
  },
  
];

const YouTube = () => {
  const [currentTrailer, setCurrentTrailer] = useState(trailers[0]);

  const getThumbnailUrl = (videoId) =>
    `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const youtubeUrl = `https://www.youtube.com/watch?v=${currentTrailer.id}`;

  return (
    <div className="relative flex flex-col items-center justify-center pt-20 pb-20 min-h-screen">
      {/* <Blurcircle top="0%" right="0%"/> */}
    <h1 className="mb-6 text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-center w-full max-w-3xl  pb-3 px-4 lg:mr-45 max-md:font-semibold max-md:text-1xl">
      TRAILER: <span className="text-gray-300 font-normal">{currentTrailer.title}</span>
</h1>



      <a
        href={youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full max-w-3xl group"
      >
        <img
          src={getThumbnailUrl(currentTrailer.id)}
          alt={`${currentTrailer.title} Trailer`}
          className="rounded-xl shadow-2xl w-full px-4"
        />
      </a>

      {/* Other Trailers */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 w-full  max-w-4xl max-md:max-w-2xl px-4">
        {trailers
          .filter((t) => t.id !== currentTrailer.id)
          .map((trailer) => (
            <div
              key={trailer.id}
              onClick={() => setCurrentTrailer(trailer)}
              className="cursor-pointer hover:scale-105 transition-transform"
            >
              <img
                src={getThumbnailUrl(trailer.id)}
                alt={trailer.title}
                className="rounded-md shadow-md"
              />
              <p className="text-center text-white mt-2 text-sm">
                {trailer.title}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default YouTube;
