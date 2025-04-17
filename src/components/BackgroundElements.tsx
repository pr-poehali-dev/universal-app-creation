
import { FC } from "react";

const BackgroundElements: FC = () => {
  // Флаги стран
  const flags = [
    { code: "us", top: "15%", left: "8%", rotate: "rotate-6" },
    { code: "es", top: "25%", right: "12%", rotate: "-rotate-3" },
    { code: "fr", bottom: "20%", left: "15%", rotate: "rotate-12" },
    { code: "de", top: "40%", right: "5%", rotate: "-rotate-6" },
    { code: "it", bottom: "25%", right: "18%", rotate: "rotate-3" },
    { code: "jp", top: "10%", left: "25%", rotate: "-rotate-12" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Летающие буквы на фоне */}
      <div className="absolute top-20 left-[5%] opacity-20 text-6xl font-bold text-blue-500 rotate-12">A</div>
      <div className="absolute top-40 right-[10%] opacity-15 text-7xl font-bold text-green-500 -rotate-6">B</div>
      <div className="absolute top-[30%] left-[20%] opacity-20 text-8xl font-bold text-yellow-500 rotate-45">C</div>
      <div className="absolute bottom-[20%] right-[15%] opacity-15 text-7xl font-bold text-purple-500 -rotate-12">Я</div>
      <div className="absolute bottom-[10%] left-[30%] opacity-10 text-8xl font-bold text-pink-500 rotate-6">あ</div>
      
      {/* Круглые элементы */}
      <div className="absolute top-[15%] right-[25%] w-64 h-64 rounded-full bg-blue-100 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-[25%] left-[10%] w-80 h-80 rounded-full bg-green-100 opacity-40 blur-3xl"></div>
      
      {/* Иконки разговорных пузырей */}
      <div className="absolute top-[60%] right-[5%] w-32 h-32 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl bg-yellow-200 opacity-20 rotate-12"></div>
      <div className="absolute top-[10%] left-[40%] w-24 h-24 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl bg-purple-200 opacity-15 -rotate-12"></div>

      {/* Персонаж Дуо (зеленый маскот) */}
      <div className="absolute bottom-[5%] left-[5%] w-32 h-32 opacity-40">
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
        </svg>
      </div>
      
      <div className="absolute top-[50%] right-[7%] w-24 h-24 opacity-25 rotate-12">
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
        </svg>
      </div>

      {/* Флаги стран */}
      {flags.map((flag, index) => (
        <div
          key={index}
          className={`absolute w-16 h-12 opacity-25 shadow-sm ${flag.rotate}`}
          style={{
            top: flag.top,
            left: flag.left,
            right: flag.right,
            bottom: flag.bottom,
            backgroundImage: `url('/flags/${flag.code}.svg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Если флаги отсутствуют, отрисуем заглушки стилизованные под флаги */}
          <div className="w-full h-full border border-gray-300 rounded flex items-center justify-center overflow-hidden">
            <span className="text-xs font-bold text-gray-500">{flag.code.toUpperCase()}</span>
          </div>
        </div>
      ))}

      {/* Дополнительный персонаж Дуо с речевым пузырем */}
      <div className="absolute top-[20%] left-[45%] opacity-30">
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
        <div className="w-24 h-16 bg-white rounded-tl-xl rounded-tr-xl rounded-br-xl mt-[-10px] ml-[20px] flex items-center justify-center p-2">
          <span className="text-xs text-green-600 font-bold">¡Hola!</span>
        </div>
      </div>

      {/* Стрелки и линии */}
      <div className="absolute top-[40%] right-[40%] w-40 h-2 bg-pink-200 opacity-30 rotate-45"></div>
      <div className="absolute bottom-[30%] right-[30%] w-32 h-2 bg-blue-200 opacity-25 -rotate-45"></div>
    </div>
  );
};

export default BackgroundElements;
