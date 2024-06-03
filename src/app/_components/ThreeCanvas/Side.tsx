import { Environment, MeshPortalMaterial, useGLTF } from "@react-three/drei";
import type { BufferGeometry, Mesh, MeshStandardMaterial } from "three";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube: Mesh<BufferGeometry, MeshStandardMaterial>;
    SOLID002: Mesh;
  };
  materials: unknown;
};

type SideProps = {
  rotation: [number, number, number];
  bg: string;
  children?: React.ReactNode;
  index: number;
};

export function Side({
  rotation = [0, 0, 0],
  bg = "#f0f0f0",
  children,
  index,
}: SideProps) {
  const { nodes } = useGLTF("/aobox-transformed.glb") as GLTFResult;
  return (
    <MeshPortalMaterial worldUnits={false} attach={`material-${index}`}>
      {/** Everything in here is inside the portal and isolated from the canvas */}
      <ambientLight intensity={0.5} />
      <Environment files={["/hdri/potsdamer_platz_1k.hdr"]} />
      {/** A box with baked AO */}
      <mesh
        castShadow
        receiveShadow
        rotation={rotation}
        geometry={nodes.Cube.geometry}
      >
        <meshStandardMaterial
          aoMapIntensity={1}
          aoMap={nodes.Cube.material.aoMap}
          color={bg}
        />
        <spotLight
          castShadow
          color={bg}
          intensity={2}
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          shadow-normalBias={0.05}
          shadow-bias={0.0001}
        />
      </mesh>
      {children}
    </MeshPortalMaterial>
  );
}
// Impossible cube
// 6 sides -> Github, Stack, Blogs, About, Projects, Contact
// Navigation -> Rotates cube to the correct side
// How to deal with screen size?
