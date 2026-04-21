'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'
import type { GLTF } from 'three-stdlib'

function Model() {
  const gltf = useGLTF('/assets/ExportedSpline.glb') as GLTF

  return <primitive object={gltf.scene} scale={3.5} position={[0, -2, 0]} />
}

function Controls() {
  return (
    <OrbitControls
      enablePan={false}
      enableZoom={false}
      enableRotate={true}

      // ✅ lock vertical rotation (X axis / polar)
      minPolarAngle={Math.PI / 2}
      maxPolarAngle={Math.PI / 2}

      // optional: smooth feel
      enableDamping
      dampingFactor={0.08}
    />
  )
}

export default function ModelViewer() {
  return (
    <Canvas style={{ height: '400px', width: '100%' }} camera={{ position: [1, 0, 3] }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 2, 2]} />

      <Suspense fallback={null}>
        <Model />
      </Suspense>

      <Controls />
    </Canvas>
  )
}