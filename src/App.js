import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './index.css';
// Components
import Entrance from './component/Entrance';
import About from './component/About';
import Resume from './component/Resume';
import Portfolio from './component/Portfolio';
import More from './component/More';
import Contact from './component/Contact';
import Service from './component/Service';
import Vault from './component/Vault';
import Biodata from './component/Biodata';
import Projects from './component/Projects';
import Images from './component/Images';
import Preloader from './component/Preloader';

function App() {
  // Style for the marquee text in Entrance.js / Home.js component
  const marqueeTextStyle = {
    color: "#00eeff",
    fontSize: "35px"
  };

  // Array of URIs for changing the background
  const background = [
    "/assets/img/Realpic/profile-background.jpg",
    "/assets/img/Realpic/profile-background2.jpg",
    "/assets/img/Realpic/profile-background3.jpg",
  ];

  // Array of URIs for changing the profile picture in Nav
  const profileImage = [
    "/assets/img/Realpic/profile-pic.jpeg",
    "/assets/img/Realpic/profile-pic2.jpg",
    "/assets/img/Realpic/profile-pic3.jpg",
    "/assets/img/Realpic/profile-pic6.jpeg",
  ];

  //Loading timer- when you open any coponent you can see animation of opening door
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);


  return (
    <Router>
      <Preloader isLoading={loading} />
        <Routes>
          <Route path="/" element={<Navigate to="/Entrance" />} />
          <Route path="/Entrance" element={<Entrance profileImage={profileImage} ImageURI={background} interval={43200000} intervalforpp={5000} textStyle={marqueeTextStyle} />} />
          <Route path="/Home" element={<Entrance profileImage={profileImage} ImageURI={background} interval={43200000} intervalforpp={5000} textStyle={marqueeTextStyle} />} />
          <Route path="/About" element={<About profileImage={profileImage} ImageURI={background} interval={43200000} intervalforpp={5000} textStyle={marqueeTextStyle} />} />
          <Route path="/Resume" element={<Resume profileImage={profileImage} ImageURI={background} interval={43200000} intervalforpp={5000} textStyle={marqueeTextStyle} />} />
          <Route path="/Service" element={<Service profileImage={profileImage} ImageURI={background} interval={43200000} intervalforpp={5000} textStyle={marqueeTextStyle} />} />
          <Route path="/Portfolio" element={<Portfolio profileImage={profileImage} ImageURI={background} interval={43200000} intervalforpp={5000} textStyle={marqueeTextStyle} />} />
          <Route path="/More" element={<More profileImage={profileImage} ImageURI={background} interval={43200000} intervalforpp={5000} textStyle={marqueeTextStyle} />} />
          <Route path="/Contact" element={<Contact profileImage={profileImage} ImageURI={background} interval={43200000} intervalforpp={5000} textStyle={marqueeTextStyle} />} />
          <Route path="/Images" element={<Images profileImage={profileImage} ImageURI={background} interval={43200000} intervalforpp={5000} textStyle={marqueeTextStyle} />} />
          <Route path="/Vault" element={<Vault profileImage={profileImage} ImageURI={background} interval={43200000} intervalforpp={5000} textStyle={marqueeTextStyle} />} />
          <Route path="/Biodata" element={<Biodata profileImage={profileImage} ImageURI={background} interval={43200000} intervalforpp={5000} textStyle={marqueeTextStyle} />} />
          <Route path="/Projects" element={<Projects profileImage={profileImage} ImageURI={background} interval={43200000} intervalforpp={5000} textStyle={marqueeTextStyle} />} />
        </Routes>
    </Router>
  );
}

export default App;
