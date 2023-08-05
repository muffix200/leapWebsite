import { ActionIcon, Divider, Drawer, Flex, Text } from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandYoutube,
} from "@tabler/icons-react";
import LightDarkButton from "../buttons/LightDarkBtn";

export default function MobileNavbar({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) {
  const scrollToSection = (sectionName: string) => {
    close();
    window.document
      .getElementById(sectionName)
      ?.scrollIntoView({ block: "center" });
  };

  return (
    <Drawer
      position="right"
      opened={opened}
      onClose={close}
      size="85%"
      overlayProps={{ opacity: 0.5, blur: 4 }}
      sx={(theme) => ({
        background: theme.colorScheme === "dark" ? "#09090B" : "#fff",
      })}
    >
      <Text onClick={() => scrollToSection("main")}>Asosiy</Text>
      <Divider mt={15} mb={15} />
      <Text onClick={() => scrollToSection("courses")}>Kurslar</Text>
      <Divider mt={15} mb={15} />
      <Text onClick={() => scrollToSection("feedback")}>Fikrlar</Text>
      <Divider mt={15} mb={15} />
      <Flex align={"center"} justify={"flex-start"}>
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
          mr={15}
        >
          <IconBrandInstagram size="1.4rem" />
        </ActionIcon>
        <Divider variant="solid" orientation="vertical" mr={15} />
        <LightDarkButton />
      </Flex>
    </Drawer>
  );
}
