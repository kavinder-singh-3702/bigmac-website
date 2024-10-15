
"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import getStarfield from "@/util/getStarfield";
import { getFresnelMat } from "@/util/getFresnelMat";

const EarthScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    const w = window.innerWidth * 0.5;
    const h = window.innerHeight * 0.8;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(44, w / h, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h);
    currentMount.appendChild(renderer.domElement);

    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

    const earthGroup = new THREE.Group();
    earthGroup.rotation.z = (-23.4 * Math.PI) / 180;
    scene.add(earthGroup);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 3;
    controls.maxDistance = 8;
    controls.enableZoom = false;

    const loader = new THREE.TextureLoader();

    const detail = 12;
    const geometry = new THREE.IcosahedronGeometry(1, detail);

    const earthMaterial = new THREE.MeshPhongMaterial({
      map: loader.load("/assets/EarthTexture/00_earthmap1k.jpg"),
      specularMap: loader.load("/assets/EarthTexture/02_earthspec1k.jpg"),
      bumpMap: loader.load("/assets/EarthTexture/01_earthbump1k.jpg"),
      bumpScale: 0.04,
    });

    const earthMesh = new THREE.Mesh(geometry, earthMaterial);
    earthGroup.add(earthMesh);

    const lightsMat = new THREE.MeshBasicMaterial({
      map: loader.load("/assets/EarthTexture/03_earthlights1k.jpg"),
      blending: THREE.AdditiveBlending,
    });
    const lightsMesh = new THREE.Mesh(geometry, lightsMat);
    earthGroup.add(lightsMesh);

    const cloudsMat = new THREE.MeshStandardMaterial({
      map: loader.load("/assets/EarthTexture/04_earthcloudmap.jpg"),
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      alphaMap: loader.load("/assets/EarthTexture/05_earthcloudmaptrans.jpg"),
    });
    const cloudsMesh = new THREE.Mesh(geometry, cloudsMat);
    cloudsMesh.scale.setScalar(1.003);
    earthGroup.add(cloudsMesh);

    const fresnelMat = getFresnelMat();
    const glowMesh = new THREE.Mesh(geometry, fresnelMat);
    glowMesh.scale.setScalar(1.01);
    earthGroup.add(glowMesh);

    const stars = getStarfield({ numStars: 2000 });
    scene.add(stars);

    const sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
    sunLight.position.set(-2, 0.5, 1.5);
    scene.add(sunLight);
    earthGroup.position.set(0, 0.5, 0);

    const animate = () => {
      requestAnimationFrame(animate);
      earthMesh.rotation.y += 0.002;
      lightsMesh.rotation.y += 0.002;
      cloudsMesh.rotation.y += 0.0023;
      glowMesh.rotation.y += 0.002;
      stars.rotation.y -= 0.0002;
      renderer.render(scene, camera);
    };
    animate();

    const handleWindowResize = () => {
      const newWidth = window.innerWidth * 0.8;
      const newHeight = window.innerHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="mt-[10vh]" />;
};

export default EarthScene;
