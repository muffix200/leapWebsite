import { Button, Flex, Text } from "@mantine/core";
import { IconArrowRight, IconListCheck } from "@tabler/icons-react";
export default function MainScreen() {
  return (
    <div id="main" className="mainScreen">
      <div className="mainScreenTitleWrapper">
        <Text className="mainScreen-text">
          Ingliz tilini jaydari o'zbek tilida o'rgatamiz
        </Text>
      </div>
      <Text className="mainScreen-subText">- Leap English Online Academy</Text>

      <Flex>
        <Button
          onClick={() => {
            window.document
              .getElementById("courses")
              ?.scrollIntoView({ block: "center" });
          }}
          leftIcon={<IconListCheck size={18} />}
          variant="gradient"
        >
          Kurslar
        </Button>

        <Button
          onClick={() => {
            window.open("https://t.me/LeapSupport");
          }}
          variant="gradient"
          rightIcon={<IconArrowRight size={18} />}
          ml={15}
        >
          Kursga yozilish
        </Button>
      </Flex>
    </div>
  );
}
