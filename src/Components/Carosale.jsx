import React, { useState, useEffect, useRef } from "react";
import '../Components/Carosale.css'

const mediaItems = [
  { type: "image", src: "/images/img1.jpg" },
  { type: "image", src: "/images/img2.jpg" },
  { type: "video", src: "/videos/video1.mp4" },
  { type: "image", src: "/images/img3.jpg" },
  { type: "video", src: "/videos/video2.mp4" },
  { type: "image", src: "/images/img4.jpg" },
  { type: "image", src: "/images/img5.jpg" },
  { type: "image", src: "/images/img6.jpg" },
];



const Carosale = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % mediaItems.length);
  };

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    const currentItem = mediaItems[current];

    // Set duration based on media type
    const duration = currentItem.type === "video" ? 15000 : 4000;

    timerRef.current = setTimeout(() => {
      nextSlide();
    }, duration);

    return () => clearTimeout(timerRef.current);
  }, [current]);

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % mediaItems.length);
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 4000); // auto-slide every 4s
//     return () => clearInterval(interval);
//   }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button className="arrow left" onClick={() => setCurrent((current - 1 + mediaItems.length) % mediaItems.length)}>
          ❮
        </button>
        {/* <button className="arrow left" onClick={prevSlide}>
          ❮
        </button> */}
        <div className="carousel-image-wrapper">
            {mediaItems[current].type === "image" ? (
  <img
    src={mediaItems[current].src}
    alt={`Slide ${current + 1}`}
    className="carousel-image"
  />
) : (
  <video
    src={mediaItems[current].src}
    className="carousel-image"
    autoPlay
    muted
    loop
    playsInline
    controls={false}
  />
)}

          {/* <img
            src={images[current]}
            alt={`Slide ${current + 1}`}
            className="carousel-image"
          /> */}
        </div>
        <button className="arrow right" onClick={nextSlide}>
          ❯
        </button>
      </div>
      <div className="carousel-dots">
        {mediaItems.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carosale;
