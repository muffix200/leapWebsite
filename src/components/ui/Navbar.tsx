import { Divider, Text, Flex, ActionIcon } from "@mantine/core";
import LightDarkButton from "../buttons/LightDarkBtn";
import {
  IconBrandTelegram,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <Flex align={"center"}>
          <Text weight={700} fz="xl">
            Leap English
          </Text>
        </Flex>

        <Flex align={"center"} justify={"center"}>
          <Text className="navbar-list-text">Asosiy</Text>
          <Text className="navbar-list-text">Kurslar</Text>
          <Text className="navbar-list-text">Test</Text>
          <Text className="navbar-list-text">Fikrlar</Text>
          <Text className="navbar-list-text">Bog'lanish</Text>
        </Flex>
        <Flex align={"center"} justify={"flex-end"}>
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
      </div>
      <Divider />
    </div>
  );
}
