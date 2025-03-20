import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, VStack } from "@chakra-ui/react";
import Card from "./Card";

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
      <Heading as="h1" id="experience-section" color="white" mb={6}>
        Experience
      </Heading>
      <VStack spacing={6} width="100%" maxW="800px">
        {experiences.map((experience) => (
          <Card key={experience.title} {...experience} />
        ))}
      </VStack>
    </FullScreenSection>
  );
};

export default ExperienceSection;
