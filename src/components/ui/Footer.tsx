import { Text, Flex, ActionIcon, Box } from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandYoutube,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <Box
      sx={(theme) => ({
        borderTopWidth: 1,
        borderTopStyle: "solid",
        borderTopColor:
          theme.colorScheme === "dark"
            ? "rgba(255,255,255,0.1)"
            : "rgba(0,0,0,0.1)",
      })}
    >
      <Flex
        className="footer-section"
        justify={"space-between"}
        align={"center"}
      >
        <Text size={"sm"}>© Leap English 2023</Text>

        <Flex align={"center"} justify={"flex-end"}>
          <ActionIcon
            onClick={() => {
              window.open("https://t.me/LeapEnglish");
            }}
            variant="transparent"
            mr={15}
          >
            <IconBrandTelegram size="1.4rem" />
          </ActionIcon>
          <ActionIcon
            onClick={() => {
              window.open("https://www.youtube.com/@LeapEnglish");
            }}
            variant="transparent"
            mr={15}
          >
            <IconBrandYoutube size="1.4rem" />
          </ActionIcon>
          <ActionIcon
            onClick={() => {
              window.open("https://www.instagram.com/leapenglish/");
            }}
            variant="transparent"
          >
            <IconBrandInstagram size="1.4rem" />
          </ActionIcon>
        </Flex>
      </Flex>
    </Box>
  );
}
