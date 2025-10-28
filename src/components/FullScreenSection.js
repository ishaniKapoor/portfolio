import * as React from "react";
import { VStack } from "@chakra-ui/react";
import "./LandingSection.css";

// FullScreenSection ensures the background covers the full viewport width/height
// while keeping children constrained to a centered max width. It also renders
// decorative blobs that span the full area so each section looks cohesive.
const FullScreenSection = ({ children, isDarkBackground, background, backgroundColor, ...boxProps }) => {
  const bg = background || backgroundColor || null;

  return (
    <VStack
      background={bg}
      color={isDarkBackground ? "white" : "black"}
      width="100vw"
      minHeight="100vh"
      position="relative"
      align="center"
      {...boxProps}
    >
      {/* decorative animated blobs behind content for every section */}
      <div className="landing-blobs" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <VStack className="fullscreen-inner" maxW="1280px" width="100%" minHeight="100vh">
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
