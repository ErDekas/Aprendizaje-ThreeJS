// Importar Three.js
import * as THREE from 'three';
// Configuración inicial
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000);
document.body.appendChild(renderer.domElement);

// Agregar luz ambiental
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Agregar luz direccional
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Crear el cubo
const geometry = new THREE.BoxGeometry();

// Cargar la textura
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load(
    'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/examples/textures/brick_diffuse.jpg',
    function(texture) {
        // Configurar repetición de la textura
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(2, 2); // Repetir la textura 2 veces en cada dirección
    }
);

// Crear el material con la textura
const material = new THREE.MeshPhongMaterial({ 
    map: texture,
    shininess: 30
});

// Crear el mesh (combinación de geometría y material)
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Posicionar la cámara
camera.position.z = 2;

// Función de animación
function animate() {
    requestAnimationFrame(animate);

    // Rotar el cubo
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;

    renderer.render(scene, camera);
}

// Manejar el redimensionamiento de la ventana
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

animate();