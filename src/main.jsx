import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your pages/components
import App from "./app.jsx";
import Events from "./pages/events";
import Networking from "./pages/networking";
import AlumniList from "./pages/alumniList";
import AlumniProfile from "./pages/alumniProfile";
import AlumniListMain from "./pages/alumniListMain.jsx";


// Create root and render
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
 
        <Route path="/events" element={<Events />} />
        <Route path="/networking" element={<Networking />} />
        <Route path="/alumni" element={<AlumniList />} />
        <Route path="/alumni/:id" element={<AlumniProfile />} />
        <Route path="/alumniListMain" element={<AlumniListMain />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
