import { AspectRatio, Text } from "@mantine/core";
import { CourseSectionCorousel } from "./CourseSectionCorousel";

export default function CourseSection() {
  return (
    <div className="courseSection">
      <Text className="section-text" mb={40} weight={700}>
        Kurslarimiz bilan tanishing
      </Text>
      <AspectRatio ratio={16 / 9}>
        <iframe
          className="frame"
          src="https://www.youtube.com/embed/VFdohGzgDuo?rel=0"
          title="Leap Hub nima"
          allowFullScreen
        />
      </AspectRatio>

      <Text id="courses" className="section-text" mb={40} mt={40} weight={700}>
        Tariflar
      </Text>
      <CourseSectionCorousel />
    </div>
  );
}
