function init() {
  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(
    45, window.innerWidth / window.innerHeight, 0.1, 1000);
  let renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(new THREE.Color("#EEEEEE"));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;

  let planeGeo = new THREE.PlaneGeometry(60, 20);
  let planeMat = new THREE.MeshLambertMaterial({
    color: "#ccc"
  });
  let plane = new THREE.Mesh(planeGeo, planeMat);
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.x = 15;
  plane.position.y = 0;
  plane.position.z = 0;
  plane.receiveShadow = true;

  scene.add(plane);

  let sphereGeo = new THREE.SphereGeometry(4, 50, 40);
  let sphereMat = new THREE.MeshLambertMaterial({
    color: "#ccc"
  });
  let sphere = new THREE.Mesh(sphereGeo, sphereMat);
  sphere.position.x = 20;
  sphere.position.y = 4;
  sphere.position.z = 2;
  sphere.castShadow = true;
  scene.add(sphere);

  let spotLight = new THREE.SpotLight("#ff5");
  spotLight.position.set(-20, 30, -5);
  spotLight.castShadow = true;
  scene.add(spotLight);


  camera.position.x =  -30;
  camera.position.y = 40;
  camera.position.z = 30;
  camera.lookAt(scene.position);

  let time = 0;

  document.getElementById("threejs-output").appendChild(renderer.domElement);
  renderScene();

  function renderScene(){
    sphere.position.x += Math.sin(time * 0.01) * 0.1;
    requestAnimationFrame(renderScene);
    renderer.render(scene, camera)
    time += 1
  }
}


window.onload = init;