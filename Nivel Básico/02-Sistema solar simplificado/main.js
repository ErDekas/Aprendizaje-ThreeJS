// Importar Three.js
import * as THREE from 'three';

// Crear la escena, la cámara y el renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Sistema de iluminación mejorado
// Luz central (sol)
const sunLight = new THREE.PointLight(0xffffff, 1.5, 100);
sunLight.position.set(0, 0, 0);
scene.add(sunLight);

// Luz ambiente general
const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambientLight);

// Luces direccionales desde diferentes ángulos
const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.3);
dirLight1.position.set(1, 1, 1);
scene.add(dirLight1);

const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.3);
dirLight2.position.set(-1, -1, -1);
scene.add(dirLight2);

// Crear el sol
const sunGeometry = new THREE.SphereGeometry(2, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffcc00 });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

// Función para crear planetas
function createPlanet(radius, color, orbitRadius, rotationSpeed) {
    const geometry = new THREE.SphereGeometry(radius, 32, 32);
    const material = new THREE.MeshStandardMaterial({ 
        color: color,
        roughness: 0.7,
        metalness: 0.3
    });
    const planet = new THREE.Mesh(geometry, material);
    
    const orbit = new THREE.Object3D();
    scene.add(orbit);
    orbit.add(planet);
    planet.position.set(orbitRadius, 0, 0);
    
    return { planet, orbit, rotationSpeed };
}

// Función para crear lunas
function createMoon(planet, radius, color, orbitRadius, rotationSpeed) {
    const geometry = new THREE.SphereGeometry(radius, 32, 32);
    const material = new THREE.MeshStandardMaterial({ 
        color: color,
        roughness: 0.8,
        metalness: 0.2
    });
    const moon = new THREE.Mesh(geometry, material);
    
    const orbit = new THREE.Object3D();
    planet.add(orbit);
    orbit.add(moon);
    moon.position.set(orbitRadius, 0, 0);
    
    return { moon, orbit, rotationSpeed };
}

// Crear planetas
const planets = [
    createPlanet(0.3, 0x897C6C, 3, 0.015),    // Mercurio
    createPlanet(0.4, 0xC19E7A, 4, 0.012),    // Venus
    createPlanet(0.5, 0x0000ff, 5, 0.01),     // Tierra
    createPlanet(0.4, 0xff4400, 6.5, 0.008),  // Marte
    createPlanet(1.2, 0xD39C7E, 9, 0.005),    // Júpiter
    createPlanet(1.0, 0xE6B880, 11, 0.004),   // Saturno
    createPlanet(0.7, 0x73AFAF, 13, 0.003),   // Urano
    createPlanet(0.7, 0x4B70DD, 15, 0.002)    // Neptuno
];

// Crear lunas para algunos planetas
const moons = [
    createMoon(planets[2].planet, 0.2, 0x888888, 1, 0.05),    // Luna de la Tierra
    createMoon(planets[4].planet, 0.15, 0x888888, 1.8, 0.03), // Luna de Júpiter
    createMoon(planets[5].planet, 0.12, 0x888888, 1.5, 0.04)  // Luna de Saturno
];

// Añadir anillos a Saturno
const saturnRings = new THREE.Mesh(
    new THREE.RingGeometry(1.3, 1.8, 32),
    new THREE.MeshStandardMaterial({ 
        color: 0xE6B880,
        side: THREE.DoubleSide,
        opacity: 0.7,
        transparent: true,
        roughness: 0.9,
        metalness: 0.1
    })
);
saturnRings.rotation.x = Math.PI / 2;
planets[5].planet.add(saturnRings);

// Posicionar la cámara
camera.position.z = 20;

// Animar el sistema solar
function Animation() {
    requestAnimationFrame(Animation);

    // Rotación del sol
    sun.rotation.y += 0.005;

    // Rotación de planetas
    planets.forEach(({ planet, orbit, rotationSpeed }) => {
        orbit.rotation.y += rotationSpeed;
        planet.rotation.y += 0.02;
    });

    // Rotación de lunas
    moons.forEach(({ orbit, rotationSpeed }) => {
        orbit.rotation.y += rotationSpeed;
    });

    renderer.render(scene, camera);
}

Animation();