import { useState } from "react";
import { Carousel } from "@mantine/carousel";
import { Box, Text, Button, Modal, useMantineTheme } from "@mantine/core";
import data from "../../utils/data/feedback_mock_data.json";
import { IconEye } from "@tabler/icons-react";
export default function FeedbackSectionCorousel() {
  const [showModal, setShowModal] = useState({
    visible: false,
    user: "",
    feedBack: "",
  });
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        sx={{ fontFamily: "Rubik" }}
        centered
        overlayProps={{
          color:
            theme.colorScheme === "dark"
              ? theme.colors.gray[2]
              : theme.colors.dark[9],
          opacity: 0.55,
          blur: 5,
        }}
        opened={showModal.visible}
        onClose={() => {
          setShowModal({ visible: false, user: "", feedBack: "" });
        }}
        title={showModal.user}
      >
        <Text>{showModal.feedBack}</Text>
      </Modal>
      <Carousel
        withControls={false}
        withIndicators={false}
        slideSize="33.333333%"
        slideGap="md"
        align="start"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
      >
        {data.map((item, index) => {
          return (
            <Carousel.Slide key={index} className="slide-box">
              <Box
                className="slide-box-wrapper"
                sx={(theme) => ({
                  borderColor:
                    theme.colorScheme === "dark"
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(0,0,0,0.1)",
                  borderWidth: 1,
                  padding: "15px",
                  borderStyle: "solid",
                })}
              >
                <Text
                  sx={() => ({
                    borderBottomWidth: 1,
                    borderBottomStyle: "solid",
                    paddingBottom: 10,
                    borderBottomColor:
                      theme.colorScheme === "dark"
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(0,0,0,0.1)",
                  })}
                  mb={10}
                  align="center"
                >
                  {item.name}
                </Text>
                <Text mb={15} lineClamp={5}>
                  {item.feedback}
                </Text>
                <Button
                  onClick={() => {
                    setShowModal({
                      visible: true,
                      user: item.name,
                      feedBack: item.feedback,
                    });
                  }}
                  leftIcon={<IconEye size={18} />}
                  variant="light"
                  fullWidth
                >
                  To'liq o'qish
                </Button>
              </Box>
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </>
  );
}
