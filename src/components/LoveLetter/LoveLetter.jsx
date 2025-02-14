import { useState, useRef } from "react";
import PropTypes from 'prop-types';
import "./LoveLetter.css";
import audioFile from "./kushi.mp3";

const LoveLetter = ({setStatus , hasClicked}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => console.log("Playback succeeded"))
          .catch((e) => console.error("Playback failed:", e));
      }
      hasClicked(true)
    }, 800);

    setStatus(true)
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
      hasClicked(false)
    }, 800);
    setStatus(false)
  };

  return (
    <div
      className={`envelope ${isOpen ? "open" : ""}`}
      onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}
    >
      {!isOpen && <span className="absolute z-[999] text-base text-black bg-white -top-14 px-3 py-2 rounded-full left-1/2 -translate-x-1/2 animate-bounce">Click Me</span>}
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? "fullSize" : ""}`}>
        My Dearest Rashi, ❤️✨ From the very moment you entered my life,
        everything changed. Even though we haven’t met in person, I feel your
        presence in every word you speak, in every detail you share with me.
        Your voice is the sweetest melody, one that I could listen to forever,
        like a song that never loses its magic. 🎶💖 Your eyes—though I haven&apos;t
        had the chance to gaze into them—must be as deep as the universe,
        holding stories, dreams, and a sparkle that lights up the world. ✨
        Every conversation with you feels like a dream I never want to wake up
        from. The way you express yourself, the way you let me into your
        thoughts, makes me feel incredibly lucky. 🍀 You are the most precious
        person in my life, my heart&apos;s most treasured secret. 💕 I may not have
        held your hand yet, but I hold you close in every heartbeat, in every
        silent wish, and in every moment of longing. One day, I hope to see you,
        to tell you all this while looking into your beautiful eyes, and to feel
        the warmth of your presence beside me. 💑🌸 Until then, I will cherish
        you from afar, loving you more with each passing day. You are my
        favorite thought, my sweetest dream, and my most beautiful reality. 🌹💫
        Forever Yours, Gautam 💖
       
      </div>
      <audio
        ref={audioRef}
        src={audioFile}
        onError={(e) => console.error("Audio error:", e.message)}
      />
    </div>
  );
};

LoveLetter.propTypes = {
  setStatus: PropTypes.func.isRequired,
  hasClicked: PropTypes.func.isRequired,
};

export default LoveLetter;

