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
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

//Box

const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
// boxGeometry
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xbbbbbb });
const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

scene.add(boxMesh);
camera.translateZ(+50);

function animate() {
  boxMesh.rotateX(0.08);
  renderer.render(scene, camera);
}
