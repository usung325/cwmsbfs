import React, { useRef } from 'react'
import { vertex, fragment } from './shader'
import { useTexture, useAspect } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Model() {

    const plane = useRef();
    // let tick = 100.;

    const texture = useTexture('/images/im1.jpg');
    const width = window.innerWidth;
    const height = window.innerHeight;
    const scale = useAspect(
        width,
        height,
        1
    );


    useFrame((state) => {
        let tick = state.clock.getElapsedTime();
        plane.current.material.uniforms.iTime.value = tick + 20;
        plane.current.material.uniforms.uTexture.value = texture;

    })


    const uniforms = useRef({
        uTexture: { value: texture },
        iTime: {
            type: "f",
            value: 1.0,
        },
        iResolution: {
            type: "v2",
            value: new THREE.Vector2(10, 10),
        },
    });



    return (
        <mesh ref={plane} scale={scale}>
            <planeGeometry args={[1, 1, 64, 64]} />
            <shaderMaterial
                vertexShader={vertex}
                fragmentShader={fragment}
                uniforms={uniforms.current}
                wireframe={false}
            />
        </mesh>
    )
}