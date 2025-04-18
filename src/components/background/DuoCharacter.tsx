
import { FC } from "react";

/**
 * Определение типа для стилей персонажа Дуо
 */
export type DuoCharacterProps = {
  size: string;
  position: string;
  opacity: string;
  animation: string;
  zIndex?: string;
  rotate?: string;
  expressionIndex?: number;
};

/**
 * Определение типа для выражений персонажа
 */
export type DuoExpression = {
  eyes: { rx: number; ry: number };
  brows: { y: number; height: number };
};

/**
 * Доступные выражения для персонажа Дуо
 */
export const duoExpressions: DuoExpression[] = [
  { eyes: { ry: 7, rx: 7 }, brows: { y: 15, height: 4 } }, // Нормальный
  { eyes: { ry: 3, rx: 7 }, brows: { y: 12, height: 5 } }, // Удивленный
  { eyes: { ry: 2, rx: 9 }, brows: { y: 10, height: 6 } }, // Сердитый
  { eyes: { ry: 4, rx: 4 }, brows: { y: 16, height: 3 } }, // Счастливый
];

/**
 * Компонент персонажа Дуо
 */
const DuoCharacter: FC<{ character: DuoCharacterProps }> = ({ character }) => {
  const expressionIndex = character.expressionIndex || 0;
  const expression = duoExpressions[expressionIndex % duoExpressions.length];

  return (
    <div 
      className={`absolute ${character.position} ${character.size} ${character.opacity} ${character.zIndex || ""} ${character.rotate || ""}`}
      style={{ animation: character.animation }}
    >
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Тело */}
        <ellipse cx="50" cy="65" rx="30" ry="35" fill="#58CC02" />
        {/* Голова */}
        <circle cx="50" cy="30" r="25" fill="#58CC02" />
        {/* Глаза */}
        <ellipse cx="40" cy="25" rx={expression.eyes.rx} ry={expression.eyes.ry} fill="white" />
        <ellipse cx="60" cy="25" rx={expression.eyes.rx} ry={expression.eyes.ry} fill="white" />
        <circle cx="40" cy="25" r="3" fill="black" />
        <circle cx="60" cy="25" r="3" fill="black" />
        {/* Клюв */}
        <polygon points="50,35 40,45 60,45" fill="#FFC800" />
        {/* Брови */}
        <rect x="33" y={expression.brows.y} width="14" height={expression.brows.height} fill="#45A105" rx="2" />
        <rect x="53" y={expression.brows.y} width="14" height={expression.brows.height} fill="#45A105" rx="2" />
      </svg>
    </div>
  );
};

/**
 * Компонент персонажа Дуо с речевым пузырем
 */
export const DuoWithSpeechBubble: FC<{ message: string; delay?: string }> = ({ message, delay = "1.5s" }) => {
  return (
    <div className="absolute top-[20%] left-[45%] opacity-60 float" style={{ animationDelay: delay }}>
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
        <span className="text-xs text-green-600 font-bold">{message}</span>
      </div>
    </div>
  );
};

/**
 * Большой персонаж Дуо с лапками
 */
export const LargeDuoCharacter: FC = () => {
  return (
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
  );
};

export default DuoCharacter;
