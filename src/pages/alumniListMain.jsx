import React from "react";
import { Link } from "react-router-dom";
import alumniData from "../data/alumniData";

export default function AlumniList() {
  return (
    <div style={{ backgroundColor: "#111", minHeight: "100vh", padding: "50px 20px" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "36px",
          fontWeight: "bold",
          color: "#22c55e",
          marginBottom: "10px",
        }}
      >
        Our Alumni
      </h2>
      <p
        style={{
          textAlign: "center",
          fontSize: "16px",
          color: "#aaa",
          marginBottom: "40px",
        }}
      >
        Explore profiles of alumni across industries and batches.
      </p>

      {/* Alumni Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {alumniData.map((alumni) => (
          <Link
            key={alumni.id}
            to={`/alumni/${alumni.id}`}
            style={{
              backgroundColor: "#1c1c1c",
              padding: "20px",
              borderRadius: "12px",
              textAlign: "center",
              color: "white",
              textDecoration: "none",
              transition: "transform 0.2s ease-in-out",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <img
              src={alumni.image}
              alt={alumni.name}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "15px",
                border: "2px solid #22c55e",
              }}
            />
            <h3 style={{ fontSize: "18px", marginBottom: "5px", color: "#fff" }}>
              {alumni.name}
            </h3>
            <p style={{ fontSize: "14px", color: "#ccc", marginBottom: "5px" }}>
              {alumni.company}
            </p>
            <p style={{ fontSize: "13px", color: "#22c55e" }}>Batch of {alumni.batch}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
