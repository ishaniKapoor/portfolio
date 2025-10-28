import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading, Container, Box } from "@chakra-ui/react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./ProjectsSection.css";
import { motion, useReducedMotion } from "framer-motion";
import "./LandingSection.css";

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
      title: "Personal Finance Manager",
      body: "Was tired of thinking about paying a service/app to track and maintain my finances! Built my own", 
      link: "https://github.com/ishaniKapoor/personalFinanceManager"
    }
  ];

  const shouldReduceMotion = useReducedMotion();

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
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: -8 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
        >
          <Heading as="h1" color="white" mb={10} className="name-gradient">
            Projects
          </Heading>
        </motion.div>

        <Box className="gallery-grid">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -6 }}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Card className={`gallery-card`}>
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
            </motion.div>
          ))}
        </Box>
      </Container>
    </FullScreenSection>
  );
};

export default ProjectsSection;