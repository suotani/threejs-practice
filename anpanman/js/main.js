function init() {
  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(
    45, window.innerWidth / window.innerHeight, 0.1, 1000);
  let renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(new THREE.Color("#EEEEEE"));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;

  let planeGeo = new THREE.PlaneGeometry(60, 60);
  let planeMat = new THREE.MeshLambertMaterial({
    color: "#ccc"
  });
  let plane = new THREE.Mesh(planeGeo, planeMat);
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.x = 0;
  plane.position.y = 0;
  plane.position.z = 0;
  plane.receiveShadow = true;

  scene.add(plane);

  let sphereGeo = new THREE.SphereGeometry(8, 50, 40);
  let sphereMat = new THREE.MeshLambertMaterial({
    color: "#ccc"
  });
  let sphere = new THREE.Mesh(sphereGeo, sphereMat);
  sphere.position.x = 0;
  sphere.position.y = 8;
  sphere.position.z = 0;
  sphere.castShadow = true;
  scene.add(sphere);


  let noseGeo = new THREE.SphereGeometry(2, 50, 40);
  let noseMat = new THREE.MeshLambertMaterial({
    color: "#f22"
  });
  let nose = new THREE.Mesh(noseGeo, noseMat);
  nose.position.x = -8;
  nose.position.y = 8;
  nose.position.z = 0;
  nose.castShadow = true;
  scene.add(nose);

  let eyeGeo = new THREE.SphereGeometry(1, 50, 40);
  let eyeMat = new THREE.MeshLambertMaterial({
    color: "#222"
  });
  let eye = new THREE.Mesh(eyeGeo, eyeMat);
  eye.position.x = -8;
  eye.position.y = 11;
  eye.position.z = 3;
  eye.castShadow = true;
  let eye2 = new THREE.Mesh(eyeGeo, eyeMat);
  eye2.position.x = -8;
  eye2.position.y = 11;
  eye2.position.z = -3;
  eye2.castShadow = true;
  scene.add(eye);
  scene.add(eye2);

  let spotLight = new THREE.SpotLight("#ff5");
  spotLight.position.set(-30, 20, -15);
  spotLight.castShadow = true;
  scene.add(spotLight);


  camera.position.x =  -50;
  camera.position.y = 10;
  camera.position.z = 0;
  camera.lookAt(scene.position);

  document.getElementById("threejs-output").appendChild(renderer.domElement);
  renderer.render(scene, camera);
}

window.onload = init;