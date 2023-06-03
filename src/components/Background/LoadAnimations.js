import { MercuryPos, MercuryRot } from "./Animations/MercuryAnim";
import { defaultPos, defaultRot } from "./Animations/DefaultAnim";
import { VenusPos, VenusRot } from "./Animations/VenusAnim";
import { EarthPos, EarthRot } from "./Animations/EarthAnim";

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
    }
  }
};

export { LoadAnimations };
