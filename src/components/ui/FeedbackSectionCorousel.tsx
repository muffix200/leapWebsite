import { Carousel } from "@mantine/carousel";
import { Box, Flex } from "@mantine/core";

export default function FeedbackSectionCorousel() {
  return (
    <Carousel
      withIndicators
      height={250}
      loop
      slideSize="33.333333%"
      slideGap="md"
      align="start"
      breakpoints={[
        { maxWidth: "md", slideSize: "50%" },
        { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
      ]}
    >
      <Carousel.Slide className="slide-box">
        <Box className="slide-box-wrapper">
          <Flex></Flex>
        </Box>
      </Carousel.Slide>
      <Carousel.Slide className="slide-box">
        <Box className="slide-box-wrapper"></Box>
      </Carousel.Slide>
      <Carousel.Slide className="slide-box">
        <Box className="slide-box-wrapper"></Box>
      </Carousel.Slide>
      <Carousel.Slide className="slide-box">
        <Box className="slide-box-wrapper"></Box>
      </Carousel.Slide>
    </Carousel>
  );
}
