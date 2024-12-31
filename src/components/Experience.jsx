import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion"; // Import fadeIn

const Experience = () => {
   const deliverables = [
    {
      title: "Needfinding",
      description:
        "Quantitative research + Qualitative Research are applied to discover users's needs.",
      links: [
        { label: "Presentation", url: "https://docs.google.com/presentation/d/1tuVN8aSvdPn81yK9wboK59IGVkpKcLMXNVL8cuNAFBU/edit#slide=id.g5d53475c46_5_356" },
        { label: "Survey", url: "https://husteduvn.sharepoint.com/:f:/s/2024.1AC4150ETngtcngi-my-Group11/EmGg4dVzNmlMn4hy7u2VYbsBzeIdWgeL0P9iHTvCiAflDw?e=KeBDAf" },
        { label: "Questionaire", url: "https://husteduvn.sharepoint.com/:w:/s/2024.1AC4150ETngtcngi-my-Group11/EaYdDsi7VTpJoA0tj8ruptYB7WcEUGGj6bVUjtJB9EndzQ?e=zainzd" },
        { label: "Interview", url: "https://husteduvn.sharepoint.com/:f:/s/2024.1AC4150ETngtcngi-my-Group11/Eka02dEYj5hJrqQAqi4tVcsBbZOMC_bVzdG-bnk811nBWA?e=VjpBX5" },
        { label: "Empathy Maps", url: "https://husteduvn.sharepoint.com/:f:/s/2024.1AC4150ETngtcngi-my-Group11/EltKJJ4ekKlKs0eRgQGJ3rgBrnyPwS4OQfcbL95f2K1Gpg?e=pkxHKE" },
      ],
    },
    {
      title: "Concept Video",
      description:
        "A short video demonstrating our initial project concept in action.",
      links: [
        { label: "Presentation", url: "https://docs.google.com/presentation/d/18T2VB3pedfrUlIn53B00MRhVC0hKZYqPZrihu59GA5M/edit#slide=id.g317f7123e5f_0_982" },
        { label: "Concept Video (MP4)", url: "https://drive.google.com/file/d/16mM59JF8YMF8--OHJoPHRzr-cY7ajslP/view?usp=sharing" },
      ],
    },
    {
      title: "Low-fi Prototype & Testing",
      description:
        "Low-fidelity prototype created by sketching on Goodnotes. Usability testing focused on three task flows.",
      links: [
        { label: "Presentation", url: "https://docs.google.com/presentation/d/1mGFowygNeGBaShBXSa6YjBUPHFKS8sCWkDWLt86sWKw/edit#slide=id.p" },
        { label: "Sketch", url: "https://docs.google.com/presentation/d/1Pzr9tsrOrvbmcFE_59w_h-hF8X16lPfBijZNnv4cXEU/edit#slide=id.p" },
      ],
    },
    {
      title: "Med-fi Prototype & Testing",
      description:
        "A mid-level representation of the product that includes structured layouts, interactive elements, and visual hierarchy to test core functionalities and user flows before high-fidelity design.",
      links: [
        { label: "Presentation", url: "https://docs.google.com/presentation/d/1jdi2Jr6EdH7AF8zbd4Na9ZPCoYgZ3PoaRt-BDWuYo8o/edit#slide=id.g12477ab5d3d_0_811" },
        { label: "Figma Demo", url: "https://www.figma.com/proto/m8YxvhKw7NakrKluSVkITA/Fitness-App-(Community)?node-id=1-479&p=f&t=1eI98n729K3XHawV-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1302%3A1169&show-proto-sidebar=1" },
        { label: "Figma Design", url: "https://www.figma.com/design/m8YxvhKw7NakrKluSVkITA/Fitness-App-(Community)?node-id=0-1&p=f&t=22sbgp2ABiy16UqG-0" },
      ],
    },
        {
      title: "Heuristic Evaluation",
      description:
        "A usability inspection method where evaluators assess the interface against established usability principles (heuristics) to identify potential design issues",
      links: [
        { label: "Team Evaluation", url: "https://husteduvn.sharepoint.com/:b:/s/2024.1AC4150ETngtcngi-my-Group11/EYako8v8JxRIhowRA0AGkQ4BTBUQj1yi8hh_qdEcFQ14Zg?e=bcHdaF" },
        { label: "Individual Evaluation", url: "https://husteduvn.sharepoint.com/:f:/s/2024.1AC4150ETngtcngi-my-Group11/EtAyNukc-n1IlfaiRLw_XFQBQ_cgLy8a4HbcCPCN_5G-Zg?e=uCoe6Z" },
      ],
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Home Fitness - Gymmify.
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          PROJECT IDEA
        </h2>
      </motion.div>

      <div className="mt-6 flex flex-col">
        <section id="project-idea" className="py-12">
          <div className="flex flex-col md:flex-row justify-between items-start">
            {/* Initial Idea Column */}
            <motion.div
              className="flex-1 p-4"
              variants={fadeIn("left", "spring", 0.2, 1)}
            >
              <h2 className="text-2xl font-semibold mb-4">Initial Idea</h2>
              <ul className="list-disc list-inside text-lg leading-relaxed text-violet-200">
                <li>
                  <strong>Simple</strong>, pre-recorded workout routines for
                  users to follow at home.
                </li>
                <li>
                  Exercises targeting different <strong>muscle groups</strong>,
                  catering to varying fitness levels.
                </li>
                <li>
                  Basic <strong>progress tracking</strong>, logging the number
                  of completed workouts.
                </li>
                <li>
                  Focus on{" "}
                  <strong>affordability and accessibility</strong>, without the
                  need for gym equipment or memberships.
                </li>
              </ul>
            </motion.div>

            {/* Vertical Divider - Always visible */}
            <div className="w-[2px] bg-gray-300 mx-4 md:mx-8"></div>

            {/* Refined Idea Column */}
            <motion.div
              className="flex-1 p-4"
              variants={fadeIn("right", "spring", 0.2, 1)}
            >
              <h2 className="text-2xl font-semibold mb-4">Refined Idea</h2>
              <ul className="list-disc list-inside text-lg leading-relaxed text-violet-200">
                <li>
                  <strong>Advanced Progress Tracking:</strong> Track metrics
                  like calories burned, workout duration, repetitions, and
                  muscle group usage over time, with visualized progress graphs.
                </li>
                <li>
                  <strong>Customizable Workouts:</strong> Option to create and
                  save custom workout routines or adjust pre-recorded workouts
                  based on time availability, intensity, and preferences.
                </li>
                <li>
                  <strong>Gamification:</strong> Earn badges, unlock
                  achievements, and maintain streaks for completing workouts or
                  hitting fitness milestones. These features aim to boost
                  motivation and long-term engagement.
                </li>
              </ul>
            </motion.div>
          </div>
        </section>
      </div>
          {/* Header Section for Deliverables */}
      <motion.div variants={textVariant()} className="text-center my-12 px-4">
        <h2 className={`${styles.sectionHeadText} text-center`}>
          PROJECT DELIVARABLES
        </h2>
        <p className="mt-2 text-gray-500">
          Explore the deliverables we created during the development process.
        </p>
      </motion.div>

      {/* Cards Grid Section */}
        {/* Deliverables Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {deliverables.map((item, index) => (
          <motion.div
            key={index}
            className="bg-indigo-50 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl hover:bg-indigo-100 transition-all duration-300"
            variants={fadeIn("up", "spring", index * 0.2, 1)}
          >
            <div className="p-6">
              {/* Card Header */}
              <h3 className="text-xl font-bold text-indigo-800 mb-3">
                {item.title}
              </h3>
              {/* Card Description */}
              <p className="text-gray-700 mb-4">{item.description}</p>
              {/* Links Section */}
              <div className="space-y-2">
                {item.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 underline block"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "idea");
