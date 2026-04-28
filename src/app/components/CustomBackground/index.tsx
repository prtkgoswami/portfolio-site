"use client";
import React, { useEffect, useRef } from "react";

const IMPACT_RANGE = 200;
const FRAME_SIZE = 40;

// Draw functions for our supported shapes
const drawCircle = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  color: string,
) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.stroke();
};

const drawPlus = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  color: string,
) => {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  // Horizontal line
  ctx.moveTo(x - size, y);
  ctx.lineTo(x + size, y);
  // Vertical line
  ctx.moveTo(x, y - size);
  ctx.lineTo(x, y + size);
  ctx.stroke();
};

type Props = {
  isInteractive?: boolean;
  shape?: "circle" | "plus";
  size?: number; // replaces fontSize
  accentCssVar?: string;
};

export default function CanvasBackground({
  isInteractive = true,
  shape = "circle",
  size = 4,
  accentCssVar = "--accent-1-rgb",
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;
    let dots: { x: number; y: number }[] = [];
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const { width, height } = parent.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cols = Math.floor(width / FRAME_SIZE);
      const rows = Math.floor(height / FRAME_SIZE);
      dots = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({
            x: c * FRAME_SIZE + FRAME_SIZE / 2,
            y: r * FRAME_SIZE + FRAME_SIZE / 2,
          });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      const accentRgb =
        getComputedStyle(document.documentElement)
          .getPropertyValue(accentCssVar)
          .trim() || "128,0,128";

      dots.forEach(({ x, y }) => {
        let scale = 1;
        let alpha = 0.2;

        if (mouseRef.current) {
          const dx = mouseRef.current.x - x;
          const dy = mouseRef.current.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < IMPACT_RANGE) {
            const t = dist / IMPACT_RANGE;
            scale = 1 + (0.5 - t);
            alpha = Math.max(0.2, 1 - t);
          }
        }

        const color = `rgba(${accentRgb}, ${alpha})`;
        const currentSize = size * scale;

        // Execute drawing logic
        if (shape === "plus") {
          drawPlus(ctx, x, y, currentSize * 0.5, color);
        } else {
          drawCircle(ctx, x, y, currentSize * 0.5, color);
        }
      });

      rafId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);

    // Mouse listeners
    const handleMove = (e: MouseEvent) => {
      if (isInteractive) mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const handleLeave = () => {
      mouseRef.current = null;
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [isInteractive, shape, size, accentCssVar]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
}
