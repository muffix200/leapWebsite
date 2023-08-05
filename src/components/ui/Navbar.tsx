import { Divider, Text, Flex, ActionIcon, Burger, Box } from "@mantine/core";
import LightDarkButton from "../buttons/LightDarkBtn";
import {
  IconBrandTelegram,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import MobileNavbar from "./MobileNavbar";
export default function Navbar() {
  const [opened, { close, toggle }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";

  const scrollToSection = (sectionName: string) => {
    window.document
      .getElementById(sectionName)
      ?.scrollIntoView({ block: "center" });
  };
  return (
    <>
      <div className="fakeNav"></div>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === "dark" ? "#09090B" : "#fff",
        })}
        className="navbar-wrapper"
      >
        <div className="navbar">
          <MobileNavbar close={close} opened={opened} />
          <Flex align={"center"}>
            <Text weight={700} fz="xl">
              Leap English
            </Text>
          </Flex>

          <Flex className="navbar-list" align={"center"} justify={"center"}>
            <Text
              onClick={() => scrollToSection("main")}
              className="navbar-list-text"
            >
              Asosiy
            </Text>
            <Text
              onClick={() => scrollToSection("courses")}
              className="navbar-list-text"
            >
              Kurslar
            </Text>
            <Text
              onClick={() => scrollToSection("feedback")}
              className="navbar-list-text"
            >
              Fikrlar
            </Text>
            <Text
              onClick={() => window.open("https://t.me/LeapSupport")}
              className="navbar-list-text"
            >
              Bog'lanish
            </Text>
          </Flex>
          <Flex
            className="navbar-desktop-icons"
            align={"center"}
            justify={"flex-end"}
          >
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
          <Flex
            className="mobile-desktop-icons"
            align={"center"}
            justify={"flex-end"}
          >
            <LightDarkButton />
            <Divider variant="solid" orientation="vertical" ml={10} mr={10} />
            <Burger
              size={20}
              opened={opened}
              onClick={toggle}
              aria-label={label}
            />
          </Flex>
        </div>
        <Divider />
      </Box>
    </>
  );
}
