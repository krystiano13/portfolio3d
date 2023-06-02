import gsap from "gsap";

const VenusPos = (ref) => {
  gsap.to(ref.current.position, {
    x: 2,
    y: 0.5,
    z: 40,
    duration: 1,
  });
};
const VenusRot = (ref) => {
  gsap.to(ref.current.rotation, {
    x: 0,
    y: -0.14,
    duration: 1,
  });
};

export { VenusPos, VenusRot };
