// Importar Three.js
import * as THREE from 'three';
// Configuración básica
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Habilitar sombras en el renderer
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Crear esfera
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.castShadow = true; // La esfera proyectará sombras
scene.add(sphere);

// Crear plano (suelo)
const planeGeometry = new THREE.PlaneGeometry(10, 10);
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0xcccccc });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
plane.position.y = -2;
plane.receiveShadow = true; // El plano recibirá sombras
scene.add(plane);

// Crear luz puntual
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(2, 3, 4);
light.castShadow = true; // La luz proyectará sombras
scene.add(light);

// Configuración de la sombra
light.shadow.mapSize.width = 512;
light.shadow.mapSize.height = 512;
light.shadow.camera.near = 0.5;
light.shadow.camera.far = 500;

// Luz ambiente suave
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// Posicionar cámara
camera.position.z = 5;
camera.position.y = 1;

// Función de animación
function animate() {
    requestAnimationFrame(animate);

    // Rotar la esfera
    sphere.rotation.y += 0.01;

    // Mover la luz en círculo
    const time = Date.now() * 0.001;
    light.position.x = Math.sin(time) * 3;
    light.position.z = Math.cos(time) * 3;
    light.position.y = 3;

    renderer.render(scene, camera);
}

// Manejar redimensionamiento de ventana
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

animate();
