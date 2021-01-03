import React from "react";

import Section from "./sectionWrapper/sectionWrapper"
import Feedback from "./feedback/feedbackLogic/feedbackLogic";

function App() {
  return (
    <Section title="Leave feedback">
      <Feedback />
    </Section>
  );
}

export default App;
