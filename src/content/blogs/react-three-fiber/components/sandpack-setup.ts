"use client";
export const canvas_file = `import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { MyMesh } from "./my-mesh";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "white" }}>
        <Canvas>
            <OrbitControls />
            <MyMesh />
        </Canvas>
    </div>
  );
}`;

export const my_mesh_three_texture_loader = `import * as THREE from "three";
export function MyMesh() {
    const texture = new THREE.TextureLoader().load("https://raw.githubusercontent.com/AaronClaes/my-site/main/public/react.webp");
            
    return (
        <mesh>
            <boxGeometry />
            <meshBasicMaterial map={texture} />
        </mesh>
    );
}`;

export const my_mesh_three_texture_loader_re_render = `import * as THREE from "three";
import { useState } from "react";

export function MyMesh() {
    const [scale, setScale] = useState(1);
    const texture = new THREE.TextureLoader().load("https://raw.githubusercontent.com/AaronClaes/my-site/main/public/react.webp");
  
    const handleClick = () => setScale(p => p + 0.1);
  
    return (
      <mesh onClick={handleClick} scale={scale}>
        <boxGeometry />
        <meshBasicMaterial map={texture} />
      </mesh>
    );
  }`;

export const my_mesh_use_loader = `import * as THREE from "three";
  import { useLoader } from "@react-three/fiber";
  import { useState } from "react";
  
  export function MyMesh() {
      const [scale, setScale] = useState(1);
      const texture = useLoader(THREE.TextureLoader, "https://raw.githubusercontent.com/AaronClaes/my-site/main/public/react.webp");
    
      const handleClick = () => setScale(p => p + 0.1);
    
      return (
        <mesh onClick={handleClick} scale={scale}>
          <boxGeometry />
          <meshBasicMaterial map={texture} />
        </mesh>
      );
    }`;

export const use_loader_on_click_canvas = `import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { MyScene } from "./my-scene";
    
export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "white" }}>
        <Canvas>
            <OrbitControls />
            <MyScene />
        </Canvas>
    </div>
  );
}`;

export const my_scene_use_loader_on_click = `import { useState } from "react";
import { ReactCube } from "./react-cube";
import { ThreeCube } from "./three-cube";
  
export function MyScene() {
  const [cubeVisible, setCubeVisible] = useState(false);
    
  const handleClick = () => setCubeVisible(p => !p);
    
  return (
    <>
      <ReactCube onClick={handleClick} />
      {cubeVisible && <ThreeCube />}
    </>
  );
}`;

export const my_scene_use_loader_on_click_suspense = `import { useState, Suspense } from "react";
import { ReactCube } from "./react-cube";
import { ThreeCube } from "./three-cube";
  
export function MyScene() {
  const [cubeVisible, setCubeVisible] = useState(false);
    
  const handleClick = () => setCubeVisible(p => !p);
    
  return (
    <>
      <ReactCube onClick={handleClick} />
      <Suspense>{cubeVisible && <ThreeCube />}</Suspense>
    </>
  );
}`;

export const my_scene_on_click_react_cube = `import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

export function ReactCube(props) {    
  const texture = useLoader(THREE.TextureLoader, "https://raw.githubusercontent.com/AaronClaes/my-site/main/public/react.webp");

  return (
    <mesh position={[-1, 0, 0]} {...props}>
      <boxGeometry />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}`;

export const my_scene_on_click_three_cube = `import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

export function ThreeCube(props) {    
  const texture = useLoader(THREE.TextureLoader, "https://raw.githubusercontent.com/AaronClaes/my-site/main/public/three.png");

  return (
    <mesh position={[1, 0, 0]} {...props}>
      <boxGeometry />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}`;

export const my_mesh_use_loader_switch_texture = `import * as THREE from "three";
import { useState } from "react";
import { useLoader } from "@react-three/fiber";

const maps = [
  "/react.webp",
  "/three.png",
  "/pmndrs.jpg",
  "/vsc.png",
  "/github.webp",
];

export function MyMesh() {
  const [index, setIndex] = useState(0);
  const texture = useLoader(THREE.TextureLoader, "https://raw.githubusercontent.com/AaronClaes/my-site/main/public" + maps[index]);

  return (
    <mesh
      position={[0, 0, 0]}
      onClick={() => setIndex((p) => (p + 1) % maps.length)}
    >
      <boxGeometry />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}`;

export const my_mesh_use_loader_switch_texture_use_transition = `import * as THREE from "three";
import { useEffect, useState, useTransition } from "react";
import { useLoader } from "@react-three/fiber";

const maps = [
  "/react.webp",
  "/three.png",
  "/pmndrs.jpg",
  "/vsc.png",
  "/github.webp",
];

export function MyMesh() {
  const [index, setIndex] = useState(0);
  const [mapPath, setMapPath] = useState(maps[index]);
  const [isPending, startTransition] = useTransition();
  const texture = useLoader(THREE.TextureLoader, "https://raw.githubusercontent.com/AaronClaes/my-site/main/public" + mapPath);

  useEffect(() => {
    startTransition(() => {
      setMapPath(maps[index]);
    });
  }, [index]);

  return (
    <mesh
      position={[0, 0, 0]}
      onClick={() => setIndex((p) => (p + 1) % maps.length)}
    >
      <boxGeometry />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}`;

export const my_mesh_use_loader_switch_texture_use_deferred_value = `import * as THREE from "three";
import { useState, useDeferredValue } from "react";
import { useLoader } from "@react-three/fiber";

const maps = [
  "/react.webp",
  "/three.png",
  "/pmndrs.jpg",
  "/vsc.png",
  "/github.webp",
];

export function MyMesh() {
  const [index, setIndex] = useState(0);
  const mapPath = useDeferredValue("https://raw.githubusercontent.com/AaronClaes/my-site/main/public" + maps[index]);
  const texture = useLoader(THREE.TextureLoader, mapPath);

  return (
    <mesh
      position={[0, 0, 0]}
      onClick={() => setIndex((p) => (p + 1) % maps.length)}
    >
      <boxGeometry />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}`;
