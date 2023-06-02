import mercury from './Textures/mercury.jpg';
import venus from './Textures/venus.webp';
import earth from './Textures/earth.webp';
import mars from './Textures/mars.jpg';
import jupiter from './Textures/jupiter.jpg';
import uranus from './Textures/uranus.jpg';
import sun from './Textures/sun.webp';

export const planetList = [
  {
    name: "mercury",
    texture: mercury,
    scale: [1, 1, 1],
    position: [-5, 0, 0],
    rotationSpeed: 0.001,
  },
  {
    name: "venus",
    texture: venus,
    scale: [5, 5, 5],
    position: [10, 0, 30],
    rotationSpeed: 0.001,
  },
  {
    name: "earth",
    texture: earth,
    scale: [5, 5, 5],
    position: [40, 0, -15],
    rotationSpeed: 0.001,
  },
  {
    name: "mars",
    texture: mars,
    scale: [4, 4, 4],
    position: [-20, 0, -90],
    rotationSpeed: 0.001,
  },
  {
    name: "jupiter",
    texture: jupiter,
    scale: [10, 10, 10],
    position: [-125, 0, -50],
    rotationSpeed: 0.001,
  },
  {
    name: "uranus",
    texture: uranus,
    scale: [7, 7, 7],
    position: [-25, 0, 150],
    rotationSpeed: 0.001,
  },
  {
    name: "sun",
    texture: sun,
    scale: [20, 20, 20],
    position: [-40, 0, 0],
    rotationSpeed: 0,
  },
];