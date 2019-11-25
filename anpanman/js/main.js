function init() {
  let time = 0
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
    color: "#f39b63"
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
  nose.position.x = -7;
  nose.position.y = 8;
  nose.position.z = 0;
  nose.castShadow = true;
  scene.add(nose);

  let hoppeGeo = new THREE.SphereGeometry(2, 50, 40);
  let hoppeMat = new THREE.MeshLambertMaterial({
    color: "#f52"
  });
  let hoppe = new THREE.Mesh(hoppeGeo, hoppeMat);
  hoppe.position.x = -6.8;
  hoppe.position.y = 8;
  hoppe.position.z = 3.5;
  hoppe.castShadow = true;
  let hoppe2 = new THREE.Mesh(hoppeGeo, hoppeMat);
  hoppe2.position.x = -6.8;
  hoppe2.position.y = 8;
  hoppe2.position.z = -3.5;
  hoppe2.castShadow = true;
  scene.add(hoppe);
  scene.add(hoppe2);

  let lightToneGeo = new THREE.BoxGeometry(0.7,0.7,0.7);
  let lightToneMat = new THREE.MeshLambertMaterial({
    color: "#ffffff"
  });
  let lightTone = new THREE.Mesh(lightToneGeo, lightToneMat);
  lightTone.position.x = -8.5;
  lightTone.position.y = 8;
  lightTone.position.z = 3.5;
  scene.add(lightTone);

  let lightTone2 = new THREE.Mesh(lightToneGeo, lightToneMat);
  lightTone2.position.x = -8.5;
  lightTone2.position.y = 8;
  lightTone2.position.z = -3.5;
  scene.add(lightTone2);

  let lightTone3 = new THREE.Mesh(lightToneGeo, lightToneMat);
  lightTone3.position.x = -8.7;
  lightTone3.position.y = 8;
  lightTone3.position.z = 0;
  scene.add(lightTone3);

  let eyeGeo = new THREE.TorusGeometry(0.8, 0.6, 90, 100);
  let eyeMat = new THREE.MeshLambertMaterial({
    color: "#222"
  });
  let eye = new THREE.Mesh(eyeGeo, eyeMat);
  eye.position.x = -6;
  eye.position.y = 11;
  eye.position.z = 2;
  eye.castShadow = true;
  let eye2 = new THREE.Mesh(eyeGeo, eyeMat);
  eye2.position.x = -6;
  eye2.position.y = 11;
  eye2.position.z = -2;
  eye2.castShadow = true;
  scene.add(eye);
  scene.add(eye2);

  let mouseGeo = new THREE.TorusGeometry(1, 0.7, 90, 100)
  let mouseMat = new THREE.MeshLambertMaterial({
    color: "#f22"
  });
  let mouse = new THREE.Mesh(mouseGeo, mouseMat);
  // mouse.rotation.x = 0.5 * Math.PI;
  mouse.position.x = -6;
  mouse.position.y = 5;
  mouse.position.z = 0;
  scene.add(mouse);

  let spotLight = new THREE.SpotLight("#fff");
  spotLight.position.set(-30, 20, -15);
  spotLight.castShadow = true;
  scene.add(spotLight);

  const cameraD = 40
  camera.position.x = cameraD * Math.sin(time);
  camera.position.y = 10;
  camera.position.z = cameraD * Math.cos(time);
  camera.lookAt(scene.position);

  document.getElementById("threejs-output").appendChild(renderer.domElement);
  renderScene();

  function renderScene(){
    camera.position.x = cameraD * Math.sin(time * 0.01);
    camera.position.z = cameraD * Math.cos(time * 0.01);
    camera.lookAt(scene.position);
    requestAnimationFrame(renderScene);
    renderer.render(scene, camera)
    time += 1
  }
}

window.onload = init;