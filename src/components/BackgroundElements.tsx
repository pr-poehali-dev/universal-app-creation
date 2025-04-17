
import { FC } from "react";
import AnimationStyles from "./background/AnimationStyles";
import BackgroundLetters from "./background/BackgroundLetters";
import BackgroundBubbles from "./background/BackgroundBubbles";
import DuoCharacter, { DuoWithSpeechBubble, LargeDuoCharacter } from "./background/DuoCharacter";
import CountryFlag from "./background/CountryFlag";
import { duoCharactersData, flagsData } from "./background/data/backgroundData";

/**
 * Компонент фоновых элементов для приложения.
 * Собирает различные декоративные элементы в единую композицию.
 */
const BackgroundElements: FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Стили анимаций */}
      <AnimationStyles />

      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-radial from-green-50/20 via-blue-50/10 to-transparent"></div>
      
      {/* Декоративные буквы */}
      <BackgroundLetters />
      
      {/* Декоративные пузыри и элементы */}
      <BackgroundBubbles />

      {/* Персонажи Дуо (зеленый маскот) */}
      {duoCharactersData.map((character, index) => (
        <DuoCharacter key={`duo-${index}`} character={character} />
      ))}

      {/* Дуо с речевым пузырем */}
      <DuoWithSpeechBubble message="¡Hola!" delay="1.5s" />

      {/* Большой Дуо снизу */}
      <LargeDuoCharacter />

      {/* Флаги стран */}
      {flagsData.map((flag, index) => (
        <CountryFlag key={`flag-${index}`} flag={flag} />
      ))}
    </div>
  );
};

export default BackgroundElements;
