// src/components/KaiunEma.js
import React, { useState } from 'react';

const KaiunEma = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!isHovered) return;

    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();

    const x = ((e.clientY - rect.top) / element.clientHeight - 0.5) * 2;
    const y = ((e.clientX - rect.left) / element.clientWidth - 0.5) * 2;

    setRotation({
      x: x * -30,
      y: y * 30
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-100 to-orange-100 p-8">
      <div className="max-w-2xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">開運絵馬</h2>

        <div className="relative w-full perspective-2000">
          <div
            className="group relative w-full transition-all duration-300 ease-out"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setRotation({ x: 0, y: 0 });
            }}
            style={{
              transform: `
                perspective(2000px)
                rotateX(${rotation.x}deg)
                rotateY(${rotation.y}deg)
                scale3d(1.05, 1.05, 1.05)
              `,
              transformStyle: 'preserve-3d',
              transition: isHovered ? 'none' : 'all 0.5s ease-out'
            }}
          >
            <div
              className="w-full h-96 rounded-xl overflow-hidden shadow-2xl"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'translateZ(50px)',
                boxShadow: isHovered ?
                  `${-rotation.y}px ${-rotation.x}px 40px rgba(0,0,0,0.2),
                   0 30px 40px rgba(0,0,0,0.3)` :
                  '0 20px 30px rgba(0,0,0,0.2)'
              }}
            >
              <img
                src={process.env.PUBLIC_URL + '/ema-image.jpg'}
                alt="開運絵馬"
                className="w-full h-full object-cover"
                style={{
                  transform: 'translateZ(0)',
                  filter: 'brightness(0.8) contrast(1.1)'
                }}
              />

              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  transform: 'translateZ(100px)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-white drop-shadow-lg mb-4">
                    ぽっかどん開運絵馬
                  </h3>
                  <p className="text-xl text-white drop-shadow-lg">
                    2025年の必勝祈願
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KaiunEma;
