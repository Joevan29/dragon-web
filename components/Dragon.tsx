"use client";

import React, { useLayoutEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function Dragon(props: any) {
    const { scene, animations } = useGLTF('/dragon.glb');
    const { actions } = useAnimations(animations, scene);

    useLayoutEffect(() => {
        if (actions && Object.keys(actions).length > 0) {
            const firstAction = Object.values(actions)[0];
            firstAction?.reset().fadeIn(0.5).play();
        }
    }, [actions]);

    return <primitive object={scene} {...props} />;
}

useGLTF.preload('/dragon.glb');
