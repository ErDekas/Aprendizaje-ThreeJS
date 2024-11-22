import * as THREE from 'three';

// Crear escena
const scene = new THREE.Scene();
// Crear cámara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// Crear renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement );

// Crear geometría y material del cubo
const geometry = new THREE.BoxGeometry(1.5,1.5,1.5);
// Cambiar a MeshStandardMaterial para que responda a la iluminación
const material = new THREE.MeshStandardMaterial({
    color: 0x00ff00,
    roughness: 0.5,
    metalness: 0.1
});
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// Añadir luces
const ambientLight = new THREE.AmbientLight( 0xffffff, 0.5); // Reducida la intensidad
scene.add( ambientLight );

const pointLight = new THREE.PointLight( 0xffffff, 7.0); // Reducida la intensidad
pointLight.position.set(2, 2, 5);
scene.add( pointLight );

// Comprobar posición del punto de luz (opcional)
const lightHelper = new THREE.PointLightHelper(pointLight);
scene.add( lightHelper );

camera.position.z = 5;

// Animación del cubo
function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
}

renderer.setAnimationLoop( animate );