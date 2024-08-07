

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('models/island/Floating Port-transformed.glb')
  return (
    <group scale={2} {...props} dispose={null}>
      <group position={[0.09, 2.02, 4.64]} scale={1.33}>
        <mesh castShadow receiveShadow geometry={nodes.Bamboo_1.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-10.81, 2.67, -1.92]} />
        <mesh castShadow receiveShadow geometry={nodes['Bamboo_1_(1)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[5.75, 2.67, -8.01]} />
        <mesh castShadow receiveShadow geometry={nodes['Bamboo_1_(2)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[2.74, 2.67, 7.04]} />
        <mesh castShadow receiveShadow geometry={nodes.Bamboo_2.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-9.41, 2.67, 3.86]} />
      </group>
      <group position={[0.09, 2.02, 4.64]} scale={1.33}>
        <mesh castShadow receiveShadow geometry={nodes.Box_1.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-2.73, 2.75, 0.04]} rotation={[Math.PI, -0.94, -Math.PI]} />
        <mesh castShadow receiveShadow geometry={nodes['Box_(1)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-2.74, 2.75, 0.27]} rotation={[Math.PI, -0.14, -Math.PI]} />
        <mesh castShadow receiveShadow geometry={nodes.Boat.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-4.49, 2.57, 7.54]} rotation={[0, -0.48, 0]} />
      </group>
      <group position={[0.09, 2.02, 4.64]} scale={1.33}>
        <mesh castShadow receiveShadow geometry={nodes.Bridge_1_1.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-3.67, 2.59, 6.53]} scale={0.61} />
      </group>
      <group position={[0.09, 2.02, 4.64]} scale={1.33}>
        <mesh castShadow receiveShadow geometry={nodes.Grass_1.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-7.73, 2.63, -2.58]} rotation={[1.45, 0, 2.33]} />
        <mesh castShadow receiveShadow geometry={nodes['Grass_(1)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-6.61, 2.8, -1.87]} rotation={[1.56, 0.02, 2.37]} />
        <mesh castShadow receiveShadow geometry={nodes['Grass_(2)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-5.77, 2.75, -3.11]} rotation={[1.56, 0.02, 2.37]} />
        <mesh castShadow receiveShadow geometry={nodes['Grass_(3)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-4.69, 2.75, -1.48]} rotation={[1.56, 0.02, 2.37]} />
        <mesh castShadow receiveShadow geometry={nodes['Grass_(4)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-3.24, 2.75, -0.52]} rotation={[1.56, 0.02, 2.37]} />
        <mesh castShadow receiveShadow geometry={nodes['Grass_(5)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-0.34, 2.75, -2.37]} rotation={[1.45, 0, 2.33]} />
        <mesh castShadow receiveShadow geometry={nodes['Grass_(6)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-2.19, 2.75, -2.39]} rotation={[1.56, 0.02, 2.37]} />
        <mesh castShadow receiveShadow geometry={nodes['Grass_(7)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-0.46, 2.75, -4.02]} rotation={[1.56, 0.02, 2.37]} />
        <mesh castShadow receiveShadow geometry={nodes['Grass_(8)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[0.29, 2.75, -3.42]} rotation={[1.56, 0.02, 2.37]} />
        <mesh castShadow receiveShadow geometry={nodes['Grass_(9)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-2.5, 2.75, -4.57]} rotation={[1.56, 0.02, 2.37]} />
        <mesh castShadow receiveShadow geometry={nodes['Grass_(10)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-2.73, 2.75, -4.46]} rotation={[1.56, 0.02, 2.37]} />
        <mesh castShadow receiveShadow geometry={nodes['Grass_(11)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[0.49, 2.64, -6.04]} rotation={[1.56, 0.02, 2.37]} />
        <mesh castShadow receiveShadow geometry={nodes['Grass_(12)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[1.66, 2.75, -4.21]} rotation={[1.56, 0.02, 2.37]} />
        <mesh castShadow receiveShadow geometry={nodes['Grass_(13)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[1.85, 2.75, -4.34]} rotation={[1.56, 0.02, 2.37]} />
        <mesh castShadow receiveShadow geometry={nodes['Grass_(14)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[2.35, 2.75, -3.1]} rotation={[1.56, 0.02, 2.37]} />
        <mesh castShadow receiveShadow geometry={nodes['Grass_(15)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[2.54, 2.75, -3.23]} rotation={[1.56, 0.02, 2.37]} />
        <mesh castShadow receiveShadow geometry={nodes['Grass_(16)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[3.36, 2.75, -2.32]} rotation={[1.56, 0.02, 2.37]} />
        <mesh castShadow receiveShadow geometry={nodes['Grass_(17)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[3.56, 2.75, -2.45]} rotation={[1.56, 0.02, 2.37]} />
        <mesh castShadow receiveShadow geometry={nodes['Grass_(18)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[1.58, 2.75, -1.41]} rotation={[1.56, 0.02, 2.37]} />
        <mesh castShadow receiveShadow geometry={nodes['Grass_(19)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[1.99, 2.75, -0.42]} rotation={[1.56, 0.02, 2.37]} />
        <mesh castShadow receiveShadow geometry={nodes['Grass_(20)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[5.1, 2.62, -4.71]} rotation={[1.56, 0.02, 2.37]} />
        <mesh castShadow receiveShadow geometry={nodes['Grass_(21)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-5.24, 2.75, 1.46]} rotation={[1.56, 0.02, 2.37]} />
        <mesh castShadow receiveShadow geometry={nodes['Grass_(22)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-5.04, 2.75, 1.34]} rotation={[1.56, 0.02, 2.37]} />
        <mesh castShadow receiveShadow geometry={nodes['Grass_(23)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-3.59, 2.75, 2.52]} rotation={[1.56, 0.02, 2.37]} />
        <mesh castShadow receiveShadow geometry={nodes['Grass_(24)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-7.06, 2.63, -5.21]} rotation={[1.45, 0, 2.33]} />
      </group>
      <group position={[0.09, 2.02, 4.64]} scale={1.33}>
        <mesh castShadow receiveShadow geometry={nodes['Fire_Wood_&_Stone'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-7.45, 2.56, -4.3]} rotation={[-0.5, -0.51, -0.48]} scale={1.04} />
        <mesh castShadow receiveShadow geometry={nodes.Rock_1.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[6.17, 3.91, 6.88]} scale={1.42} />
        <mesh castShadow receiveShadow geometry={nodes.Rock_3.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-7.14, 2.61, -4.74]} rotation={[0, -0.87, 0]} scale={1.06} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_3_(1)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-11.26, 2.41, -1.12]} rotation={[0, -0.87, 0]} scale={1.46} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_3_(2)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[0.96, 2.5, -6.22]} rotation={[Math.PI, -0.17, -Math.PI]} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_3_(3)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-6.01, 2.55, -4.34]} rotation={[0, -0.87, 0]} />
        <mesh castShadow receiveShadow geometry={nodes.Rock_4.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[3.63, 2.63, -2.15]} rotation={[0, -0.97, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_4_(1)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[3.03, 2.65, -3.82]} rotation={[0, -0.63, 0]} scale={2.56} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_4_(2)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[3.85, 2.69, -2.15]} rotation={[0, 0.6, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_4_(5)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-7.78, 2.49, -5.03]} rotation={[0, -0.63, 0]} scale={1.13} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_4_(6)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-7.4, 2.49, -3.59]} rotation={[0.01, 0.57, -0.06]} scale={3.36} />
        {/* <mesh castShadow receiveShadow geometry={nodes.Rock_5.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[3, 2.55, -5.94]} rotation={[2.93, 0.52, 2.91]} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_5_(1)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[2.32, 2.4, -9.32]} rotation={[2.93, 0.52, 2.91]} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_5_(2)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[8.72, 2.36, -4.59]} rotation={[2.84, 0.98, -3.05]} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_5_(3)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-0.22, 2.68, -1.52]} rotation={[2.84, 0.98, -3.05]} scale={0.38} />
        <mesh castShadow receiveShadow geometry={nodes.Rock_6.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[2.7, 2.53, -6.6]} rotation={[2.93, 0.52, 2.91]} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_6_(1)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-0.4, 2.69, -1.65]} rotation={[2.69, 1.15, -2.82]} scale={0.39} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_6_(2)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-0.74, 2.72, -2.17]} rotation={[2.93, 0.52, 2.91]} scale={0.3} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_6_(3)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[7.77, 2.35, -4.55]} rotation={[2.93, 0.52, 2.91]} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_6_(4)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-0.58, 2.73, -2.32]} rotation={[3.05, -0.54, 2.56]} scale={0.47} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_6_(5)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[8.4, 2.51, -5.52]} rotation={[2.8, 0.25, 2.57]} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_6_(6)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[2.44, 2.68, -1.3]} rotation={[0.12, 0.84, -0.63]} scale={0.47} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_6_(7)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-7.33, 2.35, -6.35]} rotation={[2.93, 0.52, 2.91]} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_6_(8)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-11.64, 2.35, -1.52]} rotation={[2.93, 0.52, 2.91]} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_6_(9)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[2.25, 2.38, -9.84]} rotation={[2.93, 0.52, 2.91]} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_6_(10)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-0.52, 2.67, -1.79]} rotation={[2.45, -0.64, 2.09]} scale={0.47} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_6_(11)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[2.17, 2.64, -2.09]} rotation={[0.89, 0.86, -1.34]} scale={0.64} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_6_(12)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[2.53, 2.67, -1.66]} rotation={[0.18, -0.23, -0.29]} scale={0.47} />
        <mesh castShadow receiveShadow geometry={nodes.Rock_7.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[3.93, 2.68, 1.41]} rotation={[0, 0.6, 0]} />
        <mesh castShadow receiveShadow geometry={nodes.Rock_8.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[2.85, 2.37, -9.67]} rotation={[1.28, 1.43, -1.2]} scale={1.24} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_8_(1)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-0.38, 2.68, -1.53]} rotation={[2.93, 0.52, 2.91]} scale={0.47} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_8_(2)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-0.63, 2.74, -2.04]} rotation={[2.33, -0.72, 1.95]} scale={0.47} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_8_(3)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-0.69, 2.75, -2.37]} rotation={[2.93, 0.52, 2.91]} scale={0.47} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_8_(4)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[7.97, 2.45, -5.11]} rotation={[2.69, 1.15, -2.82]} scale={1.2} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_8_(5)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-0.37, 2.73, -1.9]} rotation={[1.21, 1.28, -1.14]} scale={0.47} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_8_(6)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-0.43, 2.73, -2.03]} rotation={[0.1, -1.07, 0.18]} scale={0.47} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_8_(7)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-0.52, 2.74, -2.16]} rotation={[1.28, 1.43, -1.2]} scale={0.47} /> 
        <mesh castShadow receiveShadow geometry={nodes['Rock_8_(8)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[2, 2.71, -1.84]} rotation={[0.97, -1.23, 0.99]} scale={0.61} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_8_(9)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[2.12, 2.69, -1.73]} rotation={[3.08, 0.77, -3]} scale={0.61} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_8_(10)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[2.38, 2.71, -1.5]} rotation={[0.48, -1.28, 0.54]} scale={0.61} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_8_(11)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[2.36, 2.68, -1.78]} rotation={[0.97, 1.07, -1]} scale={0.78} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_8_(12)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[2.59, 2.69, -1.45]} rotation={[0.18, -0.23, -0.29]} scale={0.47} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_8_(13)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-7.13, 2.4, -6.9]} rotation={[2.69, 1.15, -2.82]} scale={1.57} />
        <mesh castShadow receiveShadow geometry={nodes.Rock_9.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-0.56, 2.73, -1.93]} rotation={[2.93, 0.52, 2.91]} scale={0.63} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_9_(1)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-0.26, 2.72, -1.67]} rotation={[2.9, 0.18, 2.74]} scale={0.88} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_9_(2)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-0.36, 2.73, -1.78]} rotation={[2.7, -0.37, 2.4]} scale={0.63} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_9_(3)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-0.49, 2.73, -2.22]} rotation={[2.06, 1.32, -2.08]} scale={0.47} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_9_(4)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[1.97, 2.67, -2.02]} rotation={[0.29, 0.74, -0.19]} scale={1.47} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_9_(5)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[2.23, 2.69, -1.6]} rotation={[0.5, -1.1, 0.44]} scale={1.09} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_9_(6)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[2.25, 2.69, -1.91]} rotation={[0.11, -0.24, -0.08]} scale={0.98} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_10_(1)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-7.86, 2.52, -3.41]} rotation={[-0.01, 0.22, -0.05]} scale={0.51} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_10_(2)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-7.87, 2.53, -3.81]} rotation={[2.61, 1.07, -3.04]} scale={0.79} />
        <mesh castShadow receiveShadow geometry={nodes['Rock_10_(3)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-7.11, 2.7, -0.57]} rotation={[0, -0.63, 0]} />
        <mesh castShadow receiveShadow geometry={nodes.Rock_11.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-6.49, 2.38, 5.76]} rotation={[-0.89, -0.52, 0.1]} />*/}
      </group>
      <group position={[0.09, 2.02, 4.64]} scale={1.33}>
        <mesh castShadow receiveShadow geometry={nodes.Bench.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-4.64, 2.59, -5.87]} rotation={[Math.PI / 2, 0, -1.05]} />
        <mesh castShadow receiveShadow geometry={nodes.Swimming_Chair.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-4.68, 2.66, -5.25]} rotation={[0, 0.34, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Swimming_Chair_(1)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-5.06, 2.66, -5.12]} rotation={[0, 0.16, 0]} />
        <mesh castShadow receiveShadow geometry={nodes.Umbrella.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-4.88, 2.78, -5.11]} rotation={[-2.89, 1.39, 2.66]} />
      </group>
      <group position={[0.09, 2.02, 4.64]} scale={1.33}>
        <mesh castShadow receiveShadow geometry={nodes.Top_1.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-3.03, 2.75, -4.22]} rotation={[3.06, -0.44, 2.83]} />
        <mesh castShadow receiveShadow geometry={nodes['Top_1_(1)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-6.02, 2.84, -0.15]} rotation={[3.06, -0.44, 2.83]} />
        <mesh castShadow receiveShadow geometry={nodes.Top_2.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-2.79, 2.7, 0.9]} />
        <mesh castShadow receiveShadow geometry={nodes['Top_2_(1)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-6.06, 2.8, -0.86]} />
        <mesh castShadow receiveShadow geometry={nodes.Top_3.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[1.28, 2.76, -5.15]} />
        <mesh castShadow receiveShadow geometry={nodes['Top_3_(1)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[3.37, 2.71, -2]} />
      </group>
      <group position={[0.09, 2.02, 4.64]} scale={1.33}>
        <mesh castShadow receiveShadow geometry={nodes.Tree_1.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[2.35, 2.47, 4.78]} />
        <mesh castShadow receiveShadow geometry={nodes['Tree_1_(1)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[4.2, 2.55, -5.13]} />
        <mesh castShadow receiveShadow geometry={nodes['Tree_1_(2)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[5.1, 2.38, 2.99]} />
        <mesh castShadow receiveShadow geometry={nodes['Tree_1_(3)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-7.65, 2.51, 2.61]} />
        <mesh castShadow receiveShadow geometry={nodes['Tree_1_(4)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-5.4, 2.54, 4.27]} />
        <mesh castShadow receiveShadow geometry={nodes['Tree_1_(5)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[7.91, 2.5, -1.07]} />
        <mesh castShadow receiveShadow geometry={nodes['Tree_1_(6)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[6.51, 2.59, -2.85]} />
        <mesh castShadow receiveShadow geometry={nodes.Tree_2.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[7.29, 2.49, 0.41]} />
        <mesh castShadow receiveShadow geometry={nodes['Tree_2_(1)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[6.25, 2.45, -1.94]} />
        <mesh castShadow receiveShadow geometry={nodes.Tree_3.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[4.23, 2.48, 4.76]} />
        <mesh castShadow receiveShadow geometry={nodes['Tree_3_(1)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[3.91, 2.49, -6.69]} />
        <mesh castShadow receiveShadow geometry={nodes['Tree_3_(2)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-8.07, 2.49, 1.46]} />
        <mesh castShadow receiveShadow geometry={nodes.Tree_4.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[6.69, 2.38, -4.29]} />
        <mesh castShadow receiveShadow geometry={nodes['Tree_4_(1)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-0.34, 2.41, 5.52]} />
        <mesh castShadow receiveShadow geometry={nodes.Tree_5.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[5.31, 2.56, -4.54]} />
        <mesh castShadow receiveShadow geometry={nodes['Tree_5_(1)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-6.63, 2.48, 3.46]} />
        <mesh castShadow receiveShadow geometry={nodes.Tree_6.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-9.03, 2.7, -0.01]} />
        <mesh castShadow receiveShadow geometry={nodes['Tree_6_(1)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[5.74, 2.62, -1.37]} />
        <mesh castShadow receiveShadow geometry={nodes['Tree_6_(2)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[0.91, 2.48, 4.78]} />
        <mesh castShadow receiveShadow geometry={nodes.Trunk_3.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-5.94, 2.66, -1.63]} rotation={[3.05, -0.2, -3.13]} />
        <mesh castShadow receiveShadow geometry={nodes['Trunk_3_(1)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-2.56, 2.63, 1.62]} rotation={[3.05, 0.03, -3.11]} />
        <mesh castShadow receiveShadow geometry={nodes['Trunk_3_(2)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-6.12, 2.68, -3.15]} rotation={[3.1, 0.03, -3.11]} />
      </group>
      <group position={[0.09, 2.02, 4.64]} scale={1.33}>
        <mesh castShadow receiveShadow geometry={nodes.Trunk_Wood_1.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-5.97, 2.73, 1.45]} rotation={[-1.38, 1.45, -0.16]} />
        <mesh castShadow receiveShadow geometry={nodes['Trunk_Wood_1_(1)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-6.17, 2.73, 1.47]} rotation={[-1.38, 1.45, -0.16]} />
        <mesh castShadow receiveShadow geometry={nodes['Trunk_Wood_1_(2)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-6.07, 2.83, 1.47]} rotation={[1.61, 0.04, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Trunk_Wood_1_(3)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-5.88, 2.84, 1.4]} rotation={[1.61, 0.04, 0]} />
        <mesh castShadow receiveShadow geometry={nodes.Trunk_Wood_2.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-5.75, 2.74, 1.43]} rotation={[-1.54, -0.32, 0.03]} />
        <mesh castShadow receiveShadow geometry={nodes['Trunk_Wood_2_(1)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-6.35, 2.73, 1.39]} rotation={[1.58, -0.23, -3.13]} />
      </group>
      <group position={[0.09, 2.02, 4.64]} scale={1.33}>
        <mesh castShadow receiveShadow geometry={nodes.Wood_Box_1.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-2.04, 2.78, 1.9]} rotation={[3.13, 0, 1.84]} />
        <mesh castShadow receiveShadow geometry={nodes['Wood_Box_(1)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-3.05, 2.69, 0.14]} rotation={[-3.12, 0.06, 3.13]} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.Big_Rock.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[13.68, 4.67, 3.38]} rotation={[0, 0.13, 0]} scale={[1.19, 1.07, 2.1]} />
      <mesh castShadow receiveShadow geometry={nodes.Floting_Base.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[0.09, -0.96, 4.62]} scale={1.33} />
      <mesh castShadow receiveShadow geometry={nodes.Light_House.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[8.19, 5.48, 7.52]} scale={1.33} />
      <mesh castShadow receiveShadow geometry={nodes.M_Smoke.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-0.52, 13.07, 8.87]} rotation={[-Math.PI, 0, -Math.PI]} />
      <mesh castShadow receiveShadow geometry={nodes.M_Fance_1.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-0.87, 5.88, -1.77]} rotation={[0.08, 0.2, -0.03]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Fance_1-1'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-6.05, 5.79, 0.33]} rotation={[0.08, 0.7, -0.03]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes.M_Fance_2.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-1.96, 5.85, -1.54]} rotation={[0.08, 0.31, -0.01]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Fance_2-1'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-5.26, 5.79, -0.34]} rotation={[0.08, 0.65, 0.03]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes.M_Grass.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-5.06, 5.71, 0.21]} rotation={[-3.1, 1.26, -3.11]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Grass-1'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-5.69, 5.69, 1.52]} rotation={[-3.1, 1.26, -3.11]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Grass-2'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-5.98, 5.68, 1.65]} rotation={[-3.1, 1.26, -3.11]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Grass-3'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[1.79, 5.59, 1.97]} rotation={[-3.1, 1.26, -3.11]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Grass-4'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[1.5, 5.58, 2.1]} rotation={[-3.1, 1.26, -3.11]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Grass-5'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-0.57, 5.48, 3.32]} rotation={[-3.1, 1.26, -3.11]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Grass-6'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-0.86, 5.49, 3.45]} rotation={[-3.1, 1.26, -3.11]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Grass-7'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-2.35, 5.49, 3.73]} rotation={[-3.06, -0.33, -3.13]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Grass-8'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-2.21, 5.46, 4.01]} rotation={[-3.06, -0.33, -3.13]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Grass-9'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-6.65, 5.58, 3.89]} rotation={[-3.1, 1.26, -3.11]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Grass-10'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-4.17, 5.3, 6.4]} rotation={[-3.1, 1.26, -3.11]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Grass-11'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-3.47, 5.16, 8.53]} rotation={[-3.1, 1.26, -3.11]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Grass-12'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-6.87, 5.13, 8.31]} rotation={[-3.1, 1.26, -3.11]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Grass-13'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-3.46, 5.46, 5.25]} rotation={[0.08, 0.57, -0.01]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Grass-14'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-1.69, 5.88, -1.29]} rotation={[0.08, 0.57, -0.01]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes.M_Grass_Roll.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-1.04, 5.87, -0.96]} rotation={[-3.08, -0.05, -3.08]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes.M_House.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-0.38, 7.19, 6.81]} rotation={[0.01, 0.31, 0.01]} scale={0.71} />
      {/* <mesh castShadow receiveShadow geometry={nodes.M_Out_door_Stone_1.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-1.58, 5.6, 2.46]} rotation={[-2.89, 1.26, 2.96]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes.M_Out_door_Stone_2.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-1.82, 5.57, 2.62]} rotation={[-2.66, 1.25, 2.74]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes.M_Out_door_Stone_3.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-1.92, 5.56, 2.46]} rotation={[-2.67, 1.24, 2.74]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Out_door_Stone_3-1'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-2.08, 5.59, 1.41]} rotation={[0.01, 1.23, 0.08]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Out_door_Stone_3-2'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-2.52, 5.62, 0.05]} rotation={[0.01, 1.23, 0.08]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes.M_Out_door_Stone_4.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-1.9, 5.57, 2.31]} rotation={[-2.66, 1.25, 2.74]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes.M_Out_door_Stone_5.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-1.97, 5.54, 2.09]} rotation={[-2.66, 1.25, 2.74]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Out_door_Stone_5-1'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-2.41, 5.57, 0.73]} rotation={[-2.6, 1.23, 2.61]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes.M_Out_door_Stone_6.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-1.68, 5.58, 2.04]} rotation={[-2.89, 1.26, 2.96]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Out_door_Stone_6-1'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-2.12, 5.61, 0.68]} rotation={[-2.69, 1.23, 2.7]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Out_door_Stone_6-2'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-2.72, 5.55, 0.08]} rotation={[-2.75, 1.27, 2.96]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Out_door_Stone_6-3'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-2.28, 5.58, 1.46]} rotation={[-2.89, 1.26, 2.96]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes.M_Out_door_Stone_7.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-1.77, 5.58, 1.7]} rotation={[-2.89, 1.26, 2.96]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Out_door_Stone_7-1'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-2.2, 5.61, 0.33]} rotation={[-2.85, 1.25, 2.87]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes.M_Out_door_Stone_8.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-2.1, 5.56, 1.79]} rotation={[-2.66, 1.25, 2.74]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Out_door_Stone_8-1'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-2.53, 5.55, 0.42]} rotation={[-2.62, 1.24, 2.65]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes.M_Out_door_Stone_9.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-1.93, 5.61, 1.2]} rotation={[0.06, 0.31, 0.06]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Out_door_Stone_9-1'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-2.38, 5.63, -0.17]} rotation={[0.14, 0.3, 0.05]} scale={0.71} /> 
      <mesh castShadow receiveShadow geometry={nodes.M_Out_door_Stone_10.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-2.17, 5.59, 1.01]} rotation={[-0.05, 0.31, 0.1]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes.M_Out_door_Stone_11.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-2.37, 5.57, 1.08]} rotation={[-2.88, 1.24, 2.81]} scale={0.71} />*/}
      <mesh castShadow receiveShadow geometry={nodes.M_Rock_1.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-4.37, 5.04, 8.92]} rotation={[-3.11, 0.8, 1.61]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Rock_1-1'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[2.58, 5.49, 1.75]} rotation={[-3.11, 0.8, 1.61]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes.M_Rock_2.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-5.59, 5.65, 1.86]} rotation={[-2.73, 1.24, 2.93]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Rock_2-1'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-6.28, 5.55, 4.14]} rotation={[-3.1, 1.26, -3.11]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes.M_Rock_3.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-5.51, 5.73, 1.87]} rotation={[-3.1, 1.26, -3.11]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Rock_3-1'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-1.84, 5.59, -1.99]} rotation={[0.04, -1.26, -0.04]} scale={-0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Rock_3-2'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-6.25, 5.56, 3.8]} rotation={[0.04, -1.26, -0.04]} scale={-0.71} />
      <mesh castShadow receiveShadow geometry={nodes.M_Rock_4.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-3.89, 5.23, 6.54]} rotation={[-3.1, 1.26, 0.04]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes.M_Tree_1.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[2.36, 5.38, 0.65]} rotation={[0.1, 1.13, -0.03]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Tree_1-1'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-6.27, 4.93, 8.07]} rotation={[0.08, 0.3, -0.01]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes.M_Tree_2.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-3.1, 4.99, 8.5]} rotation={[2.99, 1.19, -3.06]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Tree_2_(1)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[2.17, 5.48, -2.47]} rotation={[2.99, 1.19, -3.06]} scale={0.53} />
      <mesh castShadow receiveShadow geometry={nodes.M_Tree_3.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-7.1, 5.2, 4.93]} rotation={[-2.84, 1.04, 3.05]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Tree_3-1'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[0.37, 5.58, -1.15]} rotation={[-2.84, 1.04, 3.05]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Tree_3_(1)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[5.22, 5.37, 1.01]} rotation={[-2.84, 1.04, 3.05]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes.M_Tree_4.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-2.41, 4.76, 10.77]} rotation={[3.11, 0.75, 3.09]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Tree_4_(1)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[3.47, 5.4, -0.04]} rotation={[3.11, 0.75, 3.09]} scale={0.28} />
      <mesh castShadow receiveShadow geometry={nodes.M_Tree_6.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[3.38, 4.96, 6.65]} rotation={[-2.62, 1.35, 2.77]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes.M_Tree_7.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[4.22, 5.18, 4.04]} rotation={[2.68, 1.55, -2.6]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Tree_7_(1)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-5.16, 5.43, 3.61]} rotation={[2.68, 1.55, -2.6]} scale={0.37} />
      <mesh castShadow receiveShadow geometry={nodes.M_Trunk.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-6.92, 5.51, 2.34]} rotation={[3.11, 1.27, -3.11]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes['M_Trunk-1'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-4.97, 5.2, 5.75]} rotation={[0.09, -0.53, -0.08]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes.M_Tree_5.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[1.79, 4.81, 9.08]} rotation={[3.12, 0.91, -3.13]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes.M_Woods.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[1.13, 5.71, -0.32]} rotation={[2.01, 0.9, 0.97]} scale={0.71} />
      <mesh castShadow receiveShadow geometry={nodes.M_Cloud.geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-6.83, 12.88, 7.85]} rotation={[-2.76, 0.35, 2.99]} />
      <mesh castShadow receiveShadow geometry={nodes['M_Cloud-1'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[-7.02, 12.49, 1.22]} rotation={[0, 1.51, 0]} />
      <mesh castShadow receiveShadow geometry={nodes['M_Cloud-2'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[7.56, 13.94, 3.69]} rotation={[0, 1.14, 0]} />
      <mesh castShadow receiveShadow geometry={nodes['M_Cloud-3'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[4.89, 13.89, 9.35]} rotation={[Math.PI, 0.59, -Math.PI]} />
      <mesh castShadow receiveShadow geometry={nodes['M_Cloud-1_(1)'].geometry} material={materials.Lowpoly_Flaoting_Islands_PortTexture} position={[1.13, 12.92, 1.04]} rotation={[Math.PI, 1.07, -Math.PI]} />
    </group>
  )
}

useGLTF.preload('models/island/Floating Port-transformed.glb')
