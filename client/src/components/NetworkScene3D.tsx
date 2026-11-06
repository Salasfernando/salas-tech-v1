import { useEffect, useRef, useState } from "react";
import {
  BufferAttribute,
  BufferGeometry,
  DoubleSide,
  Group,
  IcosahedronGeometry,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  OctahedronGeometry,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  RingGeometry,
  Scene,
  WebGLRenderer,
  WireframeGeometry,
} from "three";

type NetworkScene3DProps = {
  className?: string;
  fallbackImage?: string;
  variant?: "hero" | "orbital" | "case" | "process" | "resume";
  hudLabel?: string;
};

export default function NetworkScene3D({
  className = "",
  fallbackImage = "/assets/salas-tech-network-hero_fbaebdef.png",
  variant = "hero",
  hudLabel,
}: NetworkScene3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglReady, setWebglReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let renderer: WebGLRenderer;
    try {
      renderer = new WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    const width = container.clientWidth || 540;
    const height = container.clientHeight || 440;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);

    const canvas = renderer.domElement;
    canvas.className = "network-scene-canvas";
    canvas.setAttribute("aria-hidden", "true");
    container.appendChild(canvas);
    setWebglReady(true);

    const scene = new Scene();
    const camera = new PerspectiveCamera(46, width / height, 0.1, 100);
    camera.position.set(
      0,
      0,
      variant === "resume" ? 11.5 : variant === "case" ? 13 : 14.5,
    );

    const rootGroup = new Group();
    scene.add(rootGroup);

    // 1. Core geometric wireframe (tailored per route variant)
    const coreGeometry =
      variant === "case" || variant === "process"
        ? new OctahedronGeometry(2.85, 2)
        : new IcosahedronGeometry(variant === "resume" ? 2.4 : 2.65, 1);
    const coreWireframe = new WireframeGeometry(coreGeometry);
    const coreMaterial = new LineBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: variant === "case" || variant === "process" ? 0.34 : 0.25,
    });
    const coreMesh = new LineSegments(coreWireframe, coreMaterial);
    rootGroup.add(coreMesh);

    // 2. Primary & Secondary Orbital Rings
    const ringGeometry = new RingGeometry(4.15, 4.22, 64);
    const ringMaterial = new MeshBasicMaterial({
      color: 0x00e5ff,
      side: DoubleSide,
      transparent: true,
      opacity: 0.26,
    });
    const ringMesh = new Mesh(ringGeometry, ringMaterial);
    ringMesh.rotation.x = Math.PI * 0.36;
    ringMesh.rotation.y = Math.PI * 0.14;
    rootGroup.add(ringMesh);

    const outerRingGeometry = new RingGeometry(5.1, 5.15, 64);
    const outerRingMaterial = new MeshBasicMaterial({
      color: 0xf8fafc,
      side: DoubleSide,
      transparent: true,
      opacity: variant === "process" || variant === "case" ? 0.18 : 0.1,
    });
    const outerRingMesh = new Mesh(outerRingGeometry, outerRingMaterial);
    outerRingMesh.rotation.x = -Math.PI * 0.28;
    outerRingMesh.rotation.z = Math.PI * 0.22;
    rootGroup.add(outerRingMesh);

    // 3. Interactive Node Network (Full Stack & Automation nodes)
    const nodeCount = variant === "resume" ? 44 : 58;
    const positions = new Float32Array(nodeCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const radius = 2.2 + Math.random() * 4.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4.8;

      velocities.push({
        x: (Math.random() - 0.5) * 0.0065,
        y: (Math.random() - 0.5) * 0.0065,
        z: (Math.random() - 0.5) * 0.0045,
      });
    }

    const pointsGeometry = new BufferGeometry();
    pointsGeometry.setAttribute("position", new BufferAttribute(positions, 3));

    const pointsMaterial = new PointsMaterial({
      color: 0x00e5ff,
      size: 0.15,
      transparent: true,
      opacity: 0.94,
    });
    const points = new Points(pointsGeometry, pointsMaterial);
    rootGroup.add(points);

    // 4. Dynamic synaptic connections between nearby nodes
    const maxConnections = nodeCount * 6;
    const linePositions = new Float32Array(maxConnections * 6);
    const linesGeometry = new BufferGeometry();
    linesGeometry.setAttribute(
      "position",
      new BufferAttribute(linePositions, 3),
    );

    const linesMaterial = new LineBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.24,
    });
    const linesMesh = new LineSegments(linesGeometry, linesMaterial);
    rootGroup.add(linesMesh);

    const updateConnections = () => {
      let vertexIndex = 0;
      const maxDistance = 2.95;
      const posAttr = pointsGeometry.getAttribute(
        "position",
      ) as BufferAttribute;

      for (let i = 0; i < nodeCount; i++) {
        const ix = posAttr.getX(i);
        const iy = posAttr.getY(i);
        const iz = posAttr.getZ(i);

        for (let j = i + 1; j < nodeCount; j++) {
          if (vertexIndex >= maxConnections * 6) break;
          const jx = posAttr.getX(j);
          const jy = posAttr.getY(j);
          const jz = posAttr.getZ(j);

          const dx = ix - jx;
          const dy = iy - jy;
          const dz = iz - jz;
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < maxDistance * maxDistance) {
            linePositions[vertexIndex++] = ix;
            linePositions[vertexIndex++] = iy;
            linePositions[vertexIndex++] = iz;
            linePositions[vertexIndex++] = jx;
            linePositions[vertexIndex++] = jy;
            linePositions[vertexIndex++] = jz;
          }
        }
      }

      linesGeometry.setDrawRange(0, vertexIndex / 3);
      (linesGeometry.getAttribute("position") as BufferAttribute).needsUpdate =
        true;
    };

    updateConnections();

    const pointer = { targetX: 0, targetY: 0, currentX: 0, currentY: 0 };
    let scrollProgress = 0;
    let isVisible = true;
    let frameId = 0;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const nx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      pointer.targetX = Math.max(-1, Math.min(1, nx));
      pointer.targetY = Math.max(-1, Math.min(1, ny));
    };

    const handleScroll = () => {
      scrollProgress = Math.min(1, window.scrollY / 700);
    };

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 540;
      const h = container.clientHeight || 440;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      if (reducedMotion) renderer.render(scene, camera);
    };

    const intersectionObserver =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              isVisible = entries[0]?.isIntersecting ?? true;
            },
            { threshold: 0.02 },
          )
        : null;
    intersectionObserver?.observe(container);

    const animate = () => {
      frameId = window.requestAnimationFrame(animate);
      if (!isVisible) return;

      pointer.currentX += (pointer.targetX - pointer.currentX) * 0.06;
      pointer.currentY += (pointer.targetY - pointer.currentY) * 0.06;

      const posAttr = pointsGeometry.getAttribute(
        "position",
      ) as BufferAttribute;

      for (let i = 0; i < nodeCount; i++) {
        const x = posAttr.getX(i) + velocities[i].x;
        const y = posAttr.getY(i) + velocities[i].y;
        const z = posAttr.getZ(i) + velocities[i].z;

        const dist = Math.sqrt(x * x + y * y + z * z);
        if (dist > 6.6 || dist < 1.9) {
          velocities[i].x *= -1;
          velocities[i].y *= -1;
          velocities[i].z *= -1;
        }

        posAttr.setXYZ(i, x, y, z);
      }
      posAttr.needsUpdate = true;
      updateConnections();

      rootGroup.rotation.y += 0.0024;
      rootGroup.rotation.x = pointer.currentY * 0.28 + scrollProgress * 0.35;
      rootGroup.position.x = pointer.currentX * 0.55;
      rootGroup.position.y = pointer.currentY * 0.35 - scrollProgress * 0.65;

      coreMesh.rotation.y -= 0.004;
      coreMesh.rotation.z += 0.002;
      ringMesh.rotation.z -= 0.0028;
      outerRingMesh.rotation.y += 0.0022;
      outerRingMesh.rotation.z += 0.0016;

      renderer.render(scene, camera);
    };

    if (reducedMotion) {
      renderer.render(scene, camera);
    } else {
      window.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });
      window.addEventListener("scroll", handleScroll, { passive: true });
      frameId = window.requestAnimationFrame(animate);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      intersectionObserver?.disconnect();
      coreGeometry.dispose();
      coreWireframe.dispose();
      coreMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      outerRingGeometry.dispose();
      outerRingMaterial.dispose();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
      renderer.dispose();
      if (canvas.parentNode === container) {
        container.removeChild(canvas);
      }
    };
  }, [variant]);

  if (variant === "orbital" || variant === "resume") {
    return (
      <div
        ref={containerRef}
        className={`network-scene-orbital ${variant === "resume" ? "network-scene-resume" : ""} ${webglReady ? "network-scene-wrapper--ready" : ""} ${className}`}
        aria-hidden="true"
      />
    );
  }

  if (variant === "case" || variant === "process") {
    return (
      <div
        ref={containerRef}
        className={`network-scene-embedded network-scene-embedded--${variant} ${webglReady ? "network-scene-wrapper--ready" : ""} ${className}`}
        aria-hidden="true"
      >
        {hudLabel && (
          <div className="network-scene-hud">
            <span className="network-scene-hud__dot" />
            <span>{hudLabel}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`hero-visual network-scene-wrapper ${webglReady ? "network-scene-wrapper--ready" : ""} ${className}`}
      aria-hidden="true"
    >
      <img
        src={fallbackImage}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="network-scene-backdrop"
      />
      <div className="network-scene-hud">
        <span className="network-scene-hud__dot" />
        <span>{hudLabel || "SALAS.TECH // 3D.MESH"}</span>
      </div>
    </div>
  );
}
