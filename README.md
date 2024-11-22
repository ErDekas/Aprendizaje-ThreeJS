# Aprendizaje-ThreeJS

---

## **Aprender Three.js Paso a Paso**  

### **1. Configuración inicial y conceptos clave (1 semana)**  

#### **Objetivo:**  
Comprender cómo funciona Three.js desde la base. Configurar tu entorno y aprender los componentes esenciales.

#### **Temas a estudiar:**  
1. **Escena (`THREE.Scene`)**  
   - Cómo crear una escena y qué papel desempeña.  
   - Práctica: Crear una escena básica sin elementos visibles aún.  

2. **Cámara (`THREE.PerspectiveCamera`)**  
   - Diferencia entre cámaras de perspectiva y ortográficas.  
   - Cómo configurar el `fov`, el `aspect ratio`, el `near` y el `far`.

3. **Renderizador (`THREE.WebGLRenderer`)**  
   - Qué es el renderizador y cómo usarlo para dibujar tu escena.  
   - Configuración básica del canvas donde se renderizará.  
   - Práctica: Renderizar un canvas vacío.

4. **Geometrías, Materiales y Meshes**  
   - Geometrías básicas (`BoxGeometry`, `SphereGeometry`, etc.).  
   - Materiales básicos como `MeshBasicMaterial` y `MeshStandardMaterial`.  
   - Combinar geometrías y materiales para crear objetos (`THREE.Mesh`).  

#### **Ejercicio práctico:**  
Crea una escena con:  
- Un cubo iluminado por una luz.  
- Una cámara que lo observe desde un ángulo.

---

### **2. Iluminación y sombras (2 semanas)**  

#### **Objetivo:**  
Dominar el sistema de iluminación de Three.js para darle realismo a tus escenas.

#### **Temas a estudiar:**  
1. **Luces básicas**  
   - `AmbientLight`: Ilumina todo de manera uniforme.  
   - `DirectionalLight`: Simula la luz del sol.  
   - `PointLight`: Fuente de luz puntual (como una bombilla).  
   - `SpotLight`: Luz en forma de cono (como un foco).  

2. **Sombras**  
   - Habilitar sombras en el renderizador (`renderer.shadowMap.enabled = true`).  
   - Configurar objetos que proyecten y reciban sombras (`castShadow` y `receiveShadow`).  
   - Práctica: Añadir un plano y una luz direccional para ver cómo se proyectan sombras.  

3. **Luces avanzadas**  
   - `HemisphereLight`: Luz ambiental que combina tonos.  
   - `RectAreaLight`: Luz rectangular para efectos realistas.  

#### **Ejercicio práctico:**  
Crea una escena con:  
- Un suelo que reciba sombras.  
- Un objeto (como una esfera) que proyecte sombras desde una luz direccional.  

---

### **3. Texturas y materiales avanzados (3 semanas)**  

#### **Objetivo:**  
Aprender a usar texturas y materiales avanzados para darle detalle y realismo a tus objetos.

#### **Temas a estudiar:**  
1. **Carga de texturas**  
   - Uso de `TextureLoader` para cargar imágenes.  
   - Mapeado UV (cómo las texturas se colocan sobre geometrías).  

2. **Tipos de texturas**  
   - **Mapas difusos**: Color básico de una superficie.  
   - **Mapas normales**: Para simular detalles sin modificar la geometría.  
   - **Mapas de desplazamiento**: Deforman físicamente la geometría.  
   - **Mapas especulares y de reflexión**: Para efectos brillantes y metálicos.  

3. **Materiales avanzados**  
   - `MeshStandardMaterial`: Compatible con luces y físicas avanzadas.  
   - `MeshPhysicalMaterial`: Más opciones para efectos realistas.  
   - Materiales personalizados con shaders.

#### **Ejercicio práctico:**  
Crea un cubo con una textura de ladrillos. Usa:  
- Un mapa difuso para el color.  
- Un mapa normal para simular la textura rugosa.  
- Un mapa de desplazamiento para crear relieves reales.  

#### **Recursos:**  
- Texturas gratis: [Poly Haven](https://polyhaven.com/textures).  

---

### **4. Modelos 3D y animaciones (4 semanas)**  

#### **Objetivo:**  
Cargar modelos complejos y darles movimiento.

#### **Temas a estudiar:**  
1. **Carga de modelos 3D**  
   - Uso de `GLTFLoader` para cargar modelos `.glb` o `.gltf`.  
   - Cómo integrar modelos de Sketchfab o Blender en tu proyecto.  

2. **Animaciones**  
   - Animar objetos simples (como un cubo girando) con el `Clock` de Three.js.  
   - Animar modelos 3D usando sus esqueletos (`SkeletonHelper`).  
   - Uso de librerías externas como GSAP para transiciones fluidas.  

#### **Ejercicio práctico:**  
Carga un modelo de avión desde Sketchfab.  
- Añade una animación para que el avión gire sobre su eje.  
- Mueve la cámara para seguir al avión mientras vuela.  

#### **Recursos:**  
- Tutorial: [Cargar modelos en Three.js](https://threejs.org/examples/#webgl_loader_gltf).  
- Librería GSAP: [Documentación de GSAP](https://greensock.com/gsap/).  

---

### **5. Física y detección de colisiones (2-3 semanas)**  

#### **Objetivo:**  
Añadir interactividad y realismo físico a tu simulador.

#### **Temas a estudiar:**  
1. **Raycaster**  
   - Uso del `Raycaster` para detectar clics y colisiones.  
   - Ejemplo: Detectar si un avión choca con otro objeto.  

2. **Integración con librerías de físicas**  
   - Usa `Cannon.js` o `Ammo.js` para añadir físicas avanzadas (gravedad, colisiones realistas, etc.).  
   - Simula el movimiento de un avión con físicas básicas.  

#### **Ejercicio práctico:**  
Crea un sistema donde un avión pueda chocar con montañas generadas aleatoriamente.  

---

### **6. Proyecto final: Simulador de Vuelo (duración flexible)**  

#### **Objetivo:**  
Aplicar todo lo aprendido en un proyecto funcional.  

1. **Estructura del proyecto**  
   - Crear un sistema de cámaras: vista desde la cabina y vista externa.  
   - Integrar texturas para cielo y nubes (usa un `Skybox`).  

2. **Interactividad**  
   - Controles de teclado y ratón para mover el avión.  
   - Detección de colisiones y animaciones de respuesta (como un efecto de choque).  

3. **Detalles adicionales**  
   - Agrega partículas para simular efectos como humo o fuego.  
   - Optimiza el rendimiento con frustum culling.  

#### **Recursos recomendados:**  
- [Curso completo de Three.js Journey](https://threejs-journey.com/) (si quieres invertir en aprendizaje).  
- Texturas para cielo: [Poly Haven Skybox](https://polyhaven.com/hdris).
