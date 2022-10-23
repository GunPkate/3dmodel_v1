import {} from "../src/three.module.js";

console.log(5);

//setup
const scene = new THREE.Scene(); //all
scene.background = new THREE.Color(0x34aeeb); //bg
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
); //view

const renderer = new THREE.WebGLRenderer(); //show
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement); //add

//Light
const ambientLight = new THREE.AmbientLight(0xdddddd);
const directionalLight = new THREE.DirectionalLight(0xffffff);
// ambientLight.add(directionalLight);
scene.add(ambientLight);

const texture = new THREE.TextureLoader();

//Ground
const groundTexture = texture.load("src/texture/grasslight-big.jpg");
groundTexture.repeat.set(1000, 1000);
groundTexture.wrapS = THREE.RepeatWrapping;
groundTexture.wrapT = THREE.RepeatWrapping;
groundTexture.encoding = THREE.sRGBEncoding;

const groundGeometry = new THREE.PlaneGeometry(15000, 15000);
const groundMaterial = new THREE.MeshPhongMaterial({ map: groundTexture });
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
groundMesh.rotateX(-Math.PI / 2);

scene.add(groundMesh);
//Box
const boxTexture = texture.load("src/texture/crate.gif");
const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
// boxGeometry
// const boxMaterial = new THREE.MeshPhongMaterial({ color: 0xaff000 });
const boxMaterial = new THREE.MeshPhongMaterial({ map: boxTexture });
// const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xbbbbbb }); //no light FX
const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
boxMesh.translateY(15);

scene.add(boxMesh);
//Cone
const coneTexture = texture.load("src/texture/Water_1_M_Normal.jpg");
const coneGeometry = new THREE.ConeGeometry(5, 20, 20, 40);
const coneMaterial = new THREE.MeshPhongMaterial({ map: coneTexture });
const coneMesh = new THREE.Mesh(coneGeometry, coneMaterial);
coneMesh.translateX(20).translateY(15);
scene.add(coneMesh);

camera.translateZ(+50).translateY(+10);

function animate() {
  boxMesh.rotateY(0.08);
  coneMesh.rotateY(0.06);
  coneMesh.rotateZ(0.02);
  renderer.render(scene, camera);
}
