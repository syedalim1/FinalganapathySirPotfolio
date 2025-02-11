import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";

const Background = () => (
  <Canvas style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}>
    <ambientLight intensity={0.5} />
    <Stars
      radius={100}
      depth={50}
      count={5000}
      factor={4}
      saturation={0}
      fade
    />
    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
  </Canvas>
);

export default Background;
