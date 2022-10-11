import * as THREE from 'three';
// import '../styles/global.css';
// import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { OrbitControls } from './jsm/controls/OrbitControls.js';
// import gsap from './minified/gsap.min.js';
import { FontLoader } from './jsm/loaders/FontLoader.js';
import { TextGeometry } from './jsm/geometries/TextGeometry.js';
// import * as dat from 'https://cdn.jsdelivr.net/npm/dat.gui@0.7.9/build/dat.gui.module.js';

// import * as dat from 'https://unpkg.com/dat.gui@0.7.7/build/dat.gui.module.js';



const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
);
camera.position.z = 26;
camera.position.y = 8;


const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#scene'),
    antialias: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// const gui = new GUI({
//     width: 300,
// });
// scene.add(gui);

// gui.add(sun.position, 'y').min(-10).max(10).step(0.01);
// gui.open();

const loadingManager = new THREE.LoadingManager();
// loadingManager.onStart = () => {
//     console.log('onStart');
// };
// loadingManager.onLoaded = () => {
//     console.log('onLoaded');
// };
// loadingManager.onProgress = () => {
//     console.log('onProgress');
// };
// loadingManager.onError = () => {
//     console.log('onError');
// };

const textureLoader = new THREE.TextureLoader(loadingManager);

// const stars = textureLoader.load('./assets/stars.jpg');
// const ice = textureLoader.load('./assets/ice-texture.jpg');
// const shiny = textureLoader.load('./assets/shiny-texture.jpg');
// const paint = textureLoader.load('./assets/paint-texture.jpg');
// const fireL = textureLoader.load('./assets/fire-lowq.jpg');
// const fireM = textureLoader.load('./assets/fire-medq.jpg');
const darkSkies = textureLoader.load('../assets/dark-skies.jpg');
// const earthTexture = textureLoader.load('./assets/earth.jpg');
// const moonTexture = textureLoader.load('./assets/moon.jpg');
const mercuryColor = textureLoader.load('./assets/mercury-color.jpg');
const mercuryGray = textureLoader.load('./assets/mercury-grayscale.jpg');
const clouds = textureLoader.load('./assets/earth-clouds.jpg');

const sunTexture = textureLoader.load('./assets/planets/sun.jpg');
const marsTexture = textureLoader.load('./assets/planets/mars.jpg');
// const mercuryTexture = textureLoader.load('./assets/planets/mercury.jpg');
const moonTexture = textureLoader.load('./assets/planets/moon.jpg');
// const neptuneTexture = textureLoader.load('./assets/planets/neptune.jpg');
// const saturnTexture = textureLoader.load('./assets/planets/saturn.jpg');
// const saturnRingsTexture = textureLoader.load('./assets/planets/saturn-ring-alpha.jpg');
// const uranusTexture = textureLoader.load('./assets/planets/uranus.jpg');
const venusSurfaceTexture = textureLoader.load('./assets/planets/venus-surface.jpg');
const venusAtmoTexture = textureLoader.load('./assets/planets/venus-atmosphere.jpg');
// const jupiterTexture = textureLoader.load('./assets/planets/jupiter.jpg');
// const earthNormal = textureLoader.load('./assets/planets/earth-normal.png');
// const earthSpecular = textureLoader.load('./assets/planets/earth-specular.png');
const earthDay = textureLoader.load('./assets/planets/earth-day.jpg');
// const earthNight = textureLoader.load('./assets/planets/earth-night.jpg');
// const rockyHeight = textureLoader.load('./assets/rocky-height-map.png');
// const heightMap = textureLoader.load('./assets/height-map-1.png');

// Water textures
const waterNormal = textureLoader.load('./assets/water-textures/water-normal.jpg');
const waterColor = textureLoader.load('./assets/water-textures/water-color.jpg');
const waterDisp = textureLoader.load('./assets/water-textures/water-disp.png');
const waterOcc = textureLoader.load('./assets/water-textures/water-occ.jpg');
const waterSpec = textureLoader.load('./assets/water-textures/water-spec.jpg');

// Terrain textures
const terrainColor = textureLoader.load('./assets/terrain-textures/terrain-diff.jpg');
const terrainDisp = textureLoader.load('./assets/terrain-textures/terrain-disp.png');
const terrainOcc = textureLoader.load('./assets/terrain-textures/terrain-rough.jpg');
const terrainNormal = textureLoader.load('./assets/terrain-textures/terrain-normal.jpg');

// Alt. Earth textures
const earthMap = textureLoader.load('./assets/planets/earthmap1k.jpg');
const earthBump = textureLoader.load('./assets/planets/earthbump1k.jpg');
// const earthLights = textureLoader.load('./assets/planets/earthlights1k.png');
const earthSpec = textureLoader.load('./assets/planets/earthspec1k.jpg');

// Alt. Earth clouds textures
// const cloudMap = textureLoader.load('./assets/planets/earthcloudmap.jpg');
// const cloudMapTrans = textureLoader.load('./assets/planets/earthcloudmaptrans.jpg');

// const shinyTexture = textureLoader.load('./assets/shiny.png');

// Matcap textures
const matcapChrome = textureLoader.load('./assets/matcaps/matcap-chrome.png');
const matcapWhite = textureLoader.load('./assets/matcaps/matcap-bright-white.png');
const matcapBronze = textureLoader.load('./assets/matcaps/matcap-flat-bronze.png');
const matcapGold = textureLoader.load('./assets/matcaps/matcap-golden-metallic.png');
const matcapGO = textureLoader.load('./assets/matcaps/matcap-green-orange-gradient.png');
const matcapShinyGreen = textureLoader.load('./assets/matcaps/matcap-green-shine.png');
const matcapOGFade = textureLoader.load('./assets/matcaps/matcap-orange-green-fade.png');
const matcapFlatGreen = textureLoader.load('./assets/matcaps/matcap-shiny-flat-green.png');
const matcapFlatBlue = textureLoader.load('./assets/matcaps/matcap-shiny-flat-blue.png');
const matcapShinyRed = textureLoader.load('./assets/matcaps/matcap-shiny-red.png');



const matcapGreen = textureLoader.load('./assets/matcaps/matcap-green.png');
const matcapLightGreen = textureLoader.load('./assets/matcaps/matcap-light-green.png');
const matcapArmyGreen = textureLoader.load('./assets/matcaps/matcap-army-man-green.png');
const matcapShinyBlue = textureLoader.load('./assets/matcaps/matcap-shiny-blue.png');
const matcapTeal = textureLoader.load('./assets/matcaps/matcap-light-teal.png');
const matcapPaleGreen = textureLoader.load('./assets/matcaps/matcap-pale-green.png');

scene.background = textureLoader.load('../assets/few-stars.jpg');


const fontLoader = new FontLoader();



fontLoader.load(
    './fonts/cabin-regular.json', (font) => {
        console.log('font is loaded');
        const textGeometry = new TextGeometry(
            'Yeeeahhh boyyeee', {
                font: font,
                size: 3,
                height: 0.8,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 8,
                center: true,
            }

        );


        const textMaterial = new THREE.MeshMatcapMaterial({
            matcap: matcapTeal,
        });
        const text = new THREE.Mesh(textGeometry, textMaterial);

        // textMaterial.matcap = matcapTeal;
        text.position.y = 4;
        text.position.x = -15;
        text.position.z = 4;
        // text.center();
        scene.add(text);

        const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45);
        const donutMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapFlatGreen });

        for (let i = 0; i < 250; i++) {

            const donut = new THREE.Mesh(donutGeometry, donutMaterial);
            donut.position.x = (Math.random() - 0.5) * 50;
            donut.position.y = (Math.random() - 0.5) * 50 + 2;
            donut.position.z = (Math.random() - 0.5) * 50;

            donut.rotation.x = Math.random() * Math.PI;
            donut.rotation.y = Math.random() * Math.PI;

            const scale = Math.random();
            donut.scale.set(scale, scale, scale);
            donut.rotation.x += 0.02;
            scene.add(donut);
        }
    }

    
);

// matcapGreen
// matcapLightGreen
// matcapArmyGreen
// matcapShinyBlue
// matcapTeal
// matcapPaleGreen

function addCubes() {

    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapShinyBlue });

    for (let i = 0; i < 250; i++) {

        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.x = (Math.random() - 0.5) * 50;
        cube.position.y = (Math.random() - 0.5) * 50 + 2;
        cube.position.z = (Math.random() - 0.5) * 50;

        cube.rotation.x = Math.random() * Math.PI;
        cube.rotation.y = Math.random() * Math.PI;

        const scale = Math.random();
        cube.scale.set(scale, scale, scale);

        scene.add(cube);
    }
    
}

addCubes();

const planeGeo = new THREE.PlaneGeometry(100, 100, 100, 100);
const waterMesh = new THREE.MeshStandardMaterial({
    // color: 0xccddff,
    // color: 0x00ccff,
    map: waterColor,
    normalMap: waterNormal,
    displacementMap: waterDisp,
    displacementScale: 5,
    specularMap: waterSpec,
    aoMap: waterOcc,
    side: THREE.DoubleSide,
});
const water = new THREE.Mesh(planeGeo, waterMesh);
// water.position.y = -10;
// water.rotateX(Math.PI / 2);
// scene.add(water);
water.position.y = +20;
water.rotateX((Math.PI / 2) - 0.1);
scene.add(water);


const terrainMesh = new THREE.MeshStandardMaterial({
    // color: 0xccddff,
    // color: 0x00ccff,
    map: terrainColor,
    normalMap: terrainNormal,
    displacementMap: terrainDisp,
    displacementScale: 9,
    specularMap: terrainOcc,
    alphaMap: terrainOcc,
    wrapS: THREE.RepeatWrapping,
    wrapT: THREE.RepeatWrapping,
    // aoMap: terrainOcc,
    side: THREE.DoubleSide,
});
const terrain = new THREE.Mesh(planeGeo, terrainMesh);
// terrain.position.z = -50;
// terrain.rotateZ(Math.PI / 2);
// scene.add(terrain);
terrain.position.y = -10;
terrain.rotateX(Math.PI / 2);
scene.add(terrain);



const bulbGeometry = new THREE.SphereGeometry(0, 16, 8);
const bulbLight = new THREE.PointLight(0xffee88, 7, 200, 20);
const bulbMat = new THREE.MeshStandardMaterial({
    emissive: 0xffffee,
    emissiveIntensity: 4,
    color: 0x000000,
});
bulbLight.add(new THREE.Mesh(bulbGeometry, bulbMat));
bulbLight.position.set(0, 2, 0);
bulbLight.castShadow = true;
scene.add(bulbLight);



const lightLight = new THREE.PointLight(0x387ffa, 2);
const lightGeo = new THREE.SphereGeometry(0.4);
const lightMat = new THREE.MeshPhongMaterial({
    color: 0x387ffa,
    emissive: 0xccc000,
    emissiveIntensity: 5,
});
// const direcHelper = new THREE.PointLightHelper(lightLight);

lightLight.add(new THREE.Mesh(lightGeo, lightMat));
// lightLight.add(direcHelper);
lightLight.castShadow = true;
// lightLight.position.y = 2.2;
// lightLight.rotateY(132);
// lightLight.rotateZ(32);
// lightLight.rotateX(20);


scene.add(lightLight);

// const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);

// const helper = new THREE.DirectionalLightHelper(directionalLight, 5);
// directionalLight.position.set(3, 0.5, 2);
// scene.add(directionalLight);




const controls = new OrbitControls(camera, renderer.domElement);
controls.update();
renderer.render(scene, camera);

// camera.getWorldPosition.setZ(30);


// const ambientLight = new THREE.AmbientLight();
// scene.add(ambientLight);

var backgroundBox = new THREE.Mesh(
    new THREE.BoxGeometry(800, 800, 800),
    new THREE.MeshStandardMaterial({
        map: darkSkies,
        side: THREE.DoubleSide,
        flatShading: THREE.FlatShading
    })
);
scene.add(backgroundBox);

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


const earth = new THREE.Mesh(
    new THREE.SphereGeometry(1, 100, 100),
    new THREE.MeshStandardMaterial({
        map: earthDay,
        normalMap: earthMap,
        displacementScale: 0.003,
        // shadowMap: earthNight,
        specularMap: earthSpec,
        bumpMap: earthBump,
        // clearcoat: 1,
        // reflectivity: 1,
        // emissive: 0xffffff,
        // emissiveIntensity: 0.12,
    }),
);
earth.rotateY(23.5 * Math.PI / 180);


const earthClouds = new THREE.Mesh(
    new THREE.SphereGeometry(1.005, 100, 100),
    new THREE.MeshStandardMaterial({
        map: clouds,
        transparent: true,
        color: 0xffffff,
        opacity: 0.55,
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
moon.position.x = 2.84;

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

const venus = new THREE.Mesh(
    new THREE.SphereGeometry(0.95, 100, 100),
    new THREE.MeshPhongMaterial({
        map: venusSurfaceTexture,
        metalness: 0.45,
        roughness: 0.45,
    }),
);
venus.position.x = 4;

const venusClouds = new THREE.Mesh(
    new THREE.SphereGeometry(1.01, 100, 100),
    new THREE.MeshStandardMaterial({
        map: venusAtmoTexture,
        transparent: true,
        opacity: 0.2,
    }),
);

venus.add(venusClouds);

const mars = new THREE.Mesh(
    new THREE.SphereGeometry(0.75, 64, 64),
    new THREE.MeshStandardMaterial({
        map: marsTexture,
        // normalMap: moonTexture,
    }),
);
mars.position.x = 3;


const shootingStar = new THREE.Mesh(
    new THREE.SphereGeometry(0.35, 64, 64),
    new THREE.MeshLambertMaterial({
        map: moonTexture,
    }),
);


const sun = new THREE.Mesh(
    new THREE.SphereGeometry(2, 40, 40),
    new THREE.MeshLambertMaterial({
        map: sunTexture,
        clearcoat: 1,
        shininess: 100,
        reflectivity: 1,
        specular: new THREE.Color(0xffee2a),
        // emissive: 0xffffff,
    }),
);
sun.add(earth, mercury, venus, mars, shootingStar);
// scene.add(sun);

const clock = new THREE.Clock();

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

    earth.position.z = Math.sin(elapsedTime * 0.5) * 15;
    earth.position.x = Math.cos(elapsedTime * 0.5) * 15;
    // earth.position.z = 5;
    earth.rotation.y += 0.0365;
    // moon.rotation.y += Math.PI * 0.0365;

    earthClouds.rotation.z += 0.0008;
    earthClouds.rotation.y += 0.0008;
    // earthClouds.rotation.x += .0002;
    // earthClouds.rotation.y -= .0004;

    mercury.position.z = Math.sin(elapsedTime * 0.2) * 5;
    mercury.position.x = Math.cos(elapsedTime * 0.2) * 5;

    mercury.rotation.y += 0.08;

    venus.position.z = Math.sin(-elapsedTime * 0.001) * 9;
    venus.position.x = Math.cos(-elapsedTime * 0.001) * 9;

    venus.rotation.y += 0.034;
    venusClouds.rotation.y += 0.084;

    mars.position.z = Math.sin(-(elapsedTime) * 0.02) * 22;
    mars.position.x = Math.cos(-(elapsedTime) * 0.02) * 22;

    mars.rotation.y += 0.06;


    // shootingStar.position.z = -Math.sin(-elapsedTime * 2) * 120;
    shootingStar.position.x = Math.tan(elapsedTime * 3) * 120;
    shootingStar.position.z = -Math.sin(elapsedTime * 6 + 4) * 120;
    shootingStar.position.y = Math.cos(elapsedTime * 0.5) * 39;

    // moon.position.x = Math.sin(elapsedTime * 2) * 3.5;
    // moon.position.z = Math.cos(elapsedTime * 5) * 3.5;
    moon.rotation.y = elapsedTime * 0.5;
    sun.rotation.y += 0.02;

    lightLight.position.z = Math.sin(Math.cos(Math.PI) * 20);
    lightLight.position.x = Math.tan(elapsedTime * 4) * 4;
    // lightLight.position.z = -Math.tan(elapsedTime) + - 4;
    lightLight.rotation.z += 0.02; 


    // lightLight.position.x = Math.sin(elapsedTime * 4) * 4;
    // lightLight.position.z = Math.cos(elapsedTime * 4) * 4;
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



// gui.add(material, 'metalness').min(0).max(1).step(0.0001);
// gui.add(material, 'roughness').min(0).max(1).step(0.0001);
// gui.add(material.wireframe, 'true');


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

// const orbitRing = new THREE.Mesh(
//     new THREE.RingGeometry(2, 2, 50, 50, Math.PI * 2, Math.PI * 2),
//     new THREE.MeshStandardMaterial({
//         color: 0xffffff,

//     }),
// );
// orbitRing.rotation.z = Math.PI / 2;
// scene.add(orbitRing);


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
