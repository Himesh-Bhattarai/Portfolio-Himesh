// In Dashboard.js
import React, { useState, useEffect } from 'react';
import Contact from './Contact';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Service from './Service';

export default function Dashboard({ interval, profileImage, intervalforpp, ImageURI }) {
    const [currentImage, setCurrentImage] = useState(ImageURI[0]); // Initialize with the first image

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            index = (index + 1) % ImageURI.length;  // Cycle through images
            setCurrentImage(ImageURI[index]);  // Update the current image
        }, interval);

        return () => clearInterval(intervalId);  // Cleanup on unmount
    }, [ImageURI, interval]);

    return (
        <>
            <Home profileImage={profileImage} intervalforpp={intervalforpp} ImageURI={currentImage} />
            <About profileImage={profileImage} intervalforpp={intervalforpp} ImageURI={currentImage} />
            <Resume profileImage={profileImage} intervalforpp={intervalforpp} ImageURI={currentImage} />
            <Portfolio profileImage={profileImage} intervalforpp={intervalforpp} ImageURI={currentImage} />
            <Service profileImage={profileImage} intervalforpp={intervalforpp} ImageURI={currentImage} />
            <Contact profileImage={profileImage} intervalforpp={intervalforpp} ImageURI={currentImage} />
        </>
    );
}
