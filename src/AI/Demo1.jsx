import React from 'react';
import {Canvas} from 'react-three-fiber'
import {OrbitControls} from '@react-three/drei';

import "./demo.css";

function Box() {
    return(
        <mesh>
            <boxBufferGeometry attach='geometry'/>
            <meshBasicMaterial attach='matrial' color="hotpink" />
        </mesh>
    )
}

const Demo = () => {
    return (
        <>
        <h1 className="sm-2"> we are here to say</h1>
        <div className="holder">
            <Canvas>
            <OrbitControls>
            <Box/>
            </OrbitControls>
            </Canvas>
        </div>
        </>
    );
}

//export default Demo;
import { useRef , Suspense} from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import { useGLTF, PresentationControls, Environment, ContactShadows, Html } from '@react-three/drei'


export default function Thefknai() {
  return (
    <>
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 80 }}>
    <Suspense>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
        
        <Watch rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.25, 0]} scale={0.003} />
      </PresentationControls>
      <ContactShadows rotation-x={Math.PI / 2} position={[0, -1.4, 0]} opacity={0.75} width={10} height={10} blur={2.6} far={2} />
      <Environment preset="city" />
      </Suspense>
    </Canvas>
    <Loader/>
    </>
  )
}

function Watch(props) {
  const ref = useRef()
  const { nodes, materials } = useGLTF('./watch-v1.glb')
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8
    ref.current.rotation.y = Math.sin(t / 4) / 8
    ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh geometry={nodes.Object005_glass_0.geometry} material={materials.glass}>
        <Html scale={100} rotation={[Math.PI / 2, 0, 0]} position={[180, -350, 50]} transform occlude>
          <div className="annotation">
            6.550 $ <span style={{ fontSize: '1.5em' }}>🥲</span>
          </div>
        </Html>
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Object006_watch_0.geometry} material={materials.watch} />
    </group>
  )
}
