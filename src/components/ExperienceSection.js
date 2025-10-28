import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading, VStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from "@chakra-ui/react";
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
      <Heading as="h1" id="experience-section" color="white" mb={6} className="name-gradient">
        Experience
      </Heading>

      <Accordion allowMultiple width="100%" maxW="840px">
        {experiences.map((exp, idx) => (
          <AccordionItem key={exp.title} border="none" mb={4}>
            <h3>
              <AccordionButton _expanded={{ bg: "rgba(255,255,255,0.02)" }} borderRadius="md">
                <Box flex="1" textAlign="left" color="white" fontWeight="600">
                  {exp.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h3>
            <AccordionPanel pb={4}>
              <CardExperience {...exp} />
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </FullScreenSection>
  );
};

export default ExperienceSection;
