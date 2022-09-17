import * as THREE from './build/three.module.js';
// import './styles/global.css';

const scene = new THREE.Scene();
// console.log(THREE);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.getWorldPosition.setZ(30);
renderer.render(scene, camera);


// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// // const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 32);
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();