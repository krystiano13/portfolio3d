import { MercuryPos, MercuryRot } from "./Animations/MercuryAnim";
import { defaultPos, defaultRot } from "./Animations/DefaultAnim";
import { VenusPos, VenusRot } from "./Animations/VenusAnim";

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
    }
  }
};

export { LoadAnimations };
