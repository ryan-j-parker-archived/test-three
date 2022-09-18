import * as THREE from './build/three.module.js';
// import '../styles/global.css';
import { OrbitControls } from './jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
// console.log(THREE);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 30;

const renderer = new THREE.WebGLRenderer({
    // canvas: document.querySelector('#bg'),
    antialias: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();
renderer.render(scene, camera);

// camera.getWorldPosition.setZ(30);


// function animate() {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
//     console.log(scene);
// }

// animate();


// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// // const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 32);
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);