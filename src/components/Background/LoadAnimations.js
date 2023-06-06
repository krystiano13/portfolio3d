import { MercuryPos, MercuryRot } from "./Animations/MercuryAnim";
import { defaultPos, defaultRot } from "./Animations/DefaultAnim";
import { VenusPos, VenusRot } from "./Animations/VenusAnim";
import { EarthPos, EarthRot } from "./Animations/EarthAnim";
import { MarsPos, MarsRot } from "./Animations/MarsAnim";
import { JupiterPos, JupiterRot } from "./Animations/JupiterAnim";
import { SaturnPos, SaturnRot } from "./Animations/SaturnAnim";

const LoadAnimations = (CameraRef, animState) => {
  if (CameraRef.current !== null) {
    switch (animState) {
      case 0:
        defaultPos(CameraRef);
        defaultRot(CameraRef);
        break;
      case 1:
        MercuryPos(CameraRef);
        MercuryRot(CameraRef);
        break;
      case 2:
        VenusPos(CameraRef);
        VenusRot(CameraRef);
        break;
      case 3 :
        EarthPos(CameraRef);
        EarthRot(CameraRef);
        break;
      case 4:
        MarsPos(CameraRef);
        MarsRot(CameraRef);
        break;
      case 5:
        JupiterPos(CameraRef);
        JupiterRot(CameraRef);
        break;
      case 6:
        SaturnPos(CameraRef);
        SaturnRot(CameraRef);
        break;
      default:
        break;
    }
  }
};

export { LoadAnimations };
