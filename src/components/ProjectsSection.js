import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading, Container, Box } from "@chakra-ui/react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./ProjectsSection.css";

const ProjectsSection = () => {
  const projects = [
    {
      title: "GM HACKATHON",
      body: "Designed a Bluetooth Low Energy solution for automotive use. Won the GM Innovation Award."
    },
    {
      title: "Video Game in Unity",
      body: "Built a 2D puzzle platformer in C# using Unity. Managed animations, logic, and game design.",
      link: "https://kapoorihuskyneuedu.itch.io/capstone"
    },
    {
      title: "REPHairations Website",
      body: "A company in Boston needed help making their website, so a friend and I worked together to build it in JS, HTML, and CSS",
      link: "https://github.com/ishaniKapoor/RepHairations"
    },
    {
      title: "Reserve a table",
      body: "Developed a reserve a table functionality from Figma design to implementation as part of my Front-end Development course.", 
      link: "https://github.com/ishaniKapoor/little-lemon-reserve-a-table"
    }
  ];

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      background="linear-gradient(135deg, rgb(17, 7, 57) 100%, rgb(16, 32, 54) 0%)"
      textAlign="center"
      width="100vw"
      minH="100vh"
      px={{ base: 4, md: 8, lg: 16 }}
      p={8}
      id="projects-section"
    >
      <Container maxW="container.xl" centerContent>
        <Heading as="h1" color="white" mb={10}>
          Projects
        </Heading>
        <Box className="gallery-grid">
          {projects.map((project, i) => (
            <Card
              key={i}
              className={`gallery-card`}
            >
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.body}</Card.Text>
                {project.link && (
                  <Button
                    variant="primary"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </Button>
                )}
              </Card.Body>
            </Card>
          ))}
        </Box>
      </Container>
    </FullScreenSection>
  );
};

export default ProjectsSection;