import { AnnotationState, MarkerArea } from "@markerjs/react-native-markerjs";
import { useState } from "react";
import { View } from "react-native";

const targetImage = require("@/assets/images/sample-image.png");

export default function Index() {
  const [annotation, setAnnotation] = useState<AnnotationState | null>(null);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MarkerArea
        targetSrc={targetImage}
        annotation={annotation}
        onAnnotationChange={setAnnotation}
      />
    </View>
  );
}
