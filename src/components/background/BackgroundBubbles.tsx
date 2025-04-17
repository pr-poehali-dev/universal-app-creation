
import { FC } from "react";

/**
 * Данные о круглых элементах
 */
type BubbleProps = {
  position: string;
  size: string;
  color: string;
  delay: string;
};

/**
 * Данные о речевых пузырях
 */
type SpeechBubbleProps = {
  position: string;
  size: string;
  color: string;
  rotation: string;
  delay: string;
  variant: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

/**
 * Компонент отображения декоративных элементов (пузыри, блоки)
 */
const BackgroundBubbles: FC = () => {
  // Круглые элементы
  const circles: BubbleProps[] = [
    { position: "top-[15%] right-[25%]", size: "w-64 h-64", color: "bg-blue-100", delay: "0s" },
    { position: "bottom-[25%] left-[10%]", size: "w-80 h-80", color: "bg-green-100", delay: "2.5s" },
    { position: "top-[45%] left-[30%]", size: "w-48 h-48", color: "bg-yellow-100", delay: "1.2s" },
  ];

  // Речевые пузыри
  const speechBubbles: SpeechBubbleProps[] = [
    { position: "top-[60%] right-[5%]", size: "w-32 h-32", color: "bg-yellow-200", rotation: "rotate-12", delay: "1s", variant: "top-right" },
    { position: "top-[10%] left-[40%]", size: "w-24 h-24", color: "bg-purple-200", rotation: "-rotate-12", delay: "2s", variant: "top-left" },
    { position: "bottom-[40%] right-[15%]", size: "w-28 h-28", color: "bg-blue-200", rotation: "rotate-6", delay: "3s", variant: "bottom-right" },
  ];

  // Учебные элементы (полоски)
  const strips = [
    { position: "top-[35%] right-[35%]", size: "w-32 h-4", color: "bg-red-200", rotation: "-rotate-45", delay: "0s" },
    { position: "bottom-[45%] left-[20%]", size: "w-24 h-4", color: "bg-blue-200", rotation: "rotate-20", delay: "1.5s" },
    { position: "top-[65%] left-[25%]", size: "w-28 h-4", color: "bg-yellow-200", rotation: "rotate-12", delay: "2.5s" },
  ];

  // Определяем классы для разных вариантов речевых пузырей
  const getBubbleClass = (variant: SpeechBubbleProps["variant"]) => {
    switch (variant) {
      case "top-left": return "rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl";
      case "top-right": return "rounded-tl-3xl rounded-tr-3xl rounded-br-3xl";
      case "bottom-left": return "rounded-tl-3xl rounded-bl-3xl rounded-br-3xl";
      case "bottom-right": return "rounded-tr-3xl rounded-bl-3xl rounded-br-3xl";
    }
  };

  return (
    <>
      {/* Круглые элементы */}
      {circles.map((circle, index) => (
        <div
          key={`circle-${index}`}
          className={`absolute ${circle.position} ${circle.size} rounded-full ${circle.color} opacity-30 blur-3xl pulse`}
          style={{ animationDelay: circle.delay }}
        />
      ))}
      
      {/* Иконки разговорных пузырей */}
      {speechBubbles.map((bubble, index) => (
        <div
          key={`bubble-${index}`}
          className={`absolute ${bubble.position} ${bubble.size} ${getBubbleClass(bubble.variant)} ${bubble.color} opacity-20 ${bubble.rotation} float`}
          style={{ animationDelay: bubble.delay }}
        />
      ))}
      
      {/* Учебные элементы (полоски) */}
      {strips.map((strip, index) => (
        <div
          key={`strip-${index}`}
          className={`absolute ${strip.position} ${strip.size} ${strip.color} opacity-25 ${strip.rotation} wobble`}
          style={{ animationDelay: strip.delay }}
        />
      ))}
    </>
  );
};

export default BackgroundBubbles;
