import * as React from "react";
import { VStack } from "@chakra-ui/react";

// FullScreenSection ensures the background covers the full viewport width/height
// while keeping children constrained to a centered max width. It also sets
// position: relative so absolutely positioned decorations placed inside
// children (like background blobs) can be positioned relative to this area.
const FullScreenSection = ({ children, isDarkBackground, background, backgroundColor, ...boxProps }) => {
  const bg = background || backgroundColor || null;

  return (
    <VStack
      background={bg}
      color={isDarkBackground ? "white" : "black"}
      width="100vw"
      minHeight="100vh"
      position="relative"
      align="stretch"
    >
      <VStack maxW="1280px" width="100%" minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
