
import { FC } from "react";

/**
 * Данные о буквах на фоне
 */
type LetterProps = {
  character: string;
  position: string;
  color: string;
  size: string;
  rotation: string;
  delay: string;
};

/**
 * Компонент отображения декоративных букв на фоне
 */
const BackgroundLetters: FC = () => {
  const letters: LetterProps[] = [
    { character: "A", position: "top-20 left-[5%]", color: "text-blue-500", size: "text-6xl", rotation: "rotate-12", delay: "0s" },
    { character: "B", position: "top-40 right-[10%]", color: "text-green-500", size: "text-7xl", rotation: "-rotate-6", delay: "1s" },
    { character: "C", position: "top-[30%] left-[20%]", color: "text-yellow-500", size: "text-8xl", rotation: "rotate-45", delay: "2s" },
    { character: "Я", position: "bottom-[20%] right-[15%]", color: "text-purple-500", size: "text-7xl", rotation: "-rotate-12", delay: "1.5s" },
    { character: "あ", position: "bottom-[10%] left-[30%]", color: "text-pink-500", size: "text-8xl", rotation: "rotate-6", delay: "2.5s" },
    { character: "汉", position: "top-[25%] right-[30%]", color: "text-red-500", size: "text-7xl", rotation: "rotate-9", delay: "0.5s" },
    { character: "Ñ", position: "bottom-[35%] left-[15%]", color: "text-orange-500", size: "text-6xl", rotation: "-rotate-9", delay: "3s" },
  ];

  return (
    <>
      {letters.map((letter, index) => (
        <div
          key={`letter-${index}`}
          className={`absolute opacity-20 font-bold ${letter.position} ${letter.color} ${letter.size} ${letter.rotation} float`}
          style={{ animationDelay: letter.delay }}
        >
          {letter.character}
        </div>
      ))}
    </>
  );
};

export default BackgroundLetters;
