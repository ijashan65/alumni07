import React from "react";

export default function Events() {
  return (
    <div style={{ backgroundColor: "#111", color: "white", padding: "50px 20px" , height: "600px"}}>
      {/* Section Heading */}
      <h1 style={{ textAlign: "center", fontSize: "32px", fontWeight: "bold", marginBottom: "10px" }}>
        Upcoming Events
      </h1>
      <p style={{ textAlign: "center", marginBottom: "40px", fontSize: "16px", color: "#ccc" }}>
        Stay updated with alumni meets, webinars, and fundraising activities.
      </p>

      {/* Event Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "100px auto",
        }}
      >
        {/* Event 1 */}
        <div
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "20px",
            borderRadius: "12px",
            textAlign: "left",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
            Alumni Meet 2025
          </h3>
          <p>15th October 2025</p>
          <p>Delhi, India</p>
          <p style={{ margin: "15px 0" }}>
            Reconnect with fellow alumni, share experiences, and explore new opportunities.
          </p>
          <button
            style={{
              backgroundColor: "#22c55e",
              border: "none",
              padding: "10px 16px",
              borderRadius: "6px",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Register Now
          </button>
        </div>

        {/* Event 2 */}
        <div
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "20px",
            borderRadius: "12px",
            textAlign: "left",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
            Webinar: Career Growth in Tech
          </h3>
          <p>20th September 2025</p>
          <p>Online</p>
          <p style={{ margin: "15px 0" }}>
            A live session with industry experts on career progression in technology.
          </p>
          <button
            style={{
              backgroundColor: "#22c55e",
              border: "none",
              padding: "10px 16px",
              borderRadius: "6px",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Register Now
          </button>
        </div>

        {/* Event 3 */}
        <div
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "20px",
            borderRadius: "12px",
            textAlign: "left",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
            Fundraising Gala
          </h3>
          <p>1st December 2025</p>
          <p>Mumbai, India</p>
          <p style={{ margin: "15px 0" }}>
            Support future students by contributing to our scholarship fund.
          </p>
          <button
            style={{
              backgroundColor: "#22c55e",
              border: "none",
              padding: "10px 16px",
              borderRadius: "6px",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}
