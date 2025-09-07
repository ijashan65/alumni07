import React from "react";
import { Link } from "react-router-dom";
import AlumniList from "./pages/alumniList";
import Networking from "./pages/networking";
import Events from "./pages/events";
import ALumniListMain from "./pages/alumniListMain.jsx";

export default function AlumniHub() {
  const linkStyle = {
    color: "#ffffffff",
    textDecoration: "none",
    fontWeight: "500",
    marginLeft: "20px",
  };

  return (
    <div>
      {/* Internal CSS */}
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background-color: #f9f9f9ff;
          height: 150%;
        
        }
        header {
          background: #111;
          color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 30px;
          flex-wrap: wrap;
          
        }
        header h1 {
          margin: 0;
          font-size: 22px;
        }
        nav {
          display: flex;
          gap: 20px;
          margin-left: auto;
        }
        nav a {
          color: #fff;
          text-decoration: none;
          font-weight: 500;
        }
        nav a:hover {
          color: #ddd;
        }
        .login-btn {
          background: #16a34a;
          color: #fff;
          padding: 8px 16px;
          margin-left: 10px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: bold;
        }
        .login-btn:hover {
          background: #15803d;
        }
        .hero {
          background: #111;
          color: #fff;
          text-align: center;
          padding: 80px 20px;
          border-radius: 0 0 20px 20px;
          height: 400px;
        }
        .hero h2 {
          font-size: 42px;
          font-weight: bold;
          margin-bottom: 15px;
          line-height: 1.3;
        }
        .hero p {
          font-size: 18px;
          color: #bbb;
        }
        .hero-buttons {
          margin-top: 30px;
        }
        .btn {
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          margin: 5px;
        }
        .btn-green {
          background-color: #16a34a;
          color: #fff;
        }
        .btn-green:hover {
          background-color: #15803d;
        }
        .btn-dark {
          background-color: transparent;
          border: 1px solid #444;
          color: #fff;
        }
        .btn-dark:hover {
          background-color: #222;
        }
        .cards {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-top: -40px;
          padding: 0 20px 40px;
        }
        .card {
          background: #f5f4f4ff;
          border-radius: 12px;
          box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
          padding: 25px;
          width: 280px;
          text-align: center;
          transition: transform 0.2s ease-in-out;
        }
        .card:hover {
          transform: translateY(-5px);
        }
        .card h3 {
          font-size: 20px;
          margin-top: 15px;
        }
        .card p {
          font-size: 15px;
          color: #555;
          margin-top: 10px;
        }
        @media (max-width: 768px) {
          header {
            flex-direction: column;
            text-align: center;
          }
          nav {
            margin: 10px 0;
          }
          .hero h2 {
            font-size: 32px;
          }
          .cards {
            flex-direction: column;
            align-items: center;
          }
          .card {
            width: 90%;
          }
        }
      `}</style>

      {/* Navbar */}
      <header>
        <h1>AlumniHub</h1>
        <nav>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/ALumniListMain" style={linkStyle}>Alumni</Link>
          <Link to="/networking" style={linkStyle}>Networking</Link>
          <Link to="/events" style={linkStyle}>Events</Link>
        </nav>
        <button className="login-btn">Login</button>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>
          Connecting Past,
          <br /> Empowering Future
        </h2>
        <p>Join a network of alumni, mentors, and students.</p>
        <div className="hero-buttons">
          <button className="btn btn-green">Join Now</button>
          <button className="btn btn-dark">Explore Alumni</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="cards">
       <Link to="/ALumniListMain" style={linkStyle}>
        <div className="card"> 
         <h3 style={{color : "black"}}>Alumni Profile</h3>
          <p>Search and connect with verified alumni across industries.</p>
        </div>
        </Link>
        <Link to="/networking" style={linkStyle}>
        <div className="card">
          <h3 style={{color : "black"}}>Networking</h3>
          <p>Expand your professional circle through alumni networking.</p>
        </div></Link>
         <Link to="/events" style={linkStyle}>
        <div className="card">
          <h3 style={{color : "black"}}>Events</h3>
          <p>Stay updated with alumni meets and webinars.</p>
        </div></Link>
        <div className="card">
          <h3>Donations & Fundraising</h3>
          <p>Give back and empower the next generation of students.</p>
        </div>
      </section>
          
          {/* <Networking /> */}
          <AlumniList />
          
          {/* <Events /> */}
    </div>
  );
}
