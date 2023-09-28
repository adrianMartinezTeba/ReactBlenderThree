import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import './ModelViewer.scss';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const ModelViewer = ({ url, escala, ind }) => {
  const loader = new GLTFLoader();
  const containerRef = useRef(null);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Cambiado el aspect ratio
  const renderer = new THREE.WebGLRenderer();
  const controls = new OrbitControls(camera, renderer.domElement);

  // Crear cuatro luces SpotLight con color blanco cálido
  const lights = [];

  for (let i = 0; i < 4; i++) {
    const light = new THREE.SpotLight(0xffffff);
    light.intensity = 10; // Puedes ajustar la intensidad según tus preferencias
    light.position.set(
      Math.pow(-1, i) * 1.5, // Posiciones X de las luces en las esquinas del cubo imaginario
      Math.pow(-1, Math.floor(i / 2)) * 1.5, // Posiciones Y de las luces
      Math.pow(-1, Math.floor(i / 4)) * 1.5 // Posiciones Z de las luces
    );
    lights.push(light);
    scene.add(light);
  }

  useEffect(() => {
    const container = containerRef.current;
    camera.position.set(0, 0, 2);
    // scene.rotation.set(0,0,0)
    // scene.rotation.set(0,360,0)
    // scene.rotation.set(0,180,0)
    // scene.rotation.set(0,-180,0)
    // scene.rotation.set(0,-360,0)
    // scene.rotation.set(0,Math.PI,0)
    // scene.rotation.set(0, Math.PI*2, 0);
    // scene.rotation.set(0, 2, 0);
    // scene.rotation.set(0, 0.8, 0);
    scene.rotation.set(0.2, -0.5, 0);




    // Configuración del renderer
    if (ind) {
      // Si es vista individual, ocupa toda la pantalla
      renderer.setSize(500, 500);
    } else {
      // Si es vista de catálogo, usa un tamaño fijo
      renderer.setSize(300, 300);
    }
    container.appendChild(renderer.domElement);

    loader.load(url, function (gltf) {
      console.log(gltf);
      console.log(gltf.scene);

      // Escalar el objeto cargado
      const model = gltf.scene;
      if (escala !== undefined) {
        model.scale.set(escala, escala, escala); // Usa la escala personalizada si está definida
      } else {
        model.scale.set(0.08, 0.08, 0.08); // Escala predeterminada
      }
      scene.add(model);
      controls.enableDamping = true; // Habilita el amortiguamiento para movimientos suaves
      controls.dampingFactor = 0.25; // Factor de amortiguamiento (ajusta según tus preferencias)
      controls.rotateSpeed = 0.3; // Velocidad de rotación (ajusta según tus preferencias)
      controls.zoomSpeed = 1;
      controls.minPolarAngle = 0; // Permite mirar hacia arriba
      controls.maxPolarAngle = Math.PI; // Permite mirar hacia abajo
    }, undefined, function (error) {
      console.error(error);
    });
 // Generar un color de fondo aleatorio
 const randomColor = Math.random() * 0xffffff;
    renderer.setClearColor(randomColor); // Cambiar el color de fondo

    const animate = () => {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    };

    animate();
  }, [url, escala, ind]); // Agrega "ind" como dependencia

  return (
    <div className='model-container'>
      <div ref={containerRef} className='blen' />
    </div>
  );
};

export default ModelViewer;
