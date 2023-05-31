import gsap from "gsap";

const defaultRot = (ref) => {
  gsap.to(ref.current.rotation, {
    x: -0.28,
    y: -0.1,
    z: 0,
    duration: 1,
  });
};

const defaultPos = (ref) => {
  gsap.to(ref.current.position, {
    x: 0,
    y: 35,
    z: 200,
    duration: 1,
  });
};

export { defaultRot, defaultPos };
