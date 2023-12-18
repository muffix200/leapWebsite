import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Divider,
  Paper,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import Navbar from "./components/ui/Navbar";
import MainScreen from "./components/ui/MainScreen";
import CourseSection from "./components/ui/CourseSection";
import { FeedbackSection } from "./components/ui/FeedbackSection";
import Footer from "./components/ui/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
          fontFamily: "Rubik",
          components: {
            Text: {
              defaultProps: (theme) => ({
                sx: {
                  color: theme.colorScheme === "dark" ? "#fff" : "#000",
                },
              }),
            },
            ActionIcon: {
              defaultProps: (theme) => ({
                sx: {
                  color: theme.colorScheme === "dark" ? "#fff" : "#000",
                },
              }),
            },
          },
        }}
      >
        <Paper
          sx={(theme) => ({
            borderRadius: 0,
            width: "100%",
            minHeight: "100%",
            backgroundColor: theme.colorScheme === "dark" ? "#09090B" : "#fff",
          })}
        >
          <Navbar />
          <MainScreen />
          <Divider labelPosition="center" />
          <CourseSection />
          <FeedbackSection />
          <Footer />
          <SpeedInsights />
        </Paper>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
