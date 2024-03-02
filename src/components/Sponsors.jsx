import React from 'react';

const sponsors = [
    {
        name: "Prime UAV",
        logo: require("./../assets/Prime.jpeg"),
        link: "https://primeuav.com/",
    },
    {
        name: "Brainy Beam",
        logo: require("./../assets/Brainy.png"),
        link: "https://www.brainybeam.com/",
    },
    {
        name: "Integer System",
        logo: require("./../assets/Integer.jpg"),
        link: "https://www.integersystem.com/",
    },
]

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
    <div className="flex flex-col items-center gap-10 mb-20 z-10 "> {/* Reduced margin-top for mobile view */}
 {/* Added margin-top to the container */}
        {/* <div className="text-center">
            <p className="text-yellow-500  font-bold" style={{ fontSize: 46 }} >Our Sponsors</p>
        </div> */}
        <div className="text-center mt-10">
        <p className="text-black ziegers font-semibold text-[50px] leading-[65px] font-varino max-w-[850px] text-center lg:mt-[10px] ziegers2024" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
  VEYG 2024 SPONSORS
</p> 
</div>
        <div className="flex justify-evenly flex-wrap gap-y-12 gap-x-14 font-semibold font-sans hover:font-serif" style={{ display: "flex", justifyContent: "space-evenly", alignContent: "space-around", }}>
            {sponsors.map((object, index) => (
                <div key={index} className="flex flex-col items-center rounded-lg">
                    <a href={object.link} target='_blank'>
                    <img src={object.logo} className="rounded-3xl object-cover " style={{ ...cardStyles(), borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} alt={`${object.name} logo`} /> {/* Increased margin-top and added curved upper corners to the image */}
                        </a>
                    <a href={object.link} target='_blank'>
                        <p className="mt-2" style={{ fontSize: 32, color: '#00c2ff' }} >{object.name}</p>
                    </a>
                </div>
            ))}
        </div>
    </div>
);

export default SponsorsComponent;
