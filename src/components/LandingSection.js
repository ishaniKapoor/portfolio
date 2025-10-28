"use strict";

import React, { useEffect, useState } from "react";
import { Avatar, Heading, Text, Box, Container, HStack, Button } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";
import "./LandingSection.css";
import { FaBook, FaPlane, FaBriefcase, FaMountain } from "react-icons/fa";
import myPdf from "./../images/IshaniKapoorResume.pdf";
import FullScreenSection from "./FullScreenSection";

const name = "Ishani Kapoor";
const roles = ["Full Stack Developer", "React Developer", "UI/UX Enthusiast"];

const MotionIcon = motion(Box);

const iconVariants = {
  hover: { scale: 1.2, rotate: 5, transition: { duration: 0.3 } },
};

const LandingSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const [displayText, setDisplayText] = useState(roles[0]);

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayText(roles[0]);
      return;
    }

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeout;

    const tick = () => {
      const current = roles[roleIndex];
      if (!deleting) {
        charIndex += 1;
        setDisplayText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timeout = setTimeout(tick, 1200);
          return;
        }
      } else {
        charIndex -= 1;
        setDisplayText(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      timeout = setTimeout(tick, deleting ? 60 : 120);
    };

    timeout = setTimeout(tick, 500);
    return () => clearTimeout(timeout);
  }, [shouldReduceMotion]);

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      background="linear-gradient(135deg,rgb(17, 7, 57) 100%,rgb(16, 32, 54) 0%)"
      textAlign="center"
      width="100vw"
      minH="75vh"
      px={{ base: 4, md: 8, lg: 16 }}
      id="landing-section"
    >
      <Container maxW="container.md" centerContent>
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.92 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <motion.div whileHover={shouldReduceMotion ? {} : { rotate: -4, scale: 1.02 }} style={{ display: "inline-block" }}>
            <Box className="landing-avatar-wrap">
              <Avatar
                name="Ishani Kapoor"
                src={require("./../images/profile-pic.jpg")}
                mb={4}
                boxShadow="lg"
                borderRadius="full"
                alt="Ishani Kapoor profile"
                className="landing-avatar"
              />
            </Box>
          </motion.div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <Heading
            as="h1"
            fontSize={{ base: "2.2rem", md: "3rem", lg: "4rem" }}
            color="white"
            fontFamily="serif"
            mb={2}
            className="name-gradient"
          >
            {name}
          </Heading>
          <Text fontSize={{ base: "1rem", md: "1.2rem" }} color="white" fontFamily="serif" className="typing-line">
            {displayText}
            <span className="typing-cursor" aria-hidden="true">|</span>
          </Text>

          {/* Skills row */}
          <Box mt={4} className="skills-row">
            {[
              { name: "React", pct: 90 },
              { name: "JavaScript", pct: 88 },
              { name: "CSS", pct: 80 },
              { name: "TypeScript", pct: 60 },
            ].map((skill) => (
              <Box key={skill.name} className="skill">
                <Text fontSize="sm" color="#d1e7df" mb={1} textAlign="center">{skill.name}</Text>
                <div className="skill-bar-outer" aria-hidden>
                  <motion.div
                    className="skill-bar-inner"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.pct}%` }}
                    transition={{ duration: 1.2 }}
                  />
                </div>
              </Box>
            ))}
          </Box>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
        >
          <HStack spacing={6} mt={4} color="white">
            <Box>
              <MotionIcon whileHover="hover" variants={iconVariants}>
                <FaBook size={24} />
              </MotionIcon>
              <Text mt={2}>Reading</Text>
            </Box>

            <Box>
              <MotionIcon whileHover="hover" variants={iconVariants}>
                <FaPlane size={24} />
              </MotionIcon>
              <Text mt={2}>Traveling</Text>
            </Box>

            <Box>
              <MotionIcon whileHover="hover" variants={iconVariants}>
                <FaMountain size={24} />
              </MotionIcon>
              <Text mt={2}>Bouldering</Text>
            </Box>

            <Box>
              <MotionIcon whileHover="hover" variants={iconVariants}>
                <FaBriefcase size={24} />
              </MotionIcon>
              <Text mt={2}>Frontend Development</Text>
            </Box>
          </HStack>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
        >
          <Box mt={6} display="flex" gap={4} justifyContent="center">
            <Button
              as="a"
              href={myPdf}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              colorScheme="teal"
              bgGradient="linear(to-r, teal.400, teal.600)"
              _hover={{ transform: "translateY(-3px)", boxShadow: "lg" }}
            >
              📄 View Resume
            </Button>
          </Box>
        </motion.div>
      </Container>
    </FullScreenSection>
  );
};

export default LandingSection;
