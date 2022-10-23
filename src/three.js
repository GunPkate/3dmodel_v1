import {} from "../src/three.module.js";

console.log(5);

//setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x34aeeb);
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

renderer.render(scene, camera);
