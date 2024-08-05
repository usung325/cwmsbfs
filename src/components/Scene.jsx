import React from 'react'
import { Canvas } from '@react-three/fiber'
import Model from './Model'
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import WhiteVignette from './WhiteVignette'

export default function Scene() {
    return (
        <div className="w-screen h-screen">
            <Canvas
                className="w-full h-full"
                camera={{ fov: 50, position: [0, 0, 1.4] }}
            >
                <Model />
                <WhiteVignette intensity={5.0} />
            </Canvas>
        </div>
    )
}