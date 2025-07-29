import {
  AnnotationState,
  MarkerArea,
  MarkerAreaHandle,
} from "@markerjs/react-native-markerjs";
import { useRef, useState } from "react";
import { Button, View } from "react-native";

const targetImage = require("@/assets/images/sample-image.png");

export default function Index() {
  const [annotation, setAnnotation] = useState<AnnotationState | null>(null);

  const markerAreaRef = useRef<MarkerAreaHandle>(null);

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
        ref={markerAreaRef}
        onAnnotationChange={setAnnotation}
      />

      <View style={{ flex: 1 / 4 }}>
        <Button
          title="Add arrow"
          onPress={() => {
            markerAreaRef.current?.createMarker("ArrowMarker");
          }}
        />
      </View>
    </View>
  );
}
