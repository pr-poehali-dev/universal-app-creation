
import { FC } from "react";

const BackgroundElements: FC = () => {
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

      {/* Стрелки и линии */}
      <div className="absolute top-[40%] right-[40%] w-40 h-2 bg-pink-200 opacity-30 rotate-45"></div>
      <div className="absolute bottom-[30%] right-[30%] w-32 h-2 bg-blue-200 opacity-25 -rotate-45"></div>
    </div>
  );
};

export default BackgroundElements;
