import { AspectRatio, Grid, Image, Text } from "@mantine/core";
import { CourseSectionCorousel } from "./CourseSectionCorousel";
import zoomImage from "../../assets/img/register.png";
export default function CourseSection() {
  return (
    <div className="courseSection">
      <Text size={30} mb={40} weight={700}>
        Kurslarimiz bilan tanishing
      </Text>
      <AspectRatio ratio={16 / 9}>
        <iframe
          className="frame"
          src="https://www.youtube.com/embed/bjmzxYopxkU?rel=0"
          title="Leap Hub nima"
          allowFullScreen
        />
      </AspectRatio>

      <Text size={30} mb={40} mt={40} weight={700}>
        Tariflar
      </Text>
      <CourseSectionCorousel />
      <Text size={30} mb={50} mt={50} weight={700}>
        Kursga yozilish
      </Text>
      <Grid>
        <Grid.Col xs={12} lg={6}>
          <Image src={zoomImage} fit="contain" />
        </Grid.Col>
        <Grid.Col xs={12} lg={6}></Grid.Col>
      </Grid>
    </div>
  );
}
