import { Text } from "@react-three/drei";
// import Commits from "./Commits";

export default function GithubSide() {
  return (
    <>
      <ambientLight intensity={10} />
      <Text position={[0, 0.5, -0.95]} fontSize={0.2}>
        {new Date().getFullYear()}
      </Text>
      {/* <Commits /> */}
    </>
  );
}
