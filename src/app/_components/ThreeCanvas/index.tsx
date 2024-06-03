"use client";

import { useGSAP } from "@gsap/react";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import gsap from "gsap";
import type { Mesh } from "three";
import { Edges, OrbitControls } from "@react-three/drei";
import { Side } from "./Side";
import { useAppStore, type SideOption } from "@/stores/appstore";
import GithubSide from "./Sides/GithubSide";

gsap.registerPlugin(useGSAP);

function handleRotation(side: SideOption): [number, number, number] {
  switch (side) {
    case "front":
      return [0, 0, 0];
    case "back":
      return [0, Math.PI, 0];
    case "left":
      return [0, Math.PI / 2, Math.PI / 2];
    case "right":
      return [0, Math.PI / 2, -Math.PI / 2];
    case "top":
      return [0, -Math.PI / 2, 0];
    case "bottom":
      return [0, Math.PI / 2, 0];
  }
}

export default function ThreeCanvas() {
  const activeSide = useAppStore((state) => state.activeSide);
  const cubeRef = useRef<Mesh>(null);

  useGSAP(() => {
    if (!cubeRef.current) return;
    const rotation = handleRotation(activeSide);
    const tl = gsap.timeline();
    // Refs allow you to access DOM nodes
    tl.to(cubeRef.current.position, {
      x: 0,
      y: 0,
      z: -2,
      duration: 1,
    });

    tl.to(
      "#canvas-corners",
      {
        scale: 1.05,
        duration: 1.05,
      },
      0,
    );

    // then we can animate them like so...
    tl.to(
      cubeRef.current.rotation,
      {
        x: rotation[0],
        y: rotation[1],
        z: rotation[2],
        duration: 1,
      },
      0.25,
    );

    tl.to(
      cubeRef.current.position,
      {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.75,
      },
      1,
    );

    tl.to(
      "#canvas-corners",
      {
        scale: 1,
        duration: 0.75,
      },
      1,
    );
  }, [activeSide]);
  return (
    <>
      <Canvas
        camera={{ position: [0, 0, 4.15], fov: 35 }}
        resize={{ debounce: 10 }}
      >
        <OrbitControls />
        <mesh ref={cubeRef}>
          <boxGeometry args={[2, 2, 2]} />
          <Edges lineWidth={0} />
          <Side rotation={[0, -Math.PI / 2, 0]} bg="#1f1f1f" index={4}>
            <Suspense>
              <GithubSide />
            </Suspense>
          </Side>
          <Side rotation={[0, 0, 0]} bg="orange" index={0}>
            {/* Home  */}
          </Side>
          <Side rotation={[0, Math.PI, 0]} bg="lightblue" index={1}>
            {/* Projects */}
          </Side>
          <Side
            rotation={[0, Math.PI / 2, Math.PI / 2]}
            bg="lightgreen"
            index={2}
          >
            {/* Skills */}
          </Side>
          <Side
            rotation={[0, Math.PI / 2, -Math.PI / 2]}
            bg="aquamarine"
            index={3}
          >
            {/* Contact */}
          </Side>
          <Side rotation={[0, Math.PI / 2, 0]} bg="hotpink" index={5}>
            {/* About */}
          </Side>
        </mesh>
      </Canvas>
    </>
  );
}
