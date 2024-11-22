// Importar Three.js
import * as THREE from 'three';
// Crear la escena, la cámara y el renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0xffffff );
document.body.appendChild( renderer.domElement );

// Crear una fuente de luz
const light = new THREE.PointLight( 0xffffff, 1.5, 100 );
light.position.set( 0, 0, 0 );
scene.add( light );

// Crear el sol
const sunGeometry = new THREE.SphereGeometry( 2, 32, 32 );
const sunMaterial = new THREE.MeshBasicMaterial( { color: 0xffcc00 } );
const sun = new THREE.Mesh( sunGeometry, sunMaterial );
scene.add( sun );

// Crear un planeta
const planetGeometry = new THREE.SphereGeometry( 0.5, 32, 32 );
const planetMaterial = new THREE.MeshStandardMaterial( { color: 0x0000ff } );
const planet = new THREE.Mesh( planetGeometry, planetMaterial );

// Crear la órbita del planeta
const planetOrbitRadius = 5;
const planetOrbit = new THREE.Object3D();
scene.add( planetOrbit );
planetOrbit.add( planet );
planet.position.set(planetOrbitRadius, 0, 0);

// Crear una luna
const moonGeometry = new THREE.SphereGeometry( 0.2, 32, 32 );
const moonMaterial = new THREE.MeshStandardMaterial( { color: 0x888888 } );
const moon = new THREE.Mesh( moonGeometry, moonMaterial );

// Crear la órbita de la luna
const moonOrbitRadius = 1.5;
const moonOrbit = new THREE.Object3D();
planet.add( moonOrbit );
moonOrbit.add( moon );
moon.position.set(moonOrbitRadius, 0, 0);

// Posicionar la cámara
camera.position.z = 15;

// Animar el sistema solar
function Animation(){
    requestAnimationFrame(Animation);

    // Rotaciones
    sun.rotation.y += 0.005;
    planetOrbit.rotation.y += 0.01;
    moonOrbit.rotation.y += 0.05;

    renderer.render(scene, camera);
}

Animation();