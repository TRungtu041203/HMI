import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { teamMembers } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import cuongImage from '../assets/Team/cuong.jpg';
import tungImage from '../assets/Team/tung.jpg';
import minhImage from '../assets/Team/minh.jpg';



const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        {icon && (
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />
        )}

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const TeamMemberCard = ({ member }) => (
  <Tilt className="xs:w-[350px] w-full"> {/* Adjust the width of the card */}
    <motion.div
      variants={fadeIn("right", "spring", 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[400px] flex flex-col items-center justify-start">
        {/* Display member image */}
        <img
          src={member.image}
          alt={member.name}
          className="w-20 h-20 object-cover rounded-full mb-4"
        />
        {/* Display member name */}
        <h3 className="text-white text-[22px] font-bold text-center">
          {member.name}
        </h3>
        {/* Display member studentID */}
        <p className="text-white text-[16px] text-center">
          Student ID: {member.studentID}
        </p>
        {/* Display member role */}
        <p className="text-white text-[16px] text-center font-semibold">
          {member.role}
        </p>
        {/* Display member description */}
        <p className="text-white text-[14px] text-center mt-2">
          {member.description}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Our Team</p>
        <h2 className={styles.sectionHeadText}>Meet the Team.</h2>
      </motion.div>

      <hr className="my-8 border-t border-gray-600" />

      <div className="mt-10 flex flex-wrap gap-7 justify-center">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>

      <hr className="my-8 border-t border-gray-600" />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-12 text-secondary text-[60px] max-w-6xl leading-[40px] text-center font-semibold'
      >
      <span className="text-green-500">Gamify your training experience</span>
      </motion.p>

    </>
  );
};

export default SectionWrapper(About, "about");
