import gsap from "gsap";

const SaturnPos = (ref) => {
  gsap.to(ref.current.position, {
    x: -165,
    y: 7,
    z: 90,
    duration: 1,
  });
};
const SaturnRot = (ref) => {
  gsap.to(ref.current.rotation, {
    x: -0.25,
    y: -0.14,
    duration: 1,
  });
};

export { SaturnPos, SaturnRot };
