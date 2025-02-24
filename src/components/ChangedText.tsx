import { useState, useEffect } from "react";

interface HeroProps {
  titleH1: string;
  subtitleH2: string;
  text: string;
  textchanged: string[];
}

const Hero: React.FC<HeroProps> = ({
  titleH1,
  subtitleH2,
  text,
  textchanged,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textchanged.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [textchanged]);

  return (
    <article className="text-center flex flex-col items-center justify-center gap-3 max-w-5xl">
      <h1 className="text-7xl font-extrabold flex items-center text-white justify-center gap-3">
        {titleH1}{" "}
        <span className="block text-[#BFEF4D] transition-opacity duration-700 opacity-100 animate-fade">
          {textchanged[index]}
        </span>
      </h1>
      <h2 className="text-2xl text-white">{subtitleH2}</h2>
      <p className="text-lg text-white">{text}</p>
    </article>
  );
};

export default Hero;
