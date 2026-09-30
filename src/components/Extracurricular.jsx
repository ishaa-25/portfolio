import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import { styles } from "../styles";
import { extracurricular } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const categoryColors = {
  Certifications: "from-blue-500/20 to-cyan-500/20 border-cyan-500/40 text-cyan-300",
  Fellowships: "from-purple-500/20 to-pink-500/20 border-purple-500/40 text-purple-300",
  Publications: "from-amber-500/20 to-orange-500/20 border-amber-500/40 text-amber-300",
  Leadership: "from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-emerald-300",
};

const CertificationCard = ({ title, icon, type, date, points, credential, category }) => (
  <div className="certification-card bg-tertiary p-6 rounded-2xl w-full h-full flex flex-col justify-between no-select transition-all duration-300">
    <div>
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/60 p-2 border border-white/10 shadow-inner">
          <img
            src={icon}
            alt={title}
            className="w-full h-full object-contain no-select"
          />
        </div>
        {category && (
          <span
            className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border bg-gradient-to-r ${
              categoryColors[category] || "from-purple-500/20 to-blue-500/20 border-purple-500/30 text-purple-300"
            }`}
          >
            {category}
          </span>
        )}
      </div>

      <h3 className="text-white font-bold text-[18px] leading-snug mb-1.5 no-select">
        {title}
      </h3>
      <p className="text-[#915EFF] font-medium text-[12px] mb-1 no-select">{type}</p>
      <p className="text-secondary text-[11px] mb-3 no-select">{date}</p>

      <ul className="list-disc ml-4 space-y-1.5">
        {points.map((point, index) => (
          <li
            key={`certification-point-${index}`}
            className="text-white-100 text-[12px] pl-1 leading-relaxed tracking-normal no-select"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>

    {credential && (
      <div className="mt-5 flex justify-end no-select">
        <a
          href={credential}
          target="_blank"
          rel="noopener noreferrer"
          className="black-gradient text-secondary hover:text-white py-2 px-4 rounded-lg outline-none w-fit text-[12px] font-bold shadow-md shadow-primary transition-all duration-300 hover:scale-105 hover:shadow-[0_0_12px_rgba(145,94,255,0.7)] no-select"
        >
          View Credential
        </a>
      </div>
    )}
  </div>
);

const filterCategories = [
  "All",
  "Certifications",
  "Fellowships & Simulations",
  "Publications & Leadership",
];

const Extracurricular = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") return extracurricular;
    if (selectedCategory === "Certifications") {
      return extracurricular.filter((item) => item.category === "Certifications");
    }
    if (selectedCategory === "Fellowships & Simulations") {
      return extracurricular.filter((item) => item.category === "Fellowships");
    }
    if (selectedCategory === "Publications & Leadership") {
      return extracurricular.filter(
        (item) => item.category === "Publications" || item.category === "Leadership"
      );
    }
    return extracurricular;
  }, [selectedCategory]);

  return (
    <div ref={sectionRef} className="relative">
      <span className="hash-span" id="extracurricular">
        &nbsp;
      </span>
      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <p className={`${styles.sectionSubText} text-center`}>Continuous Learning & Impact</p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h2 className={`${styles.sectionHeadText} text-center`}>Certifications & Extras.</h2>
      </motion.div>

      {/* Category Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-2.5 mt-8 mb-4 px-2"
      >
        {filterCategories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-[0_0_15px_rgba(145,94,255,0.5)] scale-105"
                  : "bg-tertiary/80 text-secondary hover:text-white hover:bg-tertiary border border-white/10"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </motion.div>

      <motion.div 
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-10 flex flex-col items-center"
      >
        <Swiper
          key={selectedCategory}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={filteredItems.length >= 3}
          spaceBetween={10}
          coverflowEffect={{
            rotate: 35,
            stretch: 0,
            depth: 80,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            }
          }}
        >
          {filteredItems.map((certification, index) => (
            <SwiperSlide key={`${selectedCategory}-cert-${index}`}>
              <CertificationCard {...certification} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <style jsx global>{`
        .mySwiper {
          width: 100%;
          padding-top: 40px;
          padding-bottom: 50px;
        }
        .swiper-slide {
          background-position: center;
          background-size: cover;
          width: 320px;
          min-height: 430px;
          height: auto;
          display: flex;
        }
        .swiper-slide-active {
          transform: scale(1.05) !important;
        }
        .swiper-pagination-bullet {
          background: #915eff;
        }
        .certification-card {
          background-color: rgba(30, 30, 60, 0.85);
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          border: 1px solid rgba(255, 255, 255, 0.15);
          transition: all 0.3s ease-in-out;
        }
        .certification-card:hover {
          border-color: rgba(145, 94, 255, 0.5);
          box-shadow: 0 12px 36px 0 rgba(145, 94, 255, 0.25);
        }
        .black-gradient {
          background: #000000;
          background: -webkit-linear-gradient(to right, #434343, #000000);
          background: linear-gradient(to right, #434343, #000000);
        }
        @media (max-width: 768px) {
          .swiper-slide {
            width: 88vw;
            max-width: 330px;
            min-height: 410px;
            height: auto;
            opacity: 1 !important;
            transform: scale(1) !important;
          }
          .swiper-slide-active {
            transform: scale(1) !important;
          }
          .mySwiper {
            padding-left: 4vw;
            padding-right: 4vw;
          }
          .swiper-slide-next,
          .swiper-slide-prev {
            opacity: 0.3 !important;
            visibility: visible;
          }
        }
      `}</style>
    </div>
  );
};

export default SectionWrapper(Extracurricular, "certifications");
