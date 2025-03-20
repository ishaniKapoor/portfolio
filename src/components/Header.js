import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: ishani_kaps@hotmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/ishaniKapoor",
  },
  {
    icon: faLinkedin,
    url: "http://www.linkedin.com/in/ishani-kapoor-571412178",
  },
];

const sections = [
  { id: "landing", label: "Home" },
  { id: "experience", label: "Experience" },
];

const Header = () => {
  const handleClick = (anchor) => (e) => {
    e.preventDefault();

    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      backgroundColor="#18181b"
      zIndex={1000}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={{ base: 4, md: 16 }}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Social Media Icons */}
          <nav>
            <HStack spacing={{ base: 3, md: 4 }}>
              {socials.map((social, index) => (
                <a key={index} href={social.url}>
                  <FontAwesomeIcon icon={social.icon} size="lg" />
                </a>
              ))}
            </HStack>
          </nav>

          {/* Navigation Links */}
          <nav>
            <HStack spacing={{ base: 4, md: 8 }}>
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={handleClick(section.id)}
                  style={{ cursor: "pointer", textDecoration: "none", color: "white" }}
                >
                  {section.label}
                </a>
              ))}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
