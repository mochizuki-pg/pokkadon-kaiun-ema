import React, { useState } from 'react';

const KaiunEma = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const handleMove = (e) => {
    if (!isActive) return;

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();

    const x = ((clientY - rect.top) / element.clientHeight - 0.5) * 2;
    const y = ((clientX - rect.left) / element.clientWidth - 0.5) * 2;

    setRotation({
      x: x * -30,
      y: y * 30
    });
  };

  const handleStart = () => {
    setIsActive(true);
  };

  const handleEnd = () => {
    setIsActive(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 sm:p-8">
      <div className="w-8/12 max-w-md sm:max-w-xl md:max-w-2xl space-y-6 sm:space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">ぽっかどん開運絵馬</h2>

        <div className="relative w-full perspective-2000">
          <div
            className="group relative w-full transition-all duration-300 ease-out"
            onMouseMove={handleMove}
            onMouseEnter={handleStart}
            onMouseLeave={handleEnd}
            onTouchMove={handleMove}
            onTouchStart={handleStart}
            onTouchEnd={handleEnd}
            style={{
              transform: `
                perspective(2000px)
                rotateX(${rotation.x}deg)
                rotateY(${rotation.y}deg)
                scale3d(1.05, 1.05, 1.05)
              `,
              transformStyle: 'preserve-3d',
              transition: isActive ? 'none' : 'all 0.5s ease-out'
            }}
          >
            <div
              className="w-full aspect-square rounded-xl overflow-hidden shadow-2xl relative"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'translateZ(50px)',
                boxShadow: isActive ?
                  `${-rotation.y}px ${-rotation.x}px 40px rgba(0,0,0,0.2),
                   0 30px 40px rgba(0,0,0,0.3)` :
                  '0 20px 30px rgba(0,0,0,0.2)'
              }}
            >
              <img
                src="https://pbs.twimg.com/media/Gg8AAxVbcAAxOmw?format=jpg&name=large"
                alt="開運絵馬"
                className="w-full h-full object-cover"
                style={{
                  transform: 'translateZ(0)',
                  filter: 'brightness(1.0) contrast(1.0)'
                }}
              />

              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background: `
                    linear-gradient(
                      135deg,
                      transparent 0%,
                      rgba(255,255,255,0.4) 45%,
                      rgba(255,255,255,0.7) 50%,
                      rgba(255,255,255,0.4) 55%,
                      transparent 100%
                    )
                  `,
                  backgroundSize: '200% 200%',
                  backgroundPosition: `${50 + rotation.y * 2}% ${50 + rotation.x * 2}%`,
                  mixBlendMode: 'overlay',
                  transition: isActive ? 'none' : 'background-position 0.5s ease-out'
                }}
              />

              {/* 7色の虹色ホログラム (薄め) */}
              <div
                className="absolute inset-0"
                style={{
                  background: `
                    linear-gradient(
                      45deg,
                      rgba(255,0,0,0.5) 0%,
                      rgba(255,165,0,0.5) 14.3%,
                      rgba(255,255,0,0.5) 28.6%,
                      rgba(0,255,0,0.5) 42.9%,
                      rgba(0,255,255,0.5) 57.2%,
                      rgba(0,0,255,0.5) 71.5%,
                      rgba(255,0,255,0.5) 85.8%,
                      rgba(255,0,0,0.5) 100%
                    )
                  `,
                  backgroundSize: '500% 500%',
                  backgroundPosition: `${50 - rotation.y * 8}% ${50 - rotation.x * 8}%`,
                  mixBlendMode: 'soft-light',
                  opacity: isActive ? 0.4 : 0.0,
                  transition: isActive ? 'none' : 'all 0.5s ease-out'
                }}
              />

              <div
                className="absolute inset-x-0 flex justify-center"
                style={{
                  transform: 'translateZ(100px)',
                  transformStyle: 'preserve-3d',
                  top: '60%'
                }}
              >
                <div className="text-center">
                  <h3 className="text-m sm:text-3xl font-bold text-black mb-2 select-none">
                    今年で三十だ😂!!
                  </h3>
                  <p className="text-xs sm:text-xl font-bold text-black select-none">
                    一年無事に過ごせますように
                  </p>
                  <p className="text-xs sm:text-xl font-bold text-black select-none">
                    by もちさん
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-2">
          <p className="text-s text-gray-500 mt-4">
            ※ 画像は <a href="https://x.com/don_dawn_world/status/1877719585492808162/photo/1" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">ここ</a> にアクセスして取得しているので保存はしていません
          </p>
        </div>
      </div>
    </div>
  );
};

export default KaiunEma;
