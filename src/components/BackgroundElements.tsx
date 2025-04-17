
import { FC } from "react";

const BackgroundElements: FC = () => {
  // Флаги стран в большем количестве
  const flags = [
    { code: "us", top: "15%", left: "8%", rotate: "rotate-6", animation: "float 8s ease-in-out infinite" },
    { code: "es", top: "25%", right: "12%", rotate: "-rotate-3", animation: "float 9s ease-in-out 1s infinite" },
    { code: "fr", bottom: "20%", left: "15%", rotate: "rotate-12", animation: "float 10s ease-in-out 2s infinite" },
    { code: "de", top: "40%", right: "5%", rotate: "-rotate-6", animation: "float 11s ease-in-out 3s infinite" },
    { code: "it", bottom: "25%", right: "18%", rotate: "rotate-3", animation: "float 9s ease-in-out 1.5s infinite" },
    { code: "jp", top: "10%", left: "25%", rotate: "-rotate-12", animation: "float 8s ease-in-out 0.5s infinite" },
    { code: "ru", bottom: "35%", right: "30%", rotate: "rotate-9", animation: "float 12s ease-in-out 2.5s infinite" },
    { code: "cn", top: "30%", left: "40%", rotate: "-rotate-15", animation: "float 10s ease-in-out 3.5s infinite" },
    { code: "br", bottom: "15%", right: "40%", rotate: "rotate-6", animation: "float 9s ease-in-out 1.2s infinite" },
  ];

  // Создаем несколько персонажей Дуо с разными размерами и положениями
  const duoCharacters = [
    { size: "w-40 h-40", position: "bottom-[2%] left-[5%]", opacity: "opacity-70", animation: "bounce 6s ease-in-out infinite", zIndex: "z-1" },
    { size: "w-24 h-24", position: "top-[50%] right-[3%]", opacity: "opacity-40", animation: "float 8s ease-in-out 1s infinite", rotate: "rotate-12", zIndex: "z-0" },
    { size: "w-32 h-32", position: "top-[10%] left-[60%]", opacity: "opacity-50", animation: "wobble 10s ease-in-out 2s infinite", rotate: "-rotate-6", zIndex: "z-0" },
    { size: "w-28 h-28", position: "bottom-[30%] right-[25%]", opacity: "opacity-30", animation: "float 9s ease-in-out 3s infinite", rotate: "rotate-6", zIndex: "z-0" },
  ];

  // Различные эмоции для персонажей Дуо
  const duoExpressions = [
    { eyes: { ry: 7, rx: 7 }, brows: { y: 15, height: 4 } }, // Нормальный
    { eyes: { ry: 3, rx: 7 }, brows: { y: 12, height: 5 } }, // Удивленный
    { eyes: { ry: 2, rx: 9 }, brows: { y: 10, height: 6 } }, // Сердитый
    { eyes: { ry: 4, rx: 4 }, brows: { y: 16, height: 3 } }, // Счастливый
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Стилизация для анимаций */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(var(--rotation, 0deg)); }
          50% { transform: translateY(-15px) rotate(var(--rotation, 0deg)); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          40% { transform: translateY(-20px); }
          60% { transform: translateY(-15px); }
        }
        @keyframes wobble {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        .float {
          animation: float 10s ease-in-out infinite;
        }
        .bounce {
          animation: bounce 6s ease-in-out infinite;
        }
        .wobble {
          animation: wobble 8s ease-in-out infinite;
        }
        .pulse {
          animation: pulse 5s ease-in-out infinite;
        }
      `}</style>

      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-radial from-green-50/20 via-blue-50/10 to-transparent"></div>
      
      {/* Летающие буквы на фоне */}
      <div className="absolute top-20 left-[5%] opacity-20 text-6xl font-bold text-blue-500 rotate-12 float">A</div>
      <div className="absolute top-40 right-[10%] opacity-15 text-7xl font-bold text-green-500 -rotate-6 float" style={{ animationDelay: "1s" }}>B</div>
      <div className="absolute top-[30%] left-[20%] opacity-20 text-8xl font-bold text-yellow-500 rotate-45 float" style={{ animationDelay: "2s" }}>C</div>
      <div className="absolute bottom-[20%] right-[15%] opacity-15 text-7xl font-bold text-purple-500 -rotate-12 float" style={{ animationDelay: "1.5s" }}>Я</div>
      <div className="absolute bottom-[10%] left-[30%] opacity-10 text-8xl font-bold text-pink-500 rotate-6 float" style={{ animationDelay: "2.5s" }}>あ</div>
      <div className="absolute top-[25%] right-[30%] opacity-15 text-7xl font-bold text-red-500 rotate-9 float" style={{ animationDelay: "0.5s" }}>汉</div>
      <div className="absolute bottom-[35%] left-[15%] opacity-20 text-6xl font-bold text-orange-500 -rotate-9 float" style={{ animationDelay: "3s" }}>Ñ</div>
      
      {/* Круглые элементы */}
      <div className="absolute top-[15%] right-[25%] w-64 h-64 rounded-full bg-blue-100 opacity-30 blur-3xl pulse"></div>
      <div className="absolute bottom-[25%] left-[10%] w-80 h-80 rounded-full bg-green-100 opacity-40 blur-3xl pulse" style={{ animationDelay: "2.5s" }}></div>
      <div className="absolute top-[45%] left-[30%] w-48 h-48 rounded-full bg-yellow-100 opacity-30 blur-3xl pulse" style={{ animationDelay: "1.2s" }}></div>
      
      {/* Иконки разговорных пузырей */}
      <div className="absolute top-[60%] right-[5%] w-32 h-32 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl bg-yellow-200 opacity-20 rotate-12 float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-[10%] left-[40%] w-24 h-24 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl bg-purple-200 opacity-15 -rotate-12 float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-[40%] right-[15%] w-28 h-28 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl bg-blue-200 opacity-20 rotate-6 float" style={{ animationDelay: "3s" }}></div>

      {/* Персонажи Дуо (зеленый маскот) с разными стилями */}
      {duoCharacters.map((character, index) => (
        <div 
          key={`duo-${index}`}
          className={`absolute ${character.position} ${character.size} ${character.opacity} ${character.zIndex || ""} ${character.rotate || ""}`}
          style={{ animation: character.animation }}
        >
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Тело */}
            <ellipse cx="50" cy="65" rx="30" ry="35" fill="#58CC02" />
            {/* Голова */}
            <circle cx="50" cy="30" r="25" fill="#58CC02" />
            {/* Глаза */}
            <circle cx="40" cy="25" r={duoExpressions[index % 4].eyes.rx} ry={duoExpressions[index % 4].eyes.ry} fill="white" />
            <circle cx="60" cy="25" r={duoExpressions[index % 4].eyes.rx} ry={duoExpressions[index % 4].eyes.ry} fill="white" />
            <circle cx="40" cy="25" r="3" fill="black" />
            <circle cx="60" cy="25" r="3" fill="black" />
            {/* Клюв */}
            <polygon points="50,35 40,45 60,45" fill="#FFC800" />
            {/* Брови */}
            <rect x="33" y={duoExpressions[index % 4].brows.y} width="14" height={duoExpressions[index % 4].brows.height} fill="#45A105" rx="2" />
            <rect x="53" y={duoExpressions[index % 4].brows.y} width="14" height={duoExpressions[index % 4].brows.height} fill="#45A105" rx="2" />
          </svg>
        </div>
      ))}

      {/* Дуо с речевым пузырем */}
      <div className="absolute top-[20%] left-[45%] opacity-60 float" style={{ animationDelay: "1.5s" }}>
        <div className="w-16 h-16">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Голова */}
            <circle cx="50" cy="50" r="25" fill="#58CC02" />
            {/* Глаза */}
            <circle cx="40" cy="45" r="7" fill="white" />
            <circle cx="60" cy="45" r="7" fill="white" />
            <circle cx="40" cy="45" r="3" fill="black" />
            <circle cx="60" cy="45" r="3" fill="black" />
            {/* Клюв */}
            <polygon points="50,55 40,65 60,65" fill="#FFC800" />
            {/* Брови */}
            <rect x="33" y="35" width="14" height="4" fill="#45A105" rx="2" />
            <rect x="53" y="35" width="14" height="4" fill="#45A105" rx="2" />
          </svg>
        </div>
        <div className="w-24 h-16 bg-white rounded-tl-xl rounded-tr-xl rounded-br-xl mt-[-10px] ml-[20px] flex items-center justify-center p-2 shadow-md">
          <span className="text-xs text-green-600 font-bold">¡Hola!</span>
        </div>
      </div>

      {/* Большой Дуо снизу */}
      <div className="absolute bottom-[-5%] left-[10%] w-60 h-60 opacity-80 bounce z-10">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Тело */}
          <ellipse cx="50" cy="65" rx="30" ry="35" fill="#58CC02" />
          {/* Голова */}
          <circle cx="50" cy="30" r="25" fill="#58CC02" />
          {/* Глаза */}
          <circle cx="40" cy="25" r="7" fill="white" />
          <circle cx="60" cy="25" r="7" fill="white" />
          <circle cx="40" cy="25" r="3" fill="black" />
          <circle cx="60" cy="25" r="3" fill="black" />
          {/* Клюв */}
          <polygon points="50,35 40,45 60,45" fill="#FFC800" />
          {/* Брови */}
          <rect x="33" y="15" width="14" height="4" fill="#45A105" rx="2" />
          <rect x="53" y="15" width="14" height="4" fill="#45A105" rx="2" />
          {/* Лапки */}
          <ellipse cx="35" cy="90" rx="10" ry="5" fill="#45A105" />
          <ellipse cx="65" cy="90" rx="10" ry="5" fill="#45A105" />
        </svg>
      </div>

      {/* Флаги стран */}
      {flags.map((flag, index) => {
        const style: React.CSSProperties = {
          animation: flag.animation,
          '--rotation': flag.rotate,
        } as React.CSSProperties;

        return (
          <div
            key={index}
            className={`absolute w-16 h-12 opacity-[0.35] shadow-md ${flag.rotate}`}
            style={{
              top: flag.top,
              left: flag.left,
              right: flag.right,
              bottom: flag.bottom,
              ...style
            }}
          >
            {/* Флаг SVG встроен для надежной работы */}
            {flag.code === "us" && (
              <svg viewBox="0 0 60 30" className="w-full h-full border border-gray-200 rounded">
                <rect width="60" height="30" fill="#B22234"/>
                <g fill="#FFFFFF">
                  {[...Array(7)].map((_, i) => (
                    <rect key={i} y={i * 4.3 + 2.3} width="60" height="2.3" />
                  ))}
                </g>
                <rect width="25.2" height="16.1" fill="#3C3B6E"/>
              </svg>
            )}
            {flag.code === "fr" && (
              <svg viewBox="0 0 30 20" className="w-full h-full border border-gray-200 rounded">
                <rect width="10" height="20" fill="#002654"/>
                <rect width="10" height="20" x="10" fill="#FFFFFF"/>
                <rect width="10" height="20" x="20" fill="#CE1126"/>
              </svg>
            )}
            {flag.code === "de" && (
              <svg viewBox="0 0 30 20" className="w-full h-full border border-gray-200 rounded">
                <rect width="30" height="6.67" fill="#000000"/>
                <rect width="30" height="6.67" y="6.67" fill="#DD0000"/>
                <rect width="30" height="6.67" y="13.33" fill="#FFCE00"/>
              </svg>
            )}
            {flag.code === "ru" && (
              <svg viewBox="0 0 30 20" className="w-full h-full border border-gray-200 rounded">
                <rect width="30" height="6.67" fill="#FFFFFF"/>
                <rect width="30" height="6.67" y="6.67" fill="#0039A6"/>
                <rect width="30" height="6.67" y="13.33" fill="#D52B1E"/>
              </svg>
            )}
            {flag.code === "jp" && (
              <svg viewBox="0 0 30 20" className="w-full h-full border border-gray-200 rounded">
                <rect width="30" height="20" fill="#FFFFFF"/>
                <circle cx="15" cy="10" r="6" fill="#BC002D"/>
              </svg>
            )}
            {flag.code === "es" && (
              <svg viewBox="0 0 30 20" className="w-full h-full border border-gray-200 rounded">
                <rect width="30" height="20" fill="#FFC400"/>
                <rect width="30" height="5" y="5" fill="#C60B1E"/>
                <rect width="30" height="5" y="10" fill="#C60B1E"/>
              </svg>
            )}
            {flag.code === "it" && (
              <svg viewBox="0 0 30 20" className="w-full h-full border border-gray-200 rounded">
                <rect width="10" height="20" fill="#009246"/>
                <rect width="10" height="20" x="10" fill="#FFFFFF"/>
                <rect width="10" height="20" x="20" fill="#CE2B37"/>
              </svg>
            )}
            {flag.code === "cn" && (
              <svg viewBox="0 0 30 20" className="w-full h-full border border-gray-200 rounded">
                <rect width="30" height="20" fill="#DE2910"/>
                <g fill="#FFDE00">
                  <polygon points="5,3 6.5,7.5 2.5,5 7.5,5 3.5,7.5"/>
                  <circle cx="10" cy="3" r="1"/>
                  <circle cx="12" cy="5" r="1"/>
                  <circle cx="12" cy="8" r="1"/>
                  <circle cx="10" cy="10" r="1"/>
                </g>
              </svg>
            )}
            {flag.code === "br" && (
              <svg viewBox="0 0 30 20" className="w-full h-full border border-gray-200 rounded">
                <rect width="30" height="20" fill="#009C3B"/>
                <polygon points="15,2 28,10 15,18 2,10" fill="#FFDF00"/>
                <circle cx="15" cy="10" r="5" fill="#002776"/>
                <path d="M15,5 Q18,10 15,15 Q12,10 15,5" fill="#FFFFFF"/>
              </svg>
            )}
          </div>
        );
      })}

      {/* Учебные элементы */}
      <div className="absolute top-[35%] right-[35%] w-32 h-4 bg-red-200 opacity-25 -rotate-45 wobble"></div>
      <div className="absolute bottom-[45%] left-[20%] w-24 h-4 bg-blue-200 opacity-30 rotate-20 wobble" style={{ animationDelay: "1.5s" }}></div>
      <div className="absolute top-[65%] left-[25%] w-28 h-4 bg-yellow-200 opacity-20 rotate-12 wobble" style={{ animationDelay: "2.5s" }}></div>
    </div>
  );
};

export default BackgroundElements;
