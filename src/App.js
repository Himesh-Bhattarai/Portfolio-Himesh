import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './index.css';
// Components
// import Entrance from './component/Entrance';
import About from './component/About';
import Resume from './component/Resume';
import Portfolio from './component/Portfolio';
import Contact from './component/Contact';
import Service from './component/Service';
import Preloader from './component/Preloader';
import Dashboard from './component/Dashboard';
import Home from './component/Home';
// import Vault from './component/Vault';
// import Biodata from './component/Biodata';
// import Projects from './component/Projects';
// import Images from './component/Images';

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
    "/assets/img/Realpic/profile-pic-main.jpg",
  ];

  //Loading timer- when you open any coponent you can see animation of opening door(this preloader is no longer available on every nav component)
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
          <Route path="/" element={<Navigate to="/Dashboard" />} />
          <Route path="/Dashboard" element={<Dashboard profileImage={profileImage} ImageURI={background} interval={4444444440} intervalforpp={5000} textStyle={marqueeTextStyle} />} />
          <Route path="/Home" element={<Home profileImage={profileImage} ImageURI={background} interval={43200000} intervalforpp={5000} textStyle={marqueeTextStyle} />} />
          <Route path="/About" element={<About profileImage={profileImage} ImageURI={background} interval={0} intervalforpp={0} textStyle={marqueeTextStyle} />} />
          <Route path="/Resume" element={<Resume profileImage={profileImage} ImageURI={background} interval={43200000} intervalforpp={5000} textStyle={marqueeTextStyle} />} />
          <Route path="/Service" element={<Service profileImage={profileImage} ImageURI={background} interval={43200000} intervalforpp={5000} textStyle={marqueeTextStyle} />} />
          <Route path="/Portfolio" element={<Portfolio profileImage={profileImage} ImageURI={background} interval={43200000} intervalforpp={5000} textStyle={marqueeTextStyle} />} />
          <Route path="/Contact" element={<Contact profileImage={profileImage} ImageURI={background} interval={43200000} intervalforpp={5000} textStyle={marqueeTextStyle} />} />
         
        </Routes>
    </Router>
  );
}

export default App;
