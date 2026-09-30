import { motion } from "framer-motion";
import { styles } from "../styles";
import { useState, useEffect } from "react";
import spaceshipBg from "../assets/spaceship-bg.png";

const TypewriterText = ({ texts }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        const currentText = texts[currentIndex];
        if (displayText.length < currentText.length) {
          setDisplayText((prevText) => currentText.slice(0, prevText.length + 1));
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
          setTimeout(() => {
            setIsTyping(true);
            setDisplayText("");
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }, 2000);
        }
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex, isTyping, texts, displayText]);

  return (
    <span className="inline-block text-[#00bfff] font-bold">
      {displayText.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          {char}
        </motion.span>
      ))}
      {isTyping && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block ml-1"
        >
          |
        </motion.span>
      )}
    </span>
  );
};

const WavingHand = () => {
  return (
    <img 
      src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png" 
      alt="Waving Hand"
      className="wave-emoji"
      style={{ display: 'inline-block', marginLeft: '10px', width: '50px', height: '50px' }}
    />
  );
};

const Hero = () => {
  const typedItems = [
    "Data Scientist",
    "Machine Learning Engineer",
    "AI/ML Enthusiast",
    "Python Developer"
  ];

  return (
    <section
      className="relative w-full h-screen mx-auto overflow-hidden"
      style={{
        backgroundImage: `url(${spaceshipBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <style jsx>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(-10deg); }
          20% { transform: rotate(12deg); }
          30% { transform: rotate(-10deg); }
          40% { transform: rotate(9deg); }
          50% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        .wave-emoji {
          animation-name: wave;
          animation-duration: 1.8s;
          animation-iteration-count: infinite;
          transform-origin: 70% 70%;
          display: inline-block;
        }
      `}</style>

      {/* Subtle dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Animated dialog box flying in from the tunnel depth */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          initial={{ scale: 0.15, opacity: 0, z: -500 }}
          animate={{ scale: 1, opacity: 1, z: 0 }}
          transition={{
            duration: 2.2,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.3,
          }}
          className="relative max-w-3xl w-full mx-4"
          style={{ perspective: "1000px" }}
        >
          {/* The sci-fi dialog box */}
          <div
            className="relative p-8 sm:p-12 rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(5, 8, 22, 0.85), rgba(10, 15, 30, 0.9))",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              boxShadow: `
                inset 0 0 30px rgba(0, 191, 255, 0.15),
                0 0 40px rgba(0, 191, 255, 0.1),
                0 20px 60px rgba(0, 0, 0, 0.5)
              `,
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Top neon accent bar */}
            <div
              className="absolute top-0 left-[15%] right-[15%] h-[2px]"
              style={{
                background: "#00bfff",
                boxShadow: "0 0 15px #00bfff, 0 0 30px rgba(0, 191, 255, 0.3)",
              }}
            />
            {/* Bottom neon accent bar */}
            <div
              className="absolute bottom-0 left-[25%] right-[25%] h-[2px]"
              style={{
                background: "#00bfff",
                boxShadow: "0 0 10px #00bfff, 0 0 20px rgba(0, 191, 255, 0.2)",
              }}
            />
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400/60 rounded-tl-lg" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400/60 rounded-tr-lg" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-400/60 rounded-bl-lg" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400/60 rounded-br-lg" />

            {/* Content */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-white font-black text-[36px] sm:text-[50px] lg:text-[65px] leading-tight"
            >
              Hi, I'm{" "}
              <span className="text-[#00bfff]" style={{ textShadow: "0 0 20px rgba(0, 191, 255, 0.5)" }}>
                Isha
              </span>{" "}
              <WavingHand />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="text-gray-300 font-medium text-[16px] sm:text-[20px] lg:text-[24px] mt-4"
            >
              I'm a <TypewriterText texts={typedItems} />
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1, duration: 0.8 }}
              className="text-gray-400 text-[13px] sm:text-[15px] mt-4"
            >
              Welcome to my portfolio — please view on desktop for the best experience!
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white/40 flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-white/60 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;