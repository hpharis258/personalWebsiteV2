import React from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props){
    const gltf = useGLTF('/macbook_pro_2021/scene.gltf');
    return(
        <mesh scale={10}>
            <primitive object={gltf.scene} />
        </mesh>
    );
}
