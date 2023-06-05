import gsap from "gsap";

const JupiterPos = (ref) => {
  gsap.to(ref.current.position, {
    x: -109,
    y: 0.5,
    z: -23,
    duration: 1,
  });
};
const JupiterRot = (ref) => {
  gsap.to(ref.current.rotation, {
    x: 0,
    y: -0.14,
    duration: 1,
  });
};

export { JupiterPos, JupiterRot };
