import gsap from "gsap";

const MarsPos = (ref) => {
  gsap.to(ref.current.position, {
    x: -35,
    y: 0.5,
    z: -75,
    duration: 1,
  });
};
const MarsRot = (ref) => {
  gsap.to(ref.current.rotation, {
    x: 0,
    y: -0.14,
    duration: 1,
  });
};

export { MarsPos, MarsRot };
