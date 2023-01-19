import { constants } from "./constant.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";
import Planet from "./Planet.js";
import TailDot from "./TailDot.js";

const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const textureLoader = new THREE.TextureLoader();

const camera = new THREE.PerspectiveCamera(
  20,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(-50, 140, 140);

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

const scene = new THREE.Scene();

const loader = new THREE.CubeTextureLoader();

const texture = loader.load([
  "img/stars.jpg",
  "img/stars.jpg",
  "img/stars.jpg",
  "img/stars.jpg",
  "img/stars.jpg",
  "img/stars.jpg",
]);

scene.background = texture;

function animate() {
  renderer.render(scene, camera);
}

window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const sunGeo = new THREE.SphereGeometry(10, 32, 16);
const sunMat = new THREE.MeshBasicMaterial({
  map: textureLoader.load("img/sun.jpg"),
});

const sunCube = new THREE.Mesh(sunGeo, sunMat);

const mercury = new Planet(
  constants.MERCURY_RADIUS,
  constants.MERCURY_SELF_ROTATION,
  constants.MERCURY_MOVE,
  "img/mercury.jpg",
  textureLoader
);

const mercuryCube = mercury.renderCube();
const mercuryObject = new THREE.Object3D();
mercuryCube.position.x = constants.MERCURY_X;
mercuryObject.add(mercuryCube);

const venus = new Planet(
  constants.VENUS_RADIUS,
  constants.VENUS_SELF_ROTATION,
  constants.VENUS_MOVE,
  "img/venus.jpg",
  textureLoader
);

const venusCube = venus.renderCube();
const venusObject = new THREE.Object3D();
venusCube.position.x = constants.VENUS_X;
venusObject.add(venusCube);

const earth = new Planet(
  constants.EARTH_RADIUS,
  constants.EARTH_SELF_ROTATION,
  constants.EARTH_MOVE,
  "img/earth.jpg",
  textureLoader
);

const earthCube = earth.renderCube();
const earthObject = new THREE.Object3D();
earthCube.position.x = constants.EARTH_X;
earthObject.add(earthCube);

const moon = new Planet(
  constants.MOON_RADIUS,
  constants.MOON_SELF_ROTATION,
  constants.MOON_MOVE,
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/lroc_color_poles_1k.jpg",
  textureLoader
);

const moonCube = moon.renderCube();
const moonObject = new THREE.Object3D();
moonCube.position.x = constants.MOON_X;
moonObject.add(moonCube);
earthCube.add(moonObject);

const mars = new Planet(
  constants.MARS_RADIUS,
  constants.MARS_SELF_ROTATION,
  constants.MARS_MOVE,
  "img/mars.jpg",
  textureLoader
);

const marsCube = mars.renderCube();
const marsObject = new THREE.Object3D();
marsCube.position.x = constants.MARS_X;
marsObject.add(marsCube);

const jupiter = new Planet(
  constants.JUPITER_RADIUS,
  constants.JUPITER_SELF_ROTATION,
  constants.JUPITER_MOVE,
  "img/jupiter.jpg",
  textureLoader
);

const jupiterCube = jupiter.renderCube();
const jupiterObject = new THREE.Object3D();
jupiterCube.position.x = constants.JUPITER_X;
jupiterObject.add(jupiterCube);

const saturn = new Planet(
  constants.SATURN_RADIUS,
  constants.SATURN_SELF_ROTATION,
  constants.SATURN_MOVE,
  "img/saturn.jpg",
  textureLoader
);

const saturnCube = saturn.renderCube();
const saturnObject = new THREE.Object3D();
saturnCube.position.x = constants.SATURN_X;

const saturnRingGeo = new THREE.RingGeometry(5.1, 8, 30);
const saturnRingMat = new THREE.MeshBasicMaterial({
  map: textureLoader.load("img/saturnring.png"),
  size: THREE.DoubleSide,
});

const saturnRing = new THREE.Mesh(saturnRingGeo, saturnRingMat);
saturnRing.rotation.x = -0.5 * Math.PI;
saturnCube.add(saturnRing);

saturnObject.add(saturnCube);

const uranus = new Planet(
  constants.URANUS_RADIUS,
  constants.URANUS_SELF_ROTATION,
  constants.URANUS_MOVE,
  "img/uranus.jpg",
  textureLoader
);

const uranusCube = uranus.renderCube();
const uranusObject = new THREE.Object3D();
uranusCube.position.x = constants.URANUS_X;
uranusObject.add(uranusCube);

const uranusRingGeo = new THREE.RingGeometry(2, 2.5, 32);
const uranusRingMat = new THREE.MeshBasicMaterial({
  map: textureLoader.load("img/uranus ring.png"),
  size: THREE.DoubleSide,
});

const uranusRing = new THREE.Mesh(uranusRingGeo, uranusRingMat);
uranusRing.rotation.x = -0.5 * Math.PI;
uranusCube.add(uranusRing);

const neptune = new Planet(
  constants.NEPTUNE_RADIUS,
  constants.NEPTUNE_SELF_ROTATION,
  constants.NEPTUNE_MOVE,
  "img/neptune.jpg",
  textureLoader
);

const neptuneCube = neptune.renderCube();
const neptuneObject = new THREE.Object3D();
neptuneCube.position.x = constants.NEPTUNE_X;
neptuneObject.add(neptuneCube);

const pointLight = new THREE.PointLight(0xffffff, 2, 300);
scene.add(pointLight);

scene.add(sunCube);
scene.add(mercuryObject);
scene.add(venusObject);
scene.add(earthObject);
scene.add(marsObject);
scene.add(jupiterObject);
scene.add(saturnObject);
scene.add(uranusObject);
scene.add(neptuneObject);

console.log("Abc");
let pointPathEarth = [];

Loop();
function Loop() {
  // pointPathEarth.push(
  //   new THREE.Vector3(
  //     earthCube.position.x,
  //     earthCube.position.y,
  //     earthCube.position.z
  //   )
  // );
  // const geometry = new THREE.BufferGeometry().setFromPoints(pointPathEarth);
  // const material = new THREE.LineBasicMaterial({
  //   color: 0xffffff,
  // });
  // const line = new THREE.Line(geometry, material);
  // console.log(line);
  // scene.add(line);

  routingY(sunCube, constants.SUN_SELF_ROTATION);
  routingY(mercuryCube, constants.MERCURY_SELF_ROTATION);
  routingY(mercuryObject, constants.MERCURY_MOVE);
  routingY(venusCube, constants.VENUS_SELF_ROTATION);
  routingY(venusObject, constants.VENUS_MOVE);
  routingY(earthCube, constants.VENUS_SELF_ROTATION);
  routingY(earthObject, constants.VENUS_MOVE);
  routingY(earthCube, constants.MARS_SELF_ROTATION);
  routingY(marsObject, constants.MARS_MOVE);
  routingY(jupiterCube, constants.JUPITER_SELF_ROTATION);
  routingY(jupiterObject, constants.JUPITER_MOVE);
  routingY(saturnCube, constants.SATURN_SELF_ROTATION);
  routingY(saturnObject, constants.SATURN_MOVE);
  routingY(uranusCube, constants.URANUS_SELF_ROTATION);
  routingY(uranusObject, constants.URANUS_MOVE);
  routingY(neptuneCube, constants.URANUS_SELF_ROTATION);
  routingY(neptuneObject, constants.URANUS_MOVE);
  routingY(moonCube, constants.MOON_SELF_ROTATION);
  routingY(moonObject, constants.MOON_MOVE);
  renderer.render(scene, camera);
  camera.updateProjectionMatrix();
  camera.fov += 0.03;
  requestAnimationFrame(Loop);
}

function routingY(object, speed) {
  object.rotateY(speed);
}
