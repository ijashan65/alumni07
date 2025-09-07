import React from "react";
import { useParams, Link } from "react-router-dom";
import alumniData from "../data/alumniData";
import "../pages/alumniProfile.css"; // you can style or convert to Tailwind later

export default function AlumniProfile() {
  const { id } = useParams();
  const alumni = alumniData.find((a) => a.id === parseInt(id));

  if (!alumni) {
    return <h2>Alumni not found!</h2>;
  }

  return (
    <div className="alumni-profile-container">
      {/* Header */}
      <div className="profile-header">
        <h1 className="logo">AlumniHub</h1>
        <nav>
          <Link to="/alumni">Alumni</Link>
          <Link to="/mentorship">Mentorship</Link>
          <Link to="/events">Events</Link>
          <button className="login-btn">Login</button>
        </nav>
      </div>

      {/* Profile Card */}
      <div className="alumni-profile-card">
        <img src={alumni.image} alt={alumni.name} className="profile-img" />

        <h2>{alumni.name}</h2>
        <p className="verified">✅ Verified</p>

        <div className="profile-info">
          <p>💼 {alumni.position}</p>
          <p>📍 {alumni.location}</p>
          <p>🎓 {alumni.batch}</p>
          <p>⭐ {alumni.experience} Years of Experience</p>
        </div>

        {/* About */}
        <div className="profile-about">
          <h3>About</h3>
          <p>{alumni.details}</p>
        </div>

        {/* Skills */}
        {alumni.skills && (
          <div className="profile-skills">
            <h3>Skills</h3>
            <div className="skills-list">
              {alumni.skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        )}

        <button className="connect-btn">Connect</button>
        <Link to="/" className="back-btn">← Back to Directory</Link>
      </div>
    </div>
  );
}
