'use client'
import React, { useState, useEffect } from 'react';

export default function BouncingLogo () {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [direction, setDirection] = useState({ x: 1, y: 1 });

  useEffect(() => {
    const handleAnimation = () => {
      let { top, left } = position;
      let { x, y } = direction;

      // Change direction when hitting the edge of the container
      if (top <= 0 || top >= window.innerHeight - 50) y *= -1;
      if (left <= 0 || left >= window.innerWidth - 50) x *= -1;

      setPosition({ top: top + y * 2, left: left + x * 2 });
      setDirection({ x, y });
    };

    const interval = setInterval(handleAnimation, 10);
    return () => clearInterval(interval);
  }, [position, direction]);

  return (
    <div
      style={{ top: position.top, left: position.left }}
      className="absolute w-12 h-12 bg-red-500 text-white text-center flex items-center justify-center rounded-full"
    >
      DVD
    </div>
  );
};
