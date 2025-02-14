import { useState, useEffect, useRef, useCallback } from "react";
import VideoBackground from "./VideoBackground";
import LoveLetter from "./components/LoveLetter/LoveLetter";

function App() {
  const [pageState, setPageState] = useState({
    imgUrl: "/manja.gif",
    text: "Will You be my Valentine? 🤗",
    status: false,
    count: 0,
  });

  const NoBtnRef = useRef(null);

  const [noBtnStyle, setNoBtnStyle] = useState({});
  const [sheSaidYes, setSheSaidYes] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  // const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const images = [
      "/manja.gif",
      "/yes.gif",
      "/sochle.gif",
      "/sochle2.gif",
      "/lastmanja.gif",
    ];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const handleYes = () => {
    setPageState({
      imgUrl: "/yes.gif",
      text: "Hehehehe, I knew it! Love You 😘 -->",
      status: true,
      count: 0,
    });
    setTimeout(() => {
      setSheSaidYes(true);
    }, 2000);
  };

  const handleNo = () => {
    const states = [
      { img: "/sochle.gif", text: "Soch le ache se! 🙄" },
      { img: "/sochle2.gif", text: "Ek aur baar Soch le! 😣" },
      { img: "/lastmanja.gif", text: "Manja na! Kitna bhav khaegi 😭" },
    ];

    if (pageState.count < states.length) {
      setPageState({
        imgUrl: states[pageState.count].img,
        text: states[pageState.count].text,
        status: false,
        count: pageState.count + 1,
      });
    } else {
      handleNoHover();
    }
  };

  const handleNoHover = useCallback(() => {
    if (pageState.count >= 3) {
      NoBtnRef.current.style.position = "absolute";
      const randomX = Math.floor(Math.random() * 90 + 5);
      const randomY = Math.floor(Math.random() * 90 + 5);

      setNoBtnStyle({ top: `${randomY}%`, left: `${randomX}%` });
    }
  }, [pageState.count]);

  useEffect(() => {
    handleNoHover();
  }, [pageState.count, handleNoHover]);

  const handleStatus = () => {
    // setIsOpen(status);
  };
  const handleClick = () => {
    // setIsClicked(status);
  };

  return (
    <main className="h-screen w-full flex justify-center items-center text-white">
      <VideoBackground />

      {!sheSaidYes ? (
        <div className="p-8 flex flex-col gap-4 text-center justify-center items-center mb-52">
          <img
            src={pageState.imgUrl}
            width={250}
            height={250}
            className="object-cover"
          />
          <h1 className="text-4xl md:text-5xl font-semibold tracking-wide min-h-[80px]">
            {pageState.text}
          </h1>

          {!pageState.status && (
            <div className="flex gap-4">
              <button
                onClick={handleYes}
                className="bg-white text-black px-5 py-2 rounded-2xl cursor-pointer text-lg font-bold transition-transform duration-150 hover:scale-105"
              >
                Yes
              </button>

              <button
                onClick={handleNo}
                ref={NoBtnRef}
                onMouseOver={handleNoHover}
                onMouseEnter={handleNoHover}
                style={{
                  top: noBtnStyle?.top,
                  left: noBtnStyle?.left,
                }}
                className="bg-white text-black px-5 py-2 rounded-2xl cursor-pointer text-lg font-bold transition-transform duration-100 hover:scale-105"
              >
                No
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="w-full">
          {/* {isOpen &&
            
          <><img
          style={{
            transition: "all 1s ease-in-out"
          }}
            className={`absolute left-36 top-14 transition-all opacity-0 scale-0 ${
              isClicked
                ? "opacity-100 scale-100 rotate-[-15deg] translate-y-2"
                : ""
            }`}
            src="/her/her1.jpeg"
            width={250}
            height={250}
          />
          <img
           style={{
            transition: "all 1.8s ease-in-out"
          }}
            className={`absolute right-20 top-20 transition-all duration-500 opacity-0 scale-0 ${
              isClicked ? "opacity-100 scale-100 rotate-[15deg] translate-y-2" : ""
            }`}
            src="/her/her2.jpeg"
            width={250}
            height={250}
          />
          <img
           style={{
            transition: "all 1.5s ease-in-out"
          }}
            className={`absolute right-44 top-96 transition-all duration-500 opacity-0 scale-0 ${
              isClicked
                ? "opacity-100 scale-100 rotate-[-20deg] translate-y-2"
                : ""
            }`}
            src="/her/her3.jpeg"
            width={250}
            height={250}
          />
          <img
           style={{
            transition: "all 2s ease-in-out"
          }}
            className={`absolute left-16 top-[450px] transition-all duration-500 opacity-0 scale-0 ${
              isClicked ? "opacity-100 scale-100 rotate-[10deg] translate-y-2" : ""
            }`}
            src="/her/her5.jpeg"
            width={250}
            height={250}
          />
          </> */}
          {/* } */}

          <LoveLetter hasClicked={handleClick} setStatus={handleStatus} />
        </div>
      )}
    </main>
  );
}

export default App;
