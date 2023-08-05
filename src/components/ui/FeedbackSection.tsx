import { Text } from "@mantine/core";
import FeedbackSectionCorousel from "./FeedbackSectionCorousel";

export function FeedbackSection() {
  return (
    <div id="feedback" className="feedbackSection">
      <Text className="section-text" mb={40} weight={700}>
        O'quvchilarimizning fikrlari
      </Text>
      <div className="corousel-wrapper">
        <FeedbackSectionCorousel />
      </div>
    </div>
  );
}
