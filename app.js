/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import * as THREE from 'three';
// import '../styles/global.css';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { OrbitControls } from './jsm/controls/OrbitControls.js';
// import gsap from './minified/gsap.min.js';


// import * as dat from 'https://cdn.jsdelivr.net/npm/dat.gui@0.7.9/build/dat.gui.module.js';

// import * as dat from 'https://unpkg.com/dat.gui@0.7.7/build/dat.gui.module.js';


// console.log(dat);


//                                     GUI
// const gui = new GUI({
//     closed: true,
//     width: 300,
// });
// gui.open();



// const params = {
//     minScale: 10,
//     maxScale: 20,
//     rotate: true,
// }
// console.log(gui);
// gui.add(params, 'minScale', 1, 30);
// gui.add(params, 'maxScale', 1, 30);
// gui.add(params, 'rotate');
// gui.add(params, 'clear');


const scene = new THREE.Scene();

// scene.add(gui);
const camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
);
camera.position.z = 20;
camera.position.y = 10;


const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    antialias: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const loadingManager = new THREE.LoadingManager();
loadingManager.onStart = () => {
    console.log('onStart');
};
loadingManager.onLoaded = () => {
    console.log('onLoaded');
};
loadingManager.onProgress = () => {
    console.log('onProgress');
};
loadingManager.onError = () => {
    console.log('onError');
};

const textureLoader = new THREE.TextureLoader(loadingManager);

const stars = textureLoader.load('./assets/stars.jpg');
const ice = textureLoader.load('./assets/ice-texture.jpg');
const shiny = textureLoader.load('./assets/shiny-texture.jpg');
const paint = textureLoader.load('./assets/paint-texture.jpg');
const fireL = textureLoader.load('./assets/fire-lowq.jpg');
const fireM = textureLoader.load('./assets/fire-medq.jpg');
const darkSkies = textureLoader.load('../assets/dark-skies.jpg');
const earthTexture = textureLoader.load('./assets/earth.jpg');
// const moonTexture = textureLoader.load('./assets/moon.jpg');
const mercuryColor = textureLoader.load('./assets/mercury-color.jpg');
const mercuryGray = textureLoader.load('./assets/mercury-grayscale.jpg');
const clouds = textureLoader.load('./assets/earth-clouds.jpg');

const sunTexture = textureLoader.load('./assets/planets/sun.jpg');
const marsTexture = textureLoader.load('./assets/planets/mars.jpg');
const mercuryTexture = textureLoader.load('./assets/planets/mercury.jpg');
const moonTexture = textureLoader.load('./assets/planets/moon.jpg');
const neptuneTexture = textureLoader.load('./assets/planets/neptune.jpg');
const saturnTexture = textureLoader.load('./assets/planets/saturn.jpg');
const saturnRingsTexture = textureLoader.load('./assets/planets/saturn-ring-alpha.jpg');
const uranusTexture = textureLoader.load('./assets/planets/uranus.jpg');
const venusSurfaceTexture = textureLoader.load('./assets/planets/venus-surface.jpg');
const venusAtmoTexture = textureLoader.load('./assets/planets/venus-atmosphere.jpg');
const jupiterTexture = textureLoader.load('./assets/planets/jupiter.jpg');


const shinyTexture = textureLoader.load('./assets/shiny.png');

const marble = new THREE.Mesh(
    new THREE.SphereGeometry(2, 100, 100),
    new THREE.MeshMatcapMaterial({
        matcap: shinyTexture,
    }),
);
marble.position.set(0, 6, -24);
scene.add(marble);

scene.background = textureLoader.load('../assets/stars.jpg');








const bulbGeometry = new THREE.SphereGeometry(0, 16, 8);
const bulbLight = new THREE.PointLight(0xffee88, 4, 200, 20);
const bulbMat = new THREE.MeshStandardMaterial({
    emissive: 0xffffee,
    emissiveIntensity: 1,
    color: 0x000000,
});
bulbLight.add(new THREE.Mesh(bulbGeometry, bulbMat));
bulbLight.position.set(0, 2, 0);
// bulbLight.castShadow = true;
bulbLight.castShadow = false;
scene.add(bulbLight);

const bulbGeometry2 = new THREE.SphereGeometry(0, 16, 8);
const bulbLight2 = new THREE.PointLight(0xffee88, 4, 100, 2);
const bulbMat2 = new THREE.MeshStandardMaterial({
    emissive: 0xffffee,
    emissiveIntensity: 1,
    color: 0x000000,
});
bulbLight2.add(new THREE.Mesh(bulbGeometry2, bulbMat2));
bulbLight2.position.set(0, -20, 0);
// bulbLight2.castShadow = true;
bulbLight.castShadow = false;
scene.add(bulbLight2);

// const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
// const material = new THREE.MeshBasicMaterial({ map: fireM, normalMap: fireM });
// const torus = new THREE.Mesh(geometry, material);
// torus.position.set(35, -25, -60);

// scene.add(torus);

// const sphereGeo = new THREE.SphereGeometry(6.8, 20, 20);
// const sphereMat = new THREE.MeshBasicMaterial({
//     map: ice,
//     normalMap: ice,

// });
// const sphere = new THREE.Mesh(sphereGeo, sphereMat);
// sphere.position.set(35, -25, -60);
// scene.add(sphere);

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();
renderer.render(scene, camera);

// camera.getWorldPosition.setZ(30);


const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

var backgroundBox = new THREE.Mesh(
    new THREE.BoxGeometry(400, 400, 400),
    new THREE.MeshStandardMaterial({
        map: darkSkies,
        side: THREE.DoubleSide,
        flatShading: THREE.FlatShading
    })
);
scene.add(backgroundBox);


//                                              AXES HELPER
// const axesHelper = new THREE.AxesHelper();
// scene.add(axesHelper);




// camera.lookAt(torus.position);

// const group = new THREE.Group();
// scene.add(group);

// const cube1 = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({
//         map: stars,
//     }),
// );

// group.add(cube1);

// const cube2 = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({
//         map: stars,
//     }),
// );
// cube2.position.x = -2;
// group.add(cube2);


//                                                             ADD STARS FUNCTION
// function addStar() {
//     const geometry = new THREE.SphereGeometry(0.25, 24, 24);
//     const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
//     const star = new THREE.Mesh(geometry, material);

//     const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(200));

//     star.position.set(x, y, z);
//     scene.add(star);
// }
// Array(400).fill().forEach(addStar);


// const shinySun = new THREE.LightwaveObject()

const newGeo = new THREE.BufferGeometry();
const count = 50;
const positionsArray = new Float32Array(count * 3 * 3);

for (let i = 0; i < positionsArray.length; i++) {
    positionsArray[i] = Math.random() - 0.5 * 4;
}

const newMat = new THREE.PointsMaterial({
    color: 0xff00cc,
    wireframe: true,
});

const positionsAttribute = new THREE.BufferAttribute(positionsArray, 1);

newGeo.setAttribute('position', positionsAttribute);

const newMesh = new THREE.Mesh(newGeo, newMat);
scene.add(newMesh);

const earth = new THREE.Mesh(
    new THREE.SphereGeometry(1, 40, 40),
    new THREE.MeshPhongMaterial({
        map: earthTexture,
        clearcoat: 1,
        reflectivity: 1,
        // emissive: 0xffffff,
    }),
);

const earthClouds = new THREE.Mesh(
    new THREE.SphereGeometry(1.02, 40, 40),
    new THREE.MeshPhongMaterial({
        map: clouds,
        transparent: true,
        color: 0xffffff,
        opacity: 0.35,
        // emissive: 0xffffff,
    }),
);

const moon = new THREE.Mesh(
    new THREE.SphereGeometry(0.25, 20, 20),
    new THREE.MeshPhongMaterial({
        map: moonTexture,
        clearcoat: 1,
        reflectivity: 0.5,
    })
);
moon.position.x = 3.84;

earth.add(earthClouds, moon);


const mercury = new THREE.Mesh(
    new THREE.SphereGeometry(0.15, 20, 20),
    new THREE.MeshPhongMaterial({
        map: mercuryColor,
        normalMap: mercuryGray,
        clearcoat: 1,
        reflectivity: 0.5,
    })
);
mercury.position.x = 3;



const sun = new THREE.Mesh(
    new THREE.SphereGeometry(1, 40, 40),
    new THREE.MeshLambertMaterial({
        map: sunTexture,
        clearcoat: 1,
        shininess: 100,
        reflectivity: 1,
        specular: new THREE.Color(0xffee2a),
        // emissive: 0xffffff,
    }),
);
sun.add(earth, mercury);
scene.add(sun);


const clock = new THREE.Clock();

// let time = Date.now();
const tick = () => {
    // console.log('tick');
    // window.requestAnimationFrame(tick);
    // const currentTime = Date.now();
    // const deltaTime = currentTime - time;
    // time = currentTime;
    // sphere.rotation.x += .1 * deltaTime;
    // console.log(time);

    const elapsedTime = clock.getElapsedTime();
    // console.log(elapsedTime);
    // sphere.rotation.y = elapsedTime;
    requestAnimationFrame(tick);
    renderer.render(scene, camera);
    // torus.setRotationFromAxisAngle(new THREE.Vector3(0, 1, 0), 23.5);
    // torus.rotation.y -= .04;
    // sphere.rotation.y = elapsedTime * Math.PI * 2;

    earth.position.z = Math.sin(elapsedTime * 0.5) * 9;
    earth.position.x = Math.cos(elapsedTime * 0.5) * 9;
    // earth.position.z = 5;
    earth.rotation.y += 0.0365;
    // moon.rotation.y += Math.PI * 0.0365;

    earthClouds.rotation.z += 0.0008;
    // earthClouds.rotation.x += .0002;
    // earthClouds.rotation.y -= .0004;

    mercury.position.z = Math.sin(elapsedTime * 2) * 3.5;
    mercury.position.x = Math.cos(elapsedTime * 2) * 3.5;

    mercury.rotation.y += 0.08;

    // moon.position.x = Math.sin(elapsedTime * -0.2) * 3.5;
    // moon.position.z = Math.cos(elapsedTime * -0.5) * 3.5;
    moon.rotation.x = elapsedTime * -0.0365;
    sun.rotation.y += 0.02;

    // SUN LEAPS OUT AT YOU!!
    // sun.position.y = Math.sin(elapsedTime) * 2;
    // sun.position.x = Math.cos(elapsedTime) * 2;
    // sun.position.z = Math.tan(elapsedTime);
    // sun.rotation.z -= .02;
};

earth.position.x = 0,
earth.position.y = 0,
earth.position.z = 10,

tick();


// const params = {
//     color: 0xfff000,
//     spin: () => {
//         sun.rotation, {
//             duration: 1,
//             y: sun.rotation.y += Math.PI * 2
//         };
//     }
// };


// gui
//     .add(params, 'spin');

// gui
//     .add(sun.rotation, 'y')
//     .min(-30)
//     .max(30)
//     .step(0.1)
//     .name('rotation');

// gui
//     .add(sun, 'visible');

// gui
//     .add(sun.material, 'wireframe');

// gui
//     .add(sun.position.y, 'weird spin');

// let sunSpeed = sun.position.x += 0;
// gui
//     .add(sun.position, 'y')
//     .min(-30)
//     .max(30)
//     .step(0.1)
//     .name('position');

// gui
//     .addColor(params, 'color')
//     .onChange(() => {
//         material.color.set(params.color);
//     });

// gui
//     .add(sun.size, 'y')
//     .min(-30)
//     .max(30)
//     .step(0.1)
//     .name('size');



// function animate() {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
//     // torus.setRotationFromAxisAngle(new THREE.Vector3(0, 1, 0), 23.5);
//     torus.rotation.y += .02;
//     sphere.rotation.y = elapsedTime;

// }

// animate();


// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// // const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 32);
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

const cursor = {
    x: 0,
    y: 0,
};

window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / window.innerWidth - 0.5;
    cursor.y = - (event.clientY / window.innerHeight - 0.5);
    // console.log(event.clientX);
});

// const canvas = document.getElementById('bg');

// window.addEventListener('resize', () => {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     camera.aspect = canvas.width / canvas.height;
//     camera.updateProjectionMatrix();

//     renderer.setSize(canvas.width, canvas.height);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// });

// window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     controls.handleResize();
// });

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // controls.handleResize();
}

window.addEventListener('resize', onWindowResize, false);

// window.addEventListener('keydown', (event) => {
//     if (event.key === 'h') {
//         if (gui._hidden) {
//             gui.show();
//         } else {
//             gui.hide();
//         }
//     }
// });