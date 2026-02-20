import "./index.css";
import { Composition } from "remotion";
import { MyComposition } from "./Composition";
import { VeraBeautyShowcase } from "./compositions/VeraBeautyShowcase";
import { WIDTH, HEIGHT, FPS, getTotalDurationInFrames } from "./lib/constants";
import { getTotalDurationInFrames as getTotalDurationVera } from "./lib/constants-vera";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="GLC-Showcase"
        component={MyComposition}
        durationInFrames={getTotalDurationInFrames()}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
      <Composition
        id="VeraBeautyShowcase"
        component={VeraBeautyShowcase}
        durationInFrames={getTotalDurationVera()}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
    </>
  );
};
