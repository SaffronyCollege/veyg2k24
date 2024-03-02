// import react from reacimport React from 'react';

// const SponsorsComponent = ({ sponsors }) => (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px' }}>
//         <div style={{ textAlign: 'center' }}>
//             <p style={{ color: '#faed00', fontSize: '24px' }}>Our Sponsors</p>
//         </div>
//         <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', flexWrap: 'wrap' }}>
//             {sponsors.map((object, index) => (
//                 <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f8f8f8', minWidth: '100px', maxWidth: '150px' }}>
//                     <img src={object.logo} style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} alt={`${object.name} logo`} />
//                     <p style={{ marginTop: '10px', fontWeight: 'bold', color: '#333', textAlign: 'center' }}>{object.name}</p>
//                 </div>
//             ))}
//         </div>
//     </div>
// );

// export default SponsorsComponent;t;

import React, { useRef } from 'react';
const sponsors = [
    {
        name: "Brainy Beam",
        logo: require("./../assets/Brainy.png"),
        link: "https://www.brainybeam.com/",
    },
    {
        name: "Prime UAV",
        logo: require("./../assets/Prime.jpeg"),
        link: "https://primeuav.com/",
    },
    {
        name: "Integer System",
        logo: require("./../assets/Integer.jpg"),
        link: "https://www.integersystem.com/",
    },
]


// const SponsorsComponent = () => (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px' }}>
//         <div style={{ textAlign: 'center' }}>
//             <p style={{ color: '#faed00', fontSize: '24px' }}>Our Sponsors</p>
//         </div>
//         <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', flexWrap: 'wrap' }}>
//             {sponsors.map((object, index) => (
//                 <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f8f8f8', minWidth: '100px', maxWidth: '150px' }}>
//                     <img src={object.logo} style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} alt={`${object.name} logo`} />
//                     <p style={{ marginTop: '10px', fontWeight: 'bold', color: '#333', textAlign: 'center' }}>{object.name}</p>
//                 </div>
//             ))}
//         </div>
//     </div>
// );

// export default SponsorsComponent;

const width = window.innerWidth;
const height = window.innerHeight;

const cardStyles = () => {
    if (width < 800) {
        return {
            width: width * 0.75,
            height: height * 0.33
        }
    } else {
        return {
            width: width * 0.2,
            height: height * 0.37
        }
    }
}

const SponsorsComponent = () => (
    <div className="flex flex-col items-center gap-10 mb-20 z-10">
        <div className="text-center">
            <p className="text-yellow-500  font-bold" style={{ fontSize: 46 }} >Our Sponsors</p>
        </div>
        <div className="flex justify-evenly flex-wrap gap-y-12 gap-x-14" style={{ display: "flex", justifyContent: "space-evenly", alignContent: "space-around", }}>
            {sponsors.map((object, index) => (
                <div key={index} className="flex flex-col items-center rounded-lg">
                    <a href={object.link} target='_blank'>
                        <img src={object.logo} className="rounded-3xl object-cover" style={cardStyles()} alt={`${object.name} logo`} />
                    </a>
                    <a href={object.link} target='_blank'>
                        <p className="mt-2 font-semibold" style={{ fontSize: 32, color: '#00c2ff' }} >{object.name}</p>
                    </a>
                </div>
            ))}
        </div>
    </div>
);

export default SponsorsComponent;


// export default Sponsors;