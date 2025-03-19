import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const experiences = [
  {
    title: "Full Stack Developer",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
  },
  {
    title: "Software Developer",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
  },
];

const ExperienceSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="experience-section">
        Experience
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {experiences.map((experience) => (
          <Card
            key={experience.title}
            title={experience.title}
            description={experience.description}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ExperienceSection;
