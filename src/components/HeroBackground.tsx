import { useEffect, useRef } from "react";
import { animate, stagger, onScroll, createScope } from "animejs";
import { createDrawable } from "animejs/svg";

export const HeroBackground = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const scopeRef = useRef<ReturnType<typeof createScope> | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    scopeRef.current = createScope({ root: svgRef }).add(() => {
      // Get all paths and create drawables
      const paths = svgRef.current?.querySelectorAll("path");
      if (!paths || paths.length === 0) return;

      const drawables = createDrawable(paths);

      // Initialize all paths to be invisible
      drawables.forEach((drawable) => {
        drawable.draw = "0 0";
      });

      // Animate with scroll sync
      animate(drawables, {
        draw: ["0 0", "0 1", "1 1"],
        delay: stagger(40),
        ease: "inOut(3)",
        autoplay: onScroll({ sync: true }),
      });
    });

    return () => {
      scopeRef.current?.revert();
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1200 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Network/fraud detection themed paths */}
      {/* Central node connections */}
      <path
        d="M600 400 L300 200"
        stroke="hsl(var(--primary))"
        strokeWidth="1"
        strokeOpacity="0.3"
      />
      <path
        d="M600 400 L900 200"
        stroke="hsl(var(--primary))"
        strokeWidth="1"
        strokeOpacity="0.3"
      />
      <path
        d="M600 400 L200 500"
        stroke="hsl(var(--primary))"
        strokeWidth="1"
        strokeOpacity="0.3"
      />
      <path
        d="M600 400 L1000 500"
        stroke="hsl(var(--primary))"
        strokeWidth="1"
        strokeOpacity="0.3"
      />
      <path
        d="M600 400 L400 650"
        stroke="hsl(var(--primary))"
        strokeWidth="1"
        strokeOpacity="0.3"
      />
      <path
        d="M600 400 L800 650"
        stroke="hsl(var(--primary))"
        strokeWidth="1"
        strokeOpacity="0.3"
      />

      {/* Secondary connections */}
      <path
        d="M300 200 L150 350"
        stroke="hsl(var(--accent))"
        strokeWidth="1.5"
        strokeOpacity="0.4"
      />
      <path
        d="M300 200 L450 100"
        stroke="hsl(var(--accent))"
        strokeWidth="1.5"
        strokeOpacity="0.4"
      />
      <path
        d="M900 200 L1050 350"
        stroke="hsl(var(--accent))"
        strokeWidth="1.5"
        strokeOpacity="0.4"
      />
      <path
        d="M900 200 L750 100"
        stroke="hsl(var(--accent))"
        strokeWidth="1.5"
        strokeOpacity="0.4"
      />

      {/* Scanning pattern - horizontal lines */}
      <path
        d="M100 150 L1100 150"
        stroke="hsl(var(--muted-foreground))"
        strokeWidth="0.5"
        strokeOpacity="0.15"
      />
      <path
        d="M100 300 L1100 300"
        stroke="hsl(var(--muted-foreground))"
        strokeWidth="0.5"
        strokeOpacity="0.15"
      />
      <path
        d="M100 450 L1100 450"
        stroke="hsl(var(--muted-foreground))"
        strokeWidth="0.5"
        strokeOpacity="0.15"
      />
      <path
        d="M100 600 L1100 600"
        stroke="hsl(var(--muted-foreground))"
        strokeWidth="0.5"
        strokeOpacity="0.15"
      />

      {/* Grid pattern - vertical lines */}
      <path
        d="M200 50 L200 750"
        stroke="hsl(var(--muted-foreground))"
        strokeWidth="0.5"
        strokeOpacity="0.1"
      />
      <path
        d="M400 50 L400 750"
        stroke="hsl(var(--muted-foreground))"
        strokeWidth="0.5"
        strokeOpacity="0.1"
      />
      <path
        d="M600 50 L600 750"
        stroke="hsl(var(--muted-foreground))"
        strokeWidth="0.5"
        strokeOpacity="0.1"
      />
      <path
        d="M800 50 L800 750"
        stroke="hsl(var(--muted-foreground))"
        strokeWidth="0.5"
        strokeOpacity="0.1"
      />
      <path
        d="M1000 50 L1000 750"
        stroke="hsl(var(--muted-foreground))"
        strokeWidth="0.5"
        strokeOpacity="0.1"
      />

      {/* Circular detection zones */}
      <path
        d="M600 400 m-150,0 a150,150 0 1,0 300,0 a150,150 0 1,0 -300,0"
        stroke="hsl(var(--primary))"
        strokeWidth="1"
        strokeOpacity="0.2"
      />
      <path
        d="M600 400 m-250,0 a250,250 0 1,0 500,0 a250,250 0 1,0 -500,0"
        stroke="hsl(var(--primary))"
        strokeWidth="0.75"
        strokeOpacity="0.15"
      />
      <path
        d="M600 400 m-350,0 a350,350 0 1,0 700,0 a350,350 0 1,0 -700,0"
        stroke="hsl(var(--primary))"
        strokeWidth="0.5"
        strokeOpacity="0.1"
      />

      {/* Data flow paths */}
      <path
        d="M50 700 Q300 600 400 650 T600 580 T800 620 T1150 500"
        stroke="hsl(var(--accent))"
        strokeWidth="2"
        strokeOpacity="0.25"
      />
      <path
        d="M50 100 Q200 150 350 120 T550 180 T750 140 T1150 200"
        stroke="hsl(var(--accent))"
        strokeWidth="2"
        strokeOpacity="0.25"
      />

      {/* Alert/warning triangular patterns */}
      <path
        d="M150 450 L180 400 L210 450 Z"
        stroke="hsl(var(--accent))"
        strokeWidth="1.5"
        strokeOpacity="0.4"
      />
      <path
        d="M1000 300 L1030 250 L1060 300 Z"
        stroke="hsl(var(--accent))"
        strokeWidth="1.5"
        strokeOpacity="0.4"
      />


      {/* Corner decorative lines */}
      <path
        d="M50 50 L150 50 L150 150"
        stroke="hsl(var(--primary))"
        strokeWidth="1"
        strokeOpacity="0.2"
      />
      <path
        d="M1150 50 L1050 50 L1050 150"
        stroke="hsl(var(--primary))"
        strokeWidth="1"
        strokeOpacity="0.2"
      />
      <path
        d="M50 750 L150 750 L150 650"
        stroke="hsl(var(--primary))"
        strokeWidth="1"
        strokeOpacity="0.2"
      />
      <path
        d="M1150 750 L1050 750 L1050 650"
        stroke="hsl(var(--primary))"
        strokeWidth="1"
        strokeOpacity="0.2"
      />
    </svg>
  );
};
