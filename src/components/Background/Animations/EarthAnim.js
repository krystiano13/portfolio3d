import gsap from "gsap";

const EarthPos = (ref) => {
  gsap.to(ref.current.position, {
    x: -25,
    y: 1,
    z: 95,
    duration: 1,
  });
};
const EarthRot = (ref) => {
  gsap.to(ref.current.rotation, {
    x: 0,
    y: 0.3,
    duration: 1,
  });
};

export { EarthPos, EarthRot };
