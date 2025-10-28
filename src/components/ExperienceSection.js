import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading, VStack } from "@chakra-ui/react";
import CardExperience from "./CardExperience";
import { motion, useReducedMotion } from "framer-motion";
import "./LandingSection.css";

const experiences = [
  {
    title: "Full Stack Developer",
    description: "Building UI components for GM's Over-the-Air platform. Collaborating with clients and engineers in an agile environment.",
    languages: ["Angular", "HTML", "CSS", "Java", "Azure"],
  },
  {
    title: "Software Developer",
    description: "Developed supplier content display components and optimized UI for better accessibility.",
    languages: ["Angular", "HTML", "CSS", "Java"],
  },
];

const ExperienceSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      background="linear-gradient(135deg,rgb(17, 7, 57) 100%,rgb(16, 32, 54) 0%)"
      textAlign="center"
      width="100vw"
      minH="100vh"
      px={{ base: 4, md: 8, lg: 16 }} 
      p={8}
    >
      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0, y: -8 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Heading as="h1" id="experience-section" color="white" mb={6} className="name-gradient">
          Experience
        </Heading>
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.12 }}
      >
        <VStack spacing={6} width="100%" maxW="800px">
          {experiences.map((experience) => (
            <CardExperience key={experience.title} {...experience} />
          ))}
        </VStack>
      </motion.div>
    </FullScreenSection>
  );
};

export default ExperienceSection;
