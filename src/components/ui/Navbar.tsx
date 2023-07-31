import {
  Divider,
  Text,
  Flex,
  ActionIcon,
  Burger,
  Drawer,
  Box,
} from "@mantine/core";
import LightDarkButton from "../buttons/LightDarkBtn";
import {
  IconBrandTelegram,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
export default function Navbar() {
  const [opened, { close, toggle }] = useDisclosure(false);

  const label = opened ? "Close navigation" : "Open navigation";
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
          <Drawer
            position="right"
            opened={opened}
            onClose={close}
            size="85%"
            overlayProps={{ opacity: 0.5, blur: 4 }}
            sx={(theme) => ({
              background: theme.colorScheme === "dark" ? "#09090B" : "#fff",
            })}
          ></Drawer>

          <Flex align={"center"}>
            <Text weight={700} fz="xl">
              Leap English
            </Text>
          </Flex>

          <Flex className="navbar-list" align={"center"} justify={"center"}>
            <Text className="navbar-list-text">Asosiy</Text>
            <Text className="navbar-list-text">Kurslar</Text>
            <Text className="navbar-list-text">Test</Text>
            <Text className="navbar-list-text">Fikrlar</Text>
            <Text className="navbar-list-text">Bog'lanish</Text>
          </Flex>
          <Flex
            className="navbar-desktop-icons"
            align={"center"}
            justify={"flex-end"}
          >
            <ActionIcon variant="transparent" mr={15}>
              <IconBrandTelegram size="1.4rem" />
            </ActionIcon>
            <ActionIcon variant="transparent" mr={15}>
              <IconBrandYoutube size="1.4rem" />
            </ActionIcon>
            <ActionIcon variant="transparent" mr={15}>
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
