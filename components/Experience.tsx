"use client";

import React, { useLayoutEffect, useRef } from 'react';
import { useGLTF, useAnimations, Environment, Sparkles, ContactShadows, PerspectiveCamera, Resize, Center } from '@react-three/drei';
import { Group } from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useFrame } from '@react-three/fiber';

gsap.registerPlugin(ScrollTrigger);

useGLTF.preload('/dragon.glb');

export function Dragon(props: any) {
    const group = useRef<Group>(null);
    const { scene, animations } = useGLTF('/dragon.glb');
    const { actions } = useAnimations(animations, group);

    useLayoutEffect(() => {
        scene.traverse((child: any) => {
            if (child.isMesh) {
                const name = child.name.toLowerCase();
                if (name.includes('plane') || name.includes('floor') || name.includes('base') || name.includes('ground')) {
                    child.material.transparent = true;
                    child.material.opacity = 0;
                    child.castShadow = false;
                    child.receiveShadow = false;
                } else {
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            }
        });

        if (actions && Object.keys(actions).length > 0) {
            const firstAction = Object.values(actions)[0];
            firstAction?.reset().fadeIn(0.5).play();
        }
    }, [scene, actions]);

    return (
        <group ref={group} {...props} dispose={null}>
            <Center>
                <Resize scale={21}>
                    <primitive object={scene} />
                </Resize>
            </Center>
        </group>
    );
}

const Scene = () => {
    const camRef = useRef<any>(null);
    const tl = useRef<gsap.core.Timeline>(null);

    useFrame((state) => {
        if (camRef.current) {
            camRef.current.lookAt(0, 3, 0);
        }
    });

    useLayoutEffect(() => {
        if (!camRef.current) return;

        tl.current = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
            }
        });

        tl.current.to(camRef.current.position, {
            x: -7,
            y: 9,
            z: 12,
            duration: 1,
            ease: "power2.inOut"
        }, 0);

        tl.current.to(camRef.current.position, {
            x: 7,
            y: 6,
            z: 12,
            duration: 1,
            ease: "power2.inOut"
        }, 1);

        tl.current.to(camRef.current.position, {
            x: 0,
            y: 6,
            z: 7,
            duration: 1,
            ease: "power2.inOut"
        }, 2);

        tl.current.to(camRef.current.position, {
            x: -7,
            y: 4,
            z: 10,
            duration: 1,
            ease: "power2.inOut"
        }, 3);

        return () => {
            tl.current?.kill();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <group>
            <PerspectiveCamera
                makeDefault
                ref={camRef}
                position={[0, 0, 14]}
                fov={35}
            />

            <ambientLight intensity={2.0} />

            <spotLight
                position={[5, 10, 5]}
                angle={0.4}
                penumbra={1}
                intensity={80}
                color="#ff6600"
                castShadow
            />

            <spotLight
                position={[-5, 5, -5]}
                angle={0.5}
                penumbra={1}
                intensity={60}
                color="#0088ff"
            />

            <Sparkles count={50} scale={10} size={6} speed={0.4} opacity={0.5} color="#ffaa00" />

            <group position={[0, 3, 0]}>
                <Dragon />
                <ContactShadows opacity={0.8} scale={30} blur={3} far={4} />
            </group>

            <Environment preset="city" background={false} />
        </group>
    );
};

export const Experience = () => {
    return <Scene />;
};
