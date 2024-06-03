type CommitCubeProps = {
  posX: number;
  posY: number;
  width: number;
  count: number;
  shade: string;
};

export default function CommitCube({
  posX,
  posY,
  width,
  count,
  shade,
}: CommitCubeProps) {
  return (
    <mesh position={[posX, posY, 0]} scale={[1, 1, 1]}>
      <boxGeometry args={[width, width, width]} />
      <meshStandardMaterial color={count > 0 ? shade : "black"} />
    </mesh>
  );
}
