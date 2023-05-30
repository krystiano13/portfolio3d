import gsap from 'gsap';

const MercuryPos = (ref) => {
    gsap.to(ref.current.position, {
      x: -2.25,
      y: 0.5,
      z: 4,
      duration: 1,
    }); 
};
const MercuryRot = (ref) => {
    gsap.to(ref.current.rotation, {
        x : 0,
        y : -0.14,
        duration : 1
    })
};

export { MercuryPos, MercuryRot };