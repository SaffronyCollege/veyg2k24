import React from 'react';
import SpeakerImage from '../assets/dap1.png'; // import your speaker image here
import StarsBackground from '../assets/stars.webp'; // import your stars background image here
import SpaceBackground from '../assets/ibg.jpg'; // import your space background image here

// Import Google Fonts stylesheet

const SpeakerSession = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '75vh',
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        zIndex: '999', // Ensure it's above other elements
        backgroundImage: `url(${StarsBackground})`, // Background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '5px',
      }}
    >
      <div
        style={{
          backgroundImage: `url(${SpaceBackground})`, // Space background image for the card
          backgroundSize: 'cover',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '80%',
          color: '#fff', // Text color
          fontFamily: 'Roboto Mono, monospace', // Font family
        }}
      >
        
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Chandrayaan: Through the Eyes of an ISRO Scientist</h2>
         </div> <img
          src={SpeakerImage}
          alt="Speaker"
          style={{
            width: '250px',
            height: '250px',
            marginBottom: '20px',
          }}
        />
        <div style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: '5px', fontSize: '25px'}}>Dr. Arpit Patel</p>
          <p style={{ marginBottom: '5px', fontSize: '20px' }}>12 March 2024</p>
          <p style={{ marginBottom: '5px', fontSize: '20px' }}>9:30 AM - 10:30 AM</p>
          {/* Add more session details here */}
        </div>
      </div>
    </div>
  );
};

export default SpeakerSession;
