import { constants } from "./constant.js";

class TailDot {
  constructor(textureLoader) {
    this.radius = constants.TAIL_DOT_RADIUS;
    this.texture = textureLoader.load(constants.TAIL_DOT_TEXTURE_PATH);
  }

  renderCube() {
    const geometry = new THREE.SphereGeometry(this.radius, 32, 16);
    const material = new THREE.MeshStandardMaterial({
      map: this.texture,
    });
    const sphere = new THREE.Mesh(geometry, material);
    return sphere;
  }

  fadeOut() {
    this.materials[0].opacity -= 0.1;
  }
}

export default TailDot;
