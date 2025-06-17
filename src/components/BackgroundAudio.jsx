import { useEffect, useRef, useState } from "react";
import soundon from "../assets/soundon.png";
import soundoff from "../assets/soundoff.png";
import agent from "../assets/agent.png"; 

import valoTheme from "../../public/audio/valo.mp3";

const BackgroundAudio = () => {
  const audioRef = useRef(new Audio(valoTheme));
  audioRef.current.volume = 1;
  audioRef.current.loop = true;

  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  return (
    <div className="fixed bottom-1 left-4 flex items-center p-3 z-100">
      {/* Hand icon with animation */}
      {!isPlayingMusic && (
        <img
          src={agent}
          alt="click here"
          className="animate-bounce absolute -top-18 left-0 sm:block hidden"
        />
      )}
      {/* Sound button */}
      <img
        src={isPlayingMusic ? soundon : soundoff}
        alt="audio"
        onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        className="w-14 h-14 cursor-pointer object-contain"
      />
    </div>
  );
};

export default BackgroundAudio;
