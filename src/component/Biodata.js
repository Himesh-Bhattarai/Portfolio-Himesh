import React from 'react'
import Menu from './Menu';
import { useState, useEffect } from 'react';
import Preloader from './Preloader';

export default function Biodata({profileImage, intervalforpp }) {

  //control loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
               <Preloader isLoading={loading} />

      <div style={{ display: "flex" }}>
        {/* Left-side menu */}
        <div className="menu-container"  style={{ width: "20%" }}>
        <Menu profileImage={profileImage} intervalforpp={intervalforpp} />
        </div>
        {/* Main content */}
        <div className="content-container">
 
        </div>
      </div>  
    </>
  )
}
