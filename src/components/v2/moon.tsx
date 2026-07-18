"use client";

/* The realistic moon scene from the LunarGravityCard component: moon,
 * particle ring and asteroid belt, kept as provided. Changes: no card, no
 * text, no orbit controls, no click; the ring animation starts on its own
 * shortly after load. */
import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const RADIUS = 2.0;

const RealisticMoon = ({ tint = "#ffffff" }: { tint?: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  const colorMap = useTexture(
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/moon_1024.jpg"
  );

  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.05;
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <sphereGeometry args={[RADIUS, 64, 64]} />
      <meshStandardMaterial
        map={colorMap}
        bumpMap={colorMap}
        bumpScale={0.02}
        roughness={0.8}
        metalness={0.1}
        color={tint}
      />
    </mesh>
  );
};

const particlesCount = 60000;
const [ringPositions, ringColors, ringColorsBrand, ringRandoms] = (() => {
  const pos = new Float32Array(particlesCount * 3);
  const col = new Float32Array(particlesCount * 3);
  const colBrand = new Float32Array(particlesCount * 3);
  const rnd = new Float32Array(particlesCount);

  for (let i = 0; i < particlesCount; i++) {
    const angle = Math.random() * Math.PI * 2;

    const rDist = Math.pow(Math.random(), 1.5);
    const radius = 2.2 + rDist * 2.2;

    const thickness = 0.4 - rDist * 0.2;
    const ySpread = Math.random() + Math.random() + Math.random() - 1.5;
    const y = ySpread * thickness;

    pos[i * 3] = Math.cos(angle) * radius;
    pos[i * 3 + 1] = y;
    pos[i * 3 + 2] = Math.sin(angle) * radius;

    const intensity = 1.0 - rDist;

    const paletteType = Math.random();
    let baseR, baseG, baseB;

    if (paletteType < 0.8) {
      baseR = 0.25; baseG = 0.3; baseB = 0.35;
    } else if (paletteType < 0.92) {
      baseR = 0.0; baseG = 0.6; baseB = 0.8;
    } else {
      baseR = 0.6; baseG = 0.2; baseB = 0.8;
    }

    baseR = Math.min(1.0, Math.max(0.0, baseR + (Math.random() - 0.5) * 0.1));
    baseG = Math.min(1.0, Math.max(0.0, baseG + (Math.random() - 0.5) * 0.1));
    baseB = Math.min(1.0, Math.max(0.0, baseB + (Math.random() - 0.5) * 0.1));

    const sparkle = Math.random() > 0.95 ? 2.5 : 1.0;

    col[i * 3] = baseR * intensity * sparkle;
    col[i * 3 + 1] = baseG * intensity * sparkle;
    col[i * 3 + 2] = baseB * intensity * sparkle;

    // brand variation: same dust, but sky blue and peach instead of cyan
    // and purple
    let bR, bG, bB;
    if (paletteType < 0.8) {
      bR = 0.26; bG = 0.32; bB = 0.4;
    } else if (paletteType < 0.92) {
      bR = 0.25; bG = 0.65; bB = 0.85;
    } else {
      bR = 0.95; bG = 0.6; bB = 0.4;
    }
    colBrand[i * 3] = bR * intensity * sparkle;
    colBrand[i * 3 + 1] = bG * intensity * sparkle;
    colBrand[i * 3 + 2] = bB * intensity * sparkle;

    rnd[i] = Math.random();
  }
  return [pos, col, colBrand, rnd];
})();

const ParticleRing = ({ ringState, massiveAsteroidsRef, variant = "classic" }: { ringState: 'hidden' | 'animating' | 'visible', massiveAsteroidsRef: React.MutableRefObject<Float32Array>, variant?: "classic" | "brand" }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const colors = variant === "brand" ? ringColorsBrand : ringColors;

  const uniforms = useRef({
    uProgress: { value: ringState === 'visible' ? 1.0 : 0.0 },
    uAsteroids: { value: new Float32Array(75 * 4) },
    time: { value: 0 }
  });

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.02;
      pointsRef.current.updateMatrix();

      const invMat = new THREE.Matrix4().copy(pointsRef.current.matrix).invert();
      const localAsteroids = new Float32Array(75 * 4);
      for (let i = 0; i < 75; i++) {
        const ast = new THREE.Vector3(
          massiveAsteroidsRef.current[i * 4],
          massiveAsteroidsRef.current[i * 4 + 1],
          massiveAsteroidsRef.current[i * 4 + 2]
        );
        ast.applyMatrix4(invMat);
        localAsteroids[i * 4] = ast.x;
        localAsteroids[i * 4 + 1] = ast.y;
        localAsteroids[i * 4 + 2] = ast.z;
        localAsteroids[i * 4 + 3] = massiveAsteroidsRef.current[i * 4 + 3];
      }
      uniforms.current.uAsteroids.value = localAsteroids;
    }
    uniforms.current.time.value = state.clock.elapsedTime;

    if (ringState === 'animating') {
      uniforms.current.uProgress.value += delta * 0.35;
      if (uniforms.current.uProgress.value > 1.0) uniforms.current.uProgress.value = 1.0;
    } else if (ringState === 'visible') {
      uniforms.current.uProgress.value = 1.0;
    } else {
      uniforms.current.uProgress.value = 0.0;
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onBeforeCompile = (shader: any) => {
    shader.uniforms.uProgress = uniforms.current.uProgress;
    shader.uniforms.uAsteroids = uniforms.current.uAsteroids;
    shader.uniforms.time = uniforms.current.time;

    shader.vertexShader = `
      uniform float uProgress;
      uniform vec4 uAsteroids[75];
      uniform float time;
      attribute float aRandom;
      varying float vProgress;
      ${shader.vertexShader}
    `;

    shader.vertexShader = shader.vertexShader.replace(
      `#include <begin_vertex>`,
      `
      vec3 transformed = vec3(position);

      float angle = atan(transformed.x, transformed.z);
      float normalizedAngle = abs(angle) / 3.14159265359;
      float spawnThreshold = 1.0 - normalizedAngle;

      float progressValue = (uProgress * 1.4) - spawnThreshold;
      float particleProgress = smoothstep(0.0, 0.4, progressValue);
      vProgress = particleProgress;

      transformed.y += sin(angle * 10.0 + time) * 0.05 * aRandom;

      if (uProgress > 0.5) {
        for(int i = 0; i < 75; i++) {
          vec4 astData = uAsteroids[i];
          vec3 delta = transformed - astData.xyz;
          float dist = length(delta);

          float rad = astData.w * 2.0 + 0.15;

          if (dist < rad) {
             float force = pow((rad - dist) / rad, 2.0);
             transformed += normalize(delta) * force * 0.4;
             transformed.y += force * 0.20 * (aRandom - 0.5);
          }
        }
      }

      float swirl = (1.0 - particleProgress) * 4.0;
      float s = sin(swirl);
      float c = cos(swirl);
      transformed.xz = mat2(c, -s, s, c) * transformed.xz;

      transformed.y += (1.0 - particleProgress) * (transformed.y >= 0.0 ? 1.0 : -1.0);

      vec3 moonSurface = normalize(transformed) * 2.1;
      transformed = mix(moonSurface, transformed, particleProgress);
      `
    );

    shader.fragmentShader = `
      varying float vProgress;
      ${shader.fragmentShader}
    `;

    shader.fragmentShader = shader.fragmentShader.replace(
      `#include <color_fragment>`,
      `
      #include <color_fragment>

      diffuseColor.a *= vProgress;
      `
    );
  };

  return (
    <points ref={pointsRef} rotation={[-Math.PI / 2, 0, 0]}>
      <bufferGeometry key={variant}>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={ringPositions}
          itemSize={3}
          args={[ringPositions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={colors}
          itemSize={3}
          args={[colors, 3]}
        />
        <bufferAttribute
          attach="attributes-aRandom"
          count={particlesCount}
          array={ringRandoms}
          itemSize={1}
          args={[ringRandoms, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.008}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        onBeforeCompile={onBeforeCompile}
      />
    </points>
  );
};

const generateAsteroids = (count: number) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    const baseRadius = 2.8 + Math.random() * 2.0;
    const radialAmplitude = 0.5 + Math.random() * 1.5;
    const radialSpeed = 0.15 + Math.random() * 0.25;
    const phase = Math.random() * Math.PI * 2;

    const angle = Math.random() * Math.PI * 2;
    const zOffset = (Math.random() - 0.5) * 0.8;

    const speed = (0.04 + Math.random() * 0.08) * (Math.random() > 0.5 ? 1 : -1);

    const rotationSpeedX = (Math.random() - 0.5) * 0.05;
    const rotationSpeedY = (Math.random() - 0.5) * 0.05;
    const rotationSpeedZ = (Math.random() - 0.5) * 0.05;

    const scale = 0.02 + Math.pow(Math.random(), 4) * 0.18;

    data.push({
      angle, baseRadius, radialAmplitude, radialSpeed, phase, zOffset, speed,
      rx: Math.random() * Math.PI, ry: Math.random() * Math.PI, rz: Math.random() * Math.PI,
      rsx: rotationSpeedX, rsy: rotationSpeedY, rsz: rotationSpeedZ,
      scale
    });
  }
  data.sort((a, b) => b.scale - a.scale);
  return data;
};

const AsteroidBelt = ({ ringState, massiveAsteroidsRef, tint = "#ffffff" }: { ringState: 'hidden' | 'animating' | 'visible', massiveAsteroidsRef: React.MutableRefObject<Float32Array>, tint?: string }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const [colorMap, bumpMap] = useTexture([
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/moon_1024.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/moon_1024.jpg'
  ]);

  const count = 75;
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const [asteroids] = useState(() => generateAsteroids(count));

  const scaleRef = useRef(0);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    const targetScale = ringState === 'hidden' ? 0 : 1;
    const lerpSpeed = ringState === 'hidden' ? 5 : 2;
    scaleRef.current = THREE.MathUtils.lerp(scaleRef.current, targetScale, delta * lerpSpeed);

    if (scaleRef.current < 0.01) {
      meshRef.current.visible = false;
      return;
    }
    meshRef.current.visible = true;

    asteroids.forEach((ast, i) => {

      ast.angle += ast.speed * delta;

      ast.phase += ast.radialSpeed * delta;
      let currentRadius = ast.baseRadius + Math.sin(ast.phase) * ast.radialAmplitude;

      if (currentRadius < 2.15) {
        const penetration = 2.15 - currentRadius;
        currentRadius = 2.15 + penetration * 0.85;
      }

      const x = Math.cos(ast.angle) * currentRadius;
      const y = Math.sin(ast.angle) * currentRadius;

      massiveAsteroidsRef.current[i * 4] = x;
      massiveAsteroidsRef.current[i * 4 + 1] = y;
      massiveAsteroidsRef.current[i * 4 + 2] = ast.zOffset;
      massiveAsteroidsRef.current[i * 4 + 3] = ast.scale;

      ast.rx += ast.rsx;
      ast.ry += ast.rsy;
      ast.rz += ast.rsz;

      dummy.position.set(x, y, ast.zOffset);
      dummy.rotation.set(ast.rx, ast.ry, ast.rz);
      dummy.scale.setScalar(ast.scale * scaleRef.current);
      dummy.updateMatrix();

      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]} castShadow receiveShadow>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        map={colorMap}
        bumpMap={bumpMap}
        bumpScale={0.08}
        color={tint}
        roughness={0.7}
        metalness={0.1}
      />
    </instancedMesh>
  );
};

const DEG = Math.PI / 180;

/* Hand-tuned via the old ?tune=1 mode; these are final. */
const VIEW = { tiltX: -45, tiltZ: 45, camY: -2, camZ: 7.7 };

export function Moon({
  className,
  variant = "classic",
}: {
  className?: string;
  /* "brand" tints the scene toward the site's blue and peach palette */
  variant?: "classic" | "brand";
}) {
  const [ringState, setRingState] = useState<'hidden' | 'animating' | 'visible'>('hidden');
  const massiveAsteroidsRef = useRef<Float32Array>(new Float32Array(75 * 4));
  const brand = variant === "brand";

  // the demo starts the ring on click; here it starts by itself
  useEffect(() => {
    const t = setTimeout(() => setRingState("animating"), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`pointer-events-none relative ${className ?? ""}`} aria-hidden="true">
      {/* the demo's OrbitControls aimed the camera at the origin; here the
          aim is set by hand */}
      {/* fov 52.3 pairs with the ~1.19x taller canvas so the moon renders at
          the same pixel size as the tuned fov-45/540px framing, with the
          extra height revealing the halo the shorter box used to cut off */}
      <Canvas
        shadows
        camera={{ position: [0, VIEW.camY, VIEW.camZ], fov: 52.3 }}
        dpr={[1, 2]}
        onCreated={({ camera }) => camera.lookAt(0, 0, 0)}
      >
        <ambientLight intensity={0.05} />
        <directionalLight position={[8, 5, 5]} intensity={1.5} color={brand ? "#ffe3cc" : "#ffffff"} castShadow shadow-mapSize={[2048, 2048]} />
        <directionalLight position={[-5, -3, -5]} intensity={brand ? 0.45 : 0.15} color="#4a90e2" />

        <group rotation={[VIEW.tiltX * DEG, 0, VIEW.tiltZ * DEG]}>
          <Suspense fallback={null}>
            <RealisticMoon tint={brand ? "#8fb0d4" : "#ffffff"} />
            <ParticleRing ringState={ringState} massiveAsteroidsRef={massiveAsteroidsRef} variant={variant} />
            <AsteroidBelt ringState={ringState} massiveAsteroidsRef={massiveAsteroidsRef} tint={brand ? "#a8bdd4" : "#ffffff"} />
          </Suspense>
        </group>
      </Canvas>
    </div>
  );
}
