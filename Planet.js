class Planet {
  constructor(
    radius,
    rotationalSpeed,
    moveSpeedWithSun,
    texture,
    textureLoader
  ) {
    this.radius = radius;
    this.rotationalSpeed = rotationalSpeed;
    this.moveSpeedWithSun = moveSpeedWithSun;
    this.texture = texture;
    this.textureLoader = textureLoader;
  }

  renderCube() {
    const geometry = new THREE.SphereGeometry(this.radius, 32, 16);
    const material = new THREE.MeshStandardMaterial({
      map: this.textureLoader.load(this.texture),
    });
    const sphere = new THREE.Mesh(geometry, material);
    return sphere;
  }

  addOtherPlanet(planet) {
    this.add(planet);
  }

 
}

export default Planet;
