import React, { useRef } from "react";
import { Link } from "react-router-dom";
import alumniData from "../data/alumniData";
import "./alumni.css";

export default function AlumniList() {
  const carouselRef = useRef(null);

  // Manual scroll buttons
  const scrollLeft = () => {
    if (carouselRef.current) carouselRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (carouselRef.current) carouselRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

  // Duplicate items for seamless loop
  const carouselItems = [...alumniData, ...alumniData];

  return (
    <div className="alumni-container" style={{ backgroundColor: "#111", minHeight: "100vh", padding: "50px 20px" }}>
      <h2 style={{ textAlign: "center", fontSize: "40px", fontWeight: "bold", color: "#22c55e", marginBottom: "15px" }}>
        Our Alumni
      </h2>
      <p style={{ textAlign: "center", fontSize: "18px", color: "#aaa", marginBottom: "50px" }}>
        Explore profiles of alumni across industries and batches.
      </p>

      <div className="carousel-wrapper">
        <button className="carousel-btn left" onClick={scrollLeft}>
          &#10094;
        </button>

        <div className="alumni-carousel auto-scroll" ref={carouselRef}>
          {carouselItems.map((alumni, idx) => (
            <Link key={idx} to={`/alumni/${alumni.id}`} className="alumni-card">
              <img src={alumni.image} alt={alumni.name} className="carousel-img" />
              <h3>{alumni.name}</h3>
              <span>{alumni.company}</span>
              <p style={{ color: "#22c55e", fontSize: "14px" }}>Batch of {alumni.batch}</p>
            </Link>
          ))}
        </div>

        <button className="carousel-btn right" onClick={scrollRight}>
          &#10095;
        </button>
      </div>
    </div>
  );
}
