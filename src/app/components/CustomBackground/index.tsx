import React, { useEffect, useRef } from "react";

const IMPACT_RANGE = 200;
const FRAME_SIZE = 40; // px spacing between items

const ICON_MAP: Record<string, { glyph: string; weight: number }> = {
  circle: { glyph: "\uf111", weight: 900 },
  ring: { glyph: "\uf111", weight: 400 },
  star: { glyph: "\uf005", weight: 900 },
  heart: { glyph: "\uf004", weight: 900 },
  plus: { glyph: "\uf067", weight: 900 },
};

type Props = {
  isInteractive?: boolean;
  /** either pass a glyph like '\uf111' OR a friendly name like 'circle' */
  icon?: string;
  fontSize?: number;
  accentCssVar?: string; // e.g. '--accent-1-rgb'
};

export default function CanvasBackground({
  isInteractive = true,
  icon,
  fontSize = 14,
  accentCssVar = "--accent-1-rgb",
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let mounted = true;
    const canvas = canvasRef.current!;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    // 🔑 Resize based on parent element
    const resize = () => {
      if (!canvas.parentElement) return;
      const { width: w, height: h } = canvas.parentElement.getBoundingClientRect();

      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // 🔑 Compute grid positions based on parent
    const computeDots = () => {
      if (!canvas.parentElement) return [];
      const { width: w, height: h } = canvas.parentElement.getBoundingClientRect();
      const cols = Math.floor(w / FRAME_SIZE);
      const rows = Math.floor(h / FRAME_SIZE);

      const arr: { x: number; y: number }[] = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          arr.push({
            x: c * FRAME_SIZE + FRAME_SIZE / 2,
            y: r * FRAME_SIZE + FRAME_SIZE / 2,
          });
        }
      }
      return arr;
    };

    resize();
    let dots = computeDots();

    // glyph mapping
    const entry = icon ? ICON_MAP[icon] : null;
    const glyph = entry?.glyph ?? icon ?? null;
    const fontWeight = entry?.weight ?? 900;

    // accent color
    const rawAccent = getComputedStyle(document.documentElement)
      .getPropertyValue(accentCssVar)
      .trim();
    const accentRgb = rawAccent ? rawAccent.replace(/;$/, "") : "128,0,128";

    // ensure font loaded
    const ensureFontLoaded = async (): Promise<boolean> => {
      // always return a boolean
      if (!glyph) return false;

      try {
        await document.fonts.load(`${fontWeight} ${fontSize}px "Font Awesome 6 Free"`);
        return document.fonts.check(`${fontWeight} ${fontSize}px "Font Awesome 6 Free"`);
      } catch (err) {
        return false;
      }
    };

    let fontReadyPromise: Promise<boolean> | null = glyph
      ? ensureFontLoaded()
      : null;

    // draw loop
    const draw = async () => {
      if (!mounted) return;
      if (fontReadyPromise) {
        await fontReadyPromise;
        fontReadyPromise = null;
      }

      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      for (let i = 0; i < dots.length; i++) {
        const { x, y } = dots[i];
        let scale = 1;
        let alpha = 0.2;

        if (mouseRef.current) {
          const dx = mouseRef.current.x - x;
          const dy = mouseRef.current.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < IMPACT_RANGE) {
            const t = dist / IMPACT_RANGE;
            scale = 1 + (.5 - t);
            alpha = Math.max(0.2, 1 - t);
          }
        }

        const color = `rgba(${accentRgb}, ${alpha})`;

        if (glyph) {
          ctx.save();
          ctx.font = `${fontWeight} ${fontSize * scale}px "Font Awesome 6 Free"`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = color;
          ctx.fillText(glyph, x, y);
          ctx.restore();
        } else {
          ctx.beginPath();
          ctx.arc(x, y, 4 * scale, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    // events
    const handleMove = (e: MouseEvent) => {
      if (!isInteractive) return;
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleLeave = () => {
      mouseRef.current = null;
    };

    // 🔑 Use ResizeObserver instead of window.resize
    const resizeObserver = new ResizeObserver(() => {
      resize();
      dots = computeDots();
    });
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    // cleanup
    return () => {
      mounted = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      resizeObserver.disconnect();
    };
  }, [isInteractive, icon, fontSize, accentCssVar]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
        zIndex: -1,
      }}
    />
  );
}
