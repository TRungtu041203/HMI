import Tilt from "react-tilt";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { midPrototypes } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ index, name, description, image }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    setIsClicked(!isClicked); // Toggle card click state
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="cursor-pointer" // Make card clickable
      onClick={handleCardClick} // Handle card click
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full aspect-[9/16]"> {/* Mobile-friendly aspect ratio */}
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5 flex flex-col justify-between h-[250px]">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] h-[200px] overflow-hidden">
            {isClicked ? description : `${description.substring(0, 100)}...`} {/* Show more on click */}
          </p>
        </div>
      </Tilt>
    </motion.div>
  );
};



const Process = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Prototype</p>
        <h2 className={`${styles.sectionHeadText}`}>Low-Fidelity</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
         Our first prototype is a low-fidelity prototype. It is a simple and rough design that helps us to visualize the layout of the website. We sketch this on <strong>Goodnotes</strong>  (Ipad)
        </motion.p>
      </div>

      <motion.div variants={textVariant()} className="mt-10">
        <p className={ `${styles.sectionSubText} `}>Prototype</p>
        <h2 className={`${styles.sectionHeadText}`}>Medium-Fidelity</h2>
      </motion.div>
            <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
         Our second prototype is a medium-fidelity prototype. It is a more detailed and well-researched design that enables us to programming the layout of the website. We design this on <strong>Figma</strong>
        </motion.p>
        </div>
        <div className='mt-20 flex flex-wrap gap-7'>
        {midPrototypesPrototypes.map((prototype, index) => (
          <ProjectCard key={`prototype-${index}`} index={index} {...prototype} />
        ))}
      </div>
        <motion.div variants={textVariant()} className="mt-10">
        <p className={ `${styles.sectionSubText} `}>Prototype</p>
        <h2 className={`${styles.sectionHeadText}`}>High-Fidelity</h2>
        </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
         Our third prototype is a high-fidelity prototype. Video <strong>DEMO</strong>
        </motion.p>
        <div className='mt-5 w-full flex justify-center'>
        <video className='w-full max-w-3xl rounded-lg shadow-lg' controls>
        <source src="D:\Data\HUST\2024.1\App VFX\Sample Video\flycam.mp4" type="video/mp4" />
        Your browser does not support the video tag.
         </video>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Process, "process");
