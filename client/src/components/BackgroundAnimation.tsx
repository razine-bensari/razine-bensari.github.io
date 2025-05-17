import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "./ThemeProvider";

const BackgroundAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Initialize scene
    const scene = new THREE.Scene();
    
    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    
    // Initialize camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;
    
    // Initialize nodes and links
    const nodes: THREE.Mesh[] = [];
    const connections: { from: number; to: number; line: THREE.Line }[] = [];
    const nodeCount = 50; // Number of nodes in the network
    
    // Colors based on theme - Algeria flag colors
    const primaryColor = 0x2FB14A; // Green
    const secondaryColor = 0xD12E2E; // Red
    
    // Create nodes
    const nodeGeometry = new THREE.SphereGeometry(0.25, 16, 16);
    
    for (let i = 0; i < nodeCount; i++) {
      const material = new THREE.MeshBasicMaterial({ 
        color: i % 3 === 0 ? secondaryColor : primaryColor,
        transparent: true,
        opacity: theme === 'dark' ? 0.6 : 0.8
      });
      
      const mesh = new THREE.Mesh(nodeGeometry, material);
      
      // Random position within bounds
      mesh.position.x = (Math.random() - 0.5) * 50;
      mesh.position.y = (Math.random() - 0.5) * 50;
      mesh.position.z = (Math.random() - 0.5) * 30;
      
      // Add velocity property for animation
      (mesh as any).velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.05,
        (Math.random() - 0.5) * 0.05,
        (Math.random() - 0.5) * 0.05
      );
      
      scene.add(mesh);
      nodes.push(mesh);
    }
    
    // Create connections between nearby nodes
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: theme === 'dark' ? 0x395F44 : 0x395F44,
      transparent: true,
      opacity: theme === 'dark' ? 0.2 : 0.3
    });
    
    // Connect nodes within certain distance
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].position.distanceTo(nodes[j].position);
        
        // Only connect if they're close enough
        if (distance < 15) {
          const geometry = new THREE.BufferGeometry().setFromPoints([
            nodes[i].position,
            nodes[j].position
          ]);
          
          const line = new THREE.Line(geometry, lineMaterial);
          scene.add(line);
          
          connections.push({
            from: i,
            to: j,
            line: line
          });
        }
      }
    }
    
    // Pulse animation properties
    const pulses: {
      position: THREE.Vector3;
      radius: number;
      maxRadius: number;
      speed: number;
      mesh: THREE.Mesh;
    }[] = [];
    
    // Create pulse animation
    const createPulse = () => {
      // Select a random node as pulse source
      const sourceNode = nodes[Math.floor(Math.random() * nodes.length)];
      
      // Create a pulse sphere
      const pulseGeometry = new THREE.SphereGeometry(0.1, 16, 16);
      const pulseMaterial = new THREE.MeshBasicMaterial({
        color: Math.random() > 0.5 ? primaryColor : secondaryColor,
        transparent: true,
        opacity: theme === 'dark' ? 0.2 : 0.3
      });
      
      const pulseMesh = new THREE.Mesh(pulseGeometry, pulseMaterial);
      pulseMesh.position.copy(sourceNode.position);
      scene.add(pulseMesh);
      
      pulses.push({
        position: sourceNode.position.clone(),
        radius: 0.1,
        maxRadius: 5 + Math.random() * 5,
        speed: 0.1 + Math.random() * 0.2,
        mesh: pulseMesh
      });
      
      // Schedule next pulse
      setTimeout(createPulse, 2000 + Math.random() * 3000);
    };
    
    // Start pulse animation
    setTimeout(createPulse, 1000);
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Move nodes
      nodes.forEach(node => {
        node.position.add((node as any).velocity);
        
        // Bounce off boundaries
        ['x', 'y', 'z'].forEach(axis => {
          const limit = axis === 'z' ? 20 : 30;
          if (Math.abs(node.position[axis as keyof THREE.Vector3] as number) > limit) {
            (node as any).velocity[axis as keyof THREE.Vector3] *= -1;
          }
        });
      });
      
      // Update connections
      connections.forEach(conn => {
        const points = [
          nodes[conn.from].position,
          nodes[conn.to].position
        ];
        conn.line.geometry.setFromPoints(points);
        (conn.line.geometry as THREE.BufferGeometry).attributes.position.needsUpdate = true;
      });
      
      // Update pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i];
        pulse.radius += pulse.speed;
        
        // Scale pulse mesh
        pulse.mesh.scale.set(pulse.radius, pulse.radius, pulse.radius);
        
        // Fade out as it grows
        (pulse.mesh.material as THREE.MeshBasicMaterial).opacity = 
          (theme === 'dark' ? 0.3 : 0.5) * (1 - pulse.radius / pulse.maxRadius);
        
        // Remove when maxRadius reached
        if (pulse.radius >= pulse.maxRadius) {
          scene.remove(pulse.mesh);
          pulses.splice(i, 1);
        }
      }
      
      // Rotate scene slightly for more dynamic feel
      scene.rotation.x += 0.0003;
      scene.rotation.y += 0.0005;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose resources
      scene.traverse((object: any) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (object.material instanceof THREE.Material) {
            object.material.dispose();
          }
        }
      });
      
      renderer.dispose();
    };
  }, [theme]); // Re-run if theme changes
  
  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none opacity-40 dark:opacity-30"
      style={{ zIndex: 0 }}
    />
  );
};

export default BackgroundAnimation;