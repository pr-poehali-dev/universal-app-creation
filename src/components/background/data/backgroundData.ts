
import { DuoCharacterProps } from "../DuoCharacter";
import { FlagProps } from "../CountryFlag";

/**
 * Данные о флагах стран
 */
export const flagsData: FlagProps[] = [
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

/**
 * Данные о персонажах Дуо
 */
export const duoCharactersData: DuoCharacterProps[] = [
  { 
    size: "w-40 h-40", 
    position: "bottom-[2%] left-[5%]", 
    opacity: "opacity-70", 
    animation: "bounce 6s ease-in-out infinite", 
    zIndex: "z-1",
    expressionIndex: 0
  },
  { 
    size: "w-24 h-24", 
    position: "top-[50%] right-[3%]", 
    opacity: "opacity-40", 
    animation: "float 8s ease-in-out 1s infinite", 
    rotate: "rotate-12", 
    zIndex: "z-0",
    expressionIndex: 1
  },
  { 
    size: "w-32 h-32", 
    position: "top-[10%] left-[60%]", 
    opacity: "opacity-50", 
    animation: "wobble 10s ease-in-out 2s infinite", 
    rotate: "-rotate-6", 
    zIndex: "z-0",
    expressionIndex: 2
  },
  { 
    size: "w-28 h-28", 
    position: "bottom-[30%] right-[25%]", 
    opacity: "opacity-30", 
    animation: "float 9s ease-in-out 3s infinite", 
    rotate: "rotate-6", 
    zIndex: "z-0",
    expressionIndex: 3
  },
];
