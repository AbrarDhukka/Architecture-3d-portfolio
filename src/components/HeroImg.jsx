import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

const HeroImg = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let mixer;
    const clock = new THREE.Clock();

    const init = () => {
      const container = containerRef.current;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xbfe3dd);

      const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100);
      camera.position.set(5, 2, 8);

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      const pmremGenerator = new THREE.PMREMGenerator(renderer);

      const roomEnvironment = new RoomEnvironment();
      scene.environment = pmremGenerator.fromScene(roomEnvironment, 0.04).texture;

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.target.set(0, 0.5, 0);
      controls.update();
      controls.enablePan = false;
      controls.enableDamping = true;

      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath('../assets/gltf/');

      const loader = new GLTFLoader();
      loader.setDRACOLoader(dracoLoader);
      loader.load('../assets/LittlestTokyo.glb', (gltf) => {
        const model = gltf.scene;
        model.position.set(1, 1, 0);
        model.scale.set(0.01, 0.01, 0.01);
        scene.add(model);

        mixer = new THREE.AnimationMixer(model);
        mixer.clipAction(gltf.animations[0]).play();

        animate();
      }, undefined, (e) => {
        console.error(e);
      });

      window.addEventListener('resize', handleResize);

      function handleResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }

      function animate() {
        requestAnimationFrame(animate);

        const delta = clock.getDelta();

        mixer.update(delta);

        controls.update();

        renderer.render(scene, camera);
      }

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    };

    init();
  }, []);

  return (
    <div>
      <div id="container" ref={containerRef}></div>
      <div id="info">
        <a href="https://threejs.org" target="_blank" rel="noopener">
          three.js
        </a>{' '}
        webgl - animation - keyframes<br />
        Model:{' '}
        <a href="https://artstation.com/artwork/1AGwX" target="_blank" rel="noopener">
          Littlest Tokyo
        </a>{' '}
        by{' '}
        <a href="https://artstation.com/glenatron" target="_blank" rel="noopener">
          Glen Fox
        </a>
        , CC Attribution.
      </div>
    </div>
  );
};

export default HeroImg;
