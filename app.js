/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import * as THREE from 'three';
// import '../styles/global.css';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { OrbitControls } from './jsm/controls/OrbitControls.js';
// import gsap from './minified/gsap.min.js';


// import * as dat from 'https://cdn.jsdelivr.net/npm/dat.gui@0.7.9/build/dat.gui.module.js';

// import * as dat from 'https://unpkg.com/dat.gui@0.7.7/build/dat.gui.module.js';


//                                     GUI




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
// const glowScene = new THREE.Scene();
// glowScene.add(new THREE.AmbientLight(0xffffff));

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

const gui = new GUI({
    width: 300,
});
scene.add(gui);

// gui.add(sun.position, 'y').min(-10).max(10).step(0.01);
// gui.open();

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
const earthNormal = textureLoader.load('./assets/planets/earth-normal.png');
const earthSpecular = textureLoader.load('./assets/planets/earth-specular.png');
const earthDay = textureLoader.load('./assets/planets/earth-day.jpg');
const earthNight = textureLoader.load('./assets/planets/earth-night.jpg');
const rockyHeight = textureLoader.load('./assets/rocky-height-map.png');
const heightMap = textureLoader.load('./assets/height-map-1.png');

// Water textures
const waterNormal = textureLoader.load('./assets/water-textures/water-normal.jpg');
const waterColor = textureLoader.load('./assets/water-textures/water-color.jpg');
const waterDisp = textureLoader.load('./assets/water-textures/water-disp.png');
const waterOcc = textureLoader.load('./assets/water-textures/water-occ.jpg');
const waterSpec = textureLoader.load('./assets/water-textures/water-spec.jpg');

// Alt. Earth textures
const earthMap = textureLoader.load('./assets/planets/earthmap1k.jpg');
const earthBump = textureLoader.load('./assets/planets/earthbump1k.jpg');
const earthLights = textureLoader.load('./assets/planets/earthlights1k.png');
const earthSpec = textureLoader.load('./assets/planets/earthspec1k.jpg');

// Alt. Earth clouds textures
const cloudMap = textureLoader.load('./assets/planets/earthcloudmap.jpg');
const cloudMapTrans = textureLoader.load('./assets/planets/earthcloudmaptrans.jpg');

const shinyTexture = textureLoader.load('./assets/shiny.png');

const marble = new THREE.Mesh(
    new THREE.SphereGeometry(2, 100, 100),
    new THREE.MeshMatcapMaterial({
        matcap: shinyTexture,
        metalness: 0.45,
        roughness: 0.45,
    }),
);
marble.position.set(0, 6, -24);
scene.add(marble);

scene.background = textureLoader.load('../assets/few-stars.jpg');



// IN PROGRESS

// const groundHeightTexture = textureLoader().load('./assets/height-map-1.png');
// groundHeightTexture.wrapS = groundHeightTexture.wrapT = THREE.RepeatWrapping;
// groundHeightTexture.repeat.set(0.5, -0.5);
// groundHeightTexture.displacementScale = 0.4;


// // const groundGeo =
// const groundMesh = new THREE.Mesh(
//     new THREE.PlaneGeometry(30, 30, 60, 60),
//     new THREE.MeshStandardMaterial({
//         map: venusSurfaceTexture,
//         side: THREE.DoubleSide,
//         normalMap: groundHeightTexture,
//         // displacementMap: groundHeightTexture,
//         // displacementScale: 0.8,
//         // wrapS: THREE.RepeatWrapping,
//         // wrapT: THREE.RepeatWrapping,
//         // minFilter: THREE.LinearFilter,
//         // needsUpdate: true,

//     })
// );
// // const ground = new THREE.Mesh(groundGeo, groundMesh);
// groundMesh.position.y = -10;
// groundMesh.rotateX(Math.PI / 2);
// scene.add(groundMesh);
// // groundMesh.displacementMap.needsUpdate = true;

// IN PROGRESS

const waterGeo = new THREE.PlaneGeometry(30, 30, 60, 60);
const waterMesh = new THREE.MeshStandardMaterial({
    // color: 0xccddff,
    map: waterColor,
    normalMap: waterNormal,
    displacementMap: waterDisp,
    specularMap: waterSpec,
    aoMap: waterOcc,
    side: THREE.DoubleSide,
});
const water = new THREE.Mesh(waterGeo, waterMesh);
water.position.y = -10;
water.rotateX(Math.PI / 2);
// water.rotateZ(180);
scene.add(water);


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

// const bulbGeometry2 = new THREE.SphereGeometry(0, 16, 8);
// const bulbLight2 = new THREE.PointLight(0xffee88, 4, 100, 2);
// const bulbMat2 = new THREE.MeshStandardMaterial({
//     emissive: 0xffffee,
//     emissiveIntensity: 1,
//     color: 0x000000,
// });
// bulbLight2.add(new THREE.Mesh(bulbGeometry2, bulbMat2));
// bulbLight2.position.set(0, -20, 0);
// // bulbLight2.castShadow = true;
// bulbLight.castShadow = false;
// scene.add(bulbLight2);

// const bulbGeometry3 = new THREE.SphereGeometry(0, 16, 8);
// const bulbLight3 = new THREE.PointLight(0xffee88, 4, 100, 3);
// const bulbMat3 = new THREE.MeshStandardMaterial({
//     emissive: 0xffffee,
//     emissiveIntensity: 1,
//     color: 0x000000,
// });
// bulbLight3.add(new THREE.Mesh(bulbGeometry3, bulbMat3));
// bulbLight3.position.set(2, -10, -20);
// // bulbLight3.castShadow = true;
// bulbLight.castShadow = false;
// scene.add(bulbLight3);

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
renderer.render(scene, camera, gui);

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
    new THREE.MeshStandardMaterial({
        map: earthDay,
        normalMap: earthMap,
        displacementMap: earthBump,
        displacementScale: 0.05,
        // shadowMap: earthNight,
        specularMap: earthSpec,
        // clearcoat: 1,
        // reflectivity: 1,
        // emissive: 0xffffff,
        // emissiveIntensity: 0.12,
    }),
);
earth.rotateY(0.234);
earth.rotateX(0.014);
earth.rotateZ(0.03);
earth.position.x = 0,
    earth.position.y = 9,
    earth.position.z = 19,
    scene.add(earth);
// earth.rotateY(23.5 * Math.PI / 180);


const earthClouds = new THREE.Mesh(
        new THREE.SphereGeometry(1.005, 40, 40),
        new THREE.MeshPhongMaterial({
            map: clouds,
            // normalMap: cloudMapTrans,
            transparent: true,
            color: 0xffffff,
            opacity: .55,
            normalMap: earthDay,
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
sun.add(mercury);
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

    // earth.position.z = Math.sin(elapsedTime * 0.5) * 9;
    // earth.position.x = Math.cos(elapsedTime * 0.5) * 9;
    // earth.position.z = 5;
    // earth.rotation.y += 0.0365;
    // moon.rotation.y += Math.PI * 0.0365;

    earthClouds.rotation.z += 0.0008;
    earthClouds.rotation.y += 0.0008;
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

tick();


const material = new THREE.MeshStandardMaterial();
material.metalness = 0.7;
material.roughness = 0.2;
// material.wireframe = true;
// material.color = 0xffaacc;

const globe = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 64, 64),
    material,
);
globe.position.set(1.5, 5, 15);

scene.add(globe);




gui.add(material, 'metalness').min(0).max(1).step(0.0001);
gui.add(material, 'roughness').min(0).max(1).step(0.0001);
gui.add(material.wireframe, 'true');


const cubeTextureLoader = new THREE.CubeTextureLoader();

const environmentMapTexture = cubeTextureLoader.load(
    './assets/environmentMaps/0/px.jpg',
    './assets/environmentMaps/0/nx.jpg',
    './assets/environmentMaps/0/py.jpg',
    './assets/environmentMaps/0/ny.jpg',
    './assets/environmentMaps/0/pz.jpg',
    './assets/environmentMaps/0/nz.jpg',
);

material.envMap = environmentMapTexture;

const orbitRing = new THREE.Mesh(
    new THREE.RingGeometry(2, 2, 50, 50, Math.PI * 2, Math.PI * 2),
    new THREE.MeshStandardMaterial({
        color: 0xffffff,

    }),
);
orbitRing.rotation.z = Math.PI / 2;
scene.add(orbitRing);


const params = {
    color: 0xfff000,
    spin: () => {
        sun.rotation, {
            duration: 1,
            y: sun.rotation.y += Math.PI * 2
        };
    }
};


gui
    .add(params, 'spin');

gui
    .add(sun.rotation, 'y')
    .min(-30)
    .max(30)
    .step(0.1)
    .name('rotation');

// gui
//     .add(sun, 'visible');

// gui
//     .add(sun.material, 'wireframe');

// gui
//     .add(sun.position.y, 'weird spin');

// let sunSpeed = sun.position.x += 0;




const cursor = {
    x: 0,
    y: 0,
};

window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / window.innerWidth - 0.5;
    cursor.y = - (event.clientY / window.innerHeight - 0.5);
    // console.log(event.clientX);
});


function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    controls.handleResize();
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