import { ActionIcon, Badge, Button, Flex, Text } from "@mantine/core";
import { IconArrowNarrowRight } from "@tabler/icons-react";
export default function MainScreen() {
  return (
    <div className="mainScreen">
      <Badge
        rightSection={
          <ActionIcon>
            <IconArrowNarrowRight />
          </ActionIcon>
        }
        pl={5}
        pr={5}
        radius="sm"
        variant="dot"
        color="green"
        size="lg"
        mb={10}
        sx={{
          fontFamily: "Rubik",
        }}
      >
        Bepul sinov darslariga yozilish
      </Badge>
      <div className="mainScreenTitleWrapper">
        <Text className="mainScreen-text">
          Ingliz tilini jaydari o'zbek tilida o'rgatamiz
        </Text>
      </div>
      <Text className="mainScreen-subText">- Leap English Online Academy</Text>

      <Flex>
        <Button
          sx={{
            background: "#11B86D",
            "&:hover": {
              backgroundColor: "#11B86D",
              opacity: 0.8,
            },
          }}
          mr={15}
        >
          Kurs haqida
        </Button>
        <Button>Kurslar</Button>
      </Flex>
    </div>
  );
}
