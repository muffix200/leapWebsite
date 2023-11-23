import { Carousel } from "@mantine/carousel";
import { Box, Button, Flex, List, ThemeIcon, Text } from "@mantine/core";
import {
  IconArrowRight,
  IconCheck,
  // IconCircleCheck,
  // IconPoint,
  // IconSquareRoundedX,
  IconWriting,
  IconX,
} from "@tabler/icons-react";
import data from "../../utils/data/course_mock_data.json";

export function CourseSectionCorousel() {
  return (
    <div className="corousel-wrapper">
      <Carousel
        controlSize={40}
        loop={false}
        slideSize="33.333333%"
        slideGap="xl"
        align="start"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
        styles={{
          control: {
            "&[data-inactive]": {
              opacity: 0,
              cursor: "default",
            },
          },
        }}
      >
        {data.map((item, index) => {
          return (
            <Carousel.Slide key={index} className="slide-box">
              <Box
                sx={(theme) => ({
                  borderColor:
                    theme.colorScheme === "dark"
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(0,0,0,0.1)",
                })}
                className="slide-box-wrapper"
              >
                <Text
                  weight={600}
                  sx={(theme) => ({
                    textAlign: "center",
                    padding: "15px 0",
                    color: theme.colorScheme === "dark" ? "#fff" : "#000",
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor:
                      theme.colorScheme === "dark"
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(0,0,0,0.1)",
                  })}
                  size={"lg"}
                >
                  {item.name}
                </Text>
                <List>
                  {item.data.map((item, index) => {
                    return (
                      <List.Item
                        key={index}
                        sx={(theme) => ({
                          padding: "15px",
                          borderTopWidth: index !== 0 ? 1 : 0,
                          borderLeftWidth: 1,
                          borderRightWidth: 1,
                          borderBottomWidth: 0,
                          borderStyle: "solid",
                          borderColor:
                            theme.colorScheme === "dark"
                              ? "rgba(255,255,255,0.1)"
                              : "rgba(0,0,0,0.1)",
                        })}
                        icon={
                          <ThemeIcon
                            color={item.status ? "green" : "red"}
                            size={24}
                            radius="xl"
                          >
                            {item.status ? (
                              <IconCheck size="1rem" />
                            ) : (
                              <IconX size="1rem" />
                            )}
                          </ThemeIcon>
                        }
                      >
                        {item.title}

                        {/* {item.data && (
                          <div style={{ paddingTop: "5px" }}>
                            {item.data.map((item, index) => {
                              return (
                                <List.Item
                                  key={index}
                                  icon={<IconPoint size="1rem" />}
                                  sx={{ padding: "5px 0" }}
                                >
                                  {item.title}
                                </List.Item>
                              );
                            })}
                          </div>
                        )} */}
                      </List.Item>
                    );
                  })}
                </List>
                <Text
                  weight={600}
                  sx={(theme) => ({
                    textAlign: "center",
                    padding: "15px 0",
                    color: theme.colorScheme === "dark" ? "#fff" : "#000",
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor:
                      theme.colorScheme === "dark"
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(0,0,0,0.1)",
                  })}
                  size={"lg"}
                >
                  {item.price}
                </Text>
              </Box>
            </Carousel.Slide>
          );
        })}
      </Carousel>
      <Flex justify={"center"}>
        <Button
          onClick={() => {
            window.open("https://t.me/LeapSupport");
          }}
          variant="light"
          rightIcon={<IconArrowRight />}
          leftIcon={<IconWriting />}
          mt={30}
          size="md"
        >
          Kursga yozilish
        </Button>
      </Flex>
    </div>
  );
}
