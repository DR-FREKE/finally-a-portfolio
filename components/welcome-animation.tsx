import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const BoyWavingAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  let mixer: THREE.AnimationMixer | null = null;

  useEffect(() => {
    camera.position.z = 5;
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (containerRef.current)
      containerRef.current.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load(
      "path_to_your_model/boy_model.glb",
      (gltf) => {
        const model = gltf.scene;
        scene.add(model);

        mixer = new THREE.AnimationMixer(model);
        const clipAction = mixer.clipAction(gltf.animations[0]); // Assuming the waving animation is the first animation
        clipAction.play();
      },
      undefined,
      (error) => {
        console.error("Error loading GLTF model", error);
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);
      if (mixer) mixer.update(0.01); // Update animation mixer
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (containerRef.current)
        containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} />;
};

const WelcomeAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scene: THREE.Scene,
      camera: THREE.PerspectiveCamera,
      renderer: THREE.WebGLRenderer,
      textMesh: THREE.Mesh;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (textMesh) textMesh.rotation.y += 0.01;
      if (renderer && scene && camera) renderer.render(scene, camera);
    };

    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    // Camera
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (containerRef.current)
      containerRef.current.appendChild(renderer.domElement);

    // Text
    const loader = new FontLoader();
    loader.load(
      "https://cdn.rawgit.com/mrdoob/three.js/master/examples/fonts/helvetiker_regular.typeface.json",
      function (font) {
        const textGeometry = new TextGeometry("Welcome", {
          font: font,
          size: 0.5,
          height: 0.1,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.03,
          bevelSize: 0.02,
          bevelSegments: 5,
        });
        const textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
        textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.set(-2.5, 0, 0);
        if (scene) scene.add(textMesh);

        animate();
      }
    );

    // Handle window resize
    const handleResize = () => {
      if (camera) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      }
      if (renderer) renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      if (containerRef.current && renderer)
        containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} />;
};

export default WelcomeAnimation;
