import { Carousel } from "@mantine/carousel";
import { Box, Button, Flex } from "@mantine/core";
import { IconBrandTelegram } from "@tabler/icons-react";
export function CourseSectionCorousel() {
  return (
    <div className="corousel-wrapper">
      <Carousel
        withIndicators
        height={450}
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
      <Flex justify={"center"}>
        <Button leftIcon={<IconBrandTelegram />} mt={20} size="md">
          Kursga yozilish
        </Button>
      </Flex>
    </div>
  );
}
