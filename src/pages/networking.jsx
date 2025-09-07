import React from "react";
import { FaUsers, FaGraduationCap, FaComments } from "react-icons/fa"; // icons
import "./Networking.css";

export default function Networking() {
  return (
    <div className="networking-container">
      {/* Title */}
      <h1 className="networking-title">
        Alumni <span className="highlight-blue">Networking</span>
      </h1>
      <p className="networking-subtitle">
        Expand your professional circle, discover opportunities, and collaborate
        with alumni across industries.
      </p>

      {/* Buttons */}
      <div className="networking-buttons">
        <button className="btn btn-green">Start Networking</button>
        <button className="btn btn-dark">View My Connections</button>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search events..."
        className="networking-search"
      />

      {/* Cards */}
      <div className="networking-cards">
        <div className="networking-card">
          <FaUsers className="icon" />
          <h3>Alumni Community</h3>
          <p>Connect with alumni across industries</p>
          <button className="btn btn-green">Join</button>
        </div>

        <div className="networking-card">
          <FaGraduationCap className="icon" />
          <h3>Mentorship Program</h3>
          <p>Get guidance from experienced alumni</p>
          <button className="btn btn-green">Join</button>
        </div>

        <div className="networking-card">
          <FaComments className="icon" />
          <h3>Discussion Forums</h3>
          <p>Share ideas, opportunities and discussions</p>
          <button className="btn btn-green">Join</button>
        </div>
      </div>
    </div>
  );
}
