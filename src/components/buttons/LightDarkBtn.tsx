import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

function LightDarkButton() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <ActionIcon
      variant="transparent"
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? (
        <IconSun color="#fff" size="1.5rem" />
      ) : (
        <IconMoonStars color="#000" size="1.5rem" />
      )}
    </ActionIcon>
  );
}
export default LightDarkButton;
