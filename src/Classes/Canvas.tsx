import React, { useRef, useEffect } from "react";
import Circle from "./Circle";

interface CanvasParams {
    circles: Circle[];
}

export default function Canvas(props: CanvasParams) {
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    if (canvas == null) return;
    const context = canvas.getContext('2d');
    if (context == null) return;
  }, [])
  
  return <canvas ref={canvasRef} {...props}/>
}