"use client";
// src/components/ui/CustomCursor.tsx
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for touch device — skip cursor on mobile
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;
    let animFrame: number;

    const moveDot = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`;
      }
    };

    const animateRing = () => {
      ringX += (dotX - ringX) * 0.12;
      ringY += (dotY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      }
      animFrame = requestAnimationFrame(animateRing);
    };

    // Grow ring on hoverable elements
    const handleHover = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "56px";
        ringRef.current.style.height = "56px";
        ringRef.current.style.borderColor = "rgba(59, 130, 246, 0.9)";
      }
    };
    const handleLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "36px";
        ringRef.current.style.height = "36px";
        ringRef.current.style.borderColor = "rgba(59, 130, 246, 0.6)";
      }
    };

    document.addEventListener("mousemove", moveDot);
    document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });

    animFrame = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener("mousemove", moveDot);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  );
}
