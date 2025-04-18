
import { FC } from "react";

/**
 * Определение типа для флага страны
 */
export type FlagProps = {
  code: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  rotate: string;
  animation: string;
};

/**
 * Компонент для отображения флага страны
 */
const CountryFlag: FC<{ flag: FlagProps }> = ({ flag }) => {
  const style: React.CSSProperties = {
    animation: flag.animation,
    '--rotation': flag.rotate,
  } as React.CSSProperties;

  // Добавляем позиционирование только если оно задано
  if (flag.top) style.top = flag.top;
  if (flag.left) style.left = flag.left;
  if (flag.right) style.right = flag.right;
  if (flag.bottom) style.bottom = flag.bottom;

  return (
    <div
      className={`absolute w-16 h-12 opacity-[0.35] shadow-md ${flag.rotate}`}
      style={style}
    >
      {renderFlagSvg(flag.code)}
    </div>
  );
};

/**
 * Функция для рендеринга SVG-изображения флага
 */
const renderFlagSvg = (countryCode: string) => {
  switch (countryCode) {
    case "us":
      return (
        <svg viewBox="0 0 60 30" className="w-full h-full border border-gray-200 rounded">
          <rect width="60" height="30" fill="#B22234"/>
          <g fill="#FFFFFF">
            {[...Array(7)].map((_, i) => (
              <rect key={i} y={(i * 4.3 + 2.3).toString()} width="60" height="2.3" />
            ))}
          </g>
          <rect width="25.2" height="16.1" fill="#3C3B6E"/>
        </svg>
      );
    case "fr":
      return (
        <svg viewBox="0 0 30 20" className="w-full h-full border border-gray-200 rounded">
          <rect width="10" height="20" fill="#002654"/>
          <rect width="10" height="20" x="10" fill="#FFFFFF"/>
          <rect width="10" height="20" x="20" fill="#CE1126"/>
        </svg>
      );
    case "de":
      return (
        <svg viewBox="0 0 30 20" className="w-full h-full border border-gray-200 rounded">
          <rect width="30" height="6.67" fill="#000000"/>
          <rect width="30" height="6.67" y="6.67" fill="#DD0000"/>
          <rect width="30" height="6.67" y="13.33" fill="#FFCE00"/>
        </svg>
      );
    case "ru":
      return (
        <svg viewBox="0 0 30 20" className="w-full h-full border border-gray-200 rounded">
          <rect width="30" height="6.67" fill="#FFFFFF"/>
          <rect width="30" height="6.67" y="6.67" fill="#0039A6"/>
          <rect width="30" height="6.67" y="13.33" fill="#D52B1E"/>
        </svg>
      );
    case "jp":
      return (
        <svg viewBox="0 0 30 20" className="w-full h-full border border-gray-200 rounded">
          <rect width="30" height="20" fill="#FFFFFF"/>
          <circle cx="15" cy="10" r="6" fill="#BC002D"/>
        </svg>
      );
    case "es":
      return (
        <svg viewBox="0 0 30 20" className="w-full h-full border border-gray-200 rounded">
          <rect width="30" height="20" fill="#FFC400"/>
          <rect width="30" height="5" y="5" fill="#C60B1E"/>
          <rect width="30" height="5" y="10" fill="#C60B1E"/>
        </svg>
      );
    case "it":
      return (
        <svg viewBox="0 0 30 20" className="w-full h-full border border-gray-200 rounded">
          <rect width="10" height="20" fill="#009246"/>
          <rect width="10" height="20" x="10" fill="#FFFFFF"/>
          <rect width="10" height="20" x="20" fill="#CE2B37"/>
        </svg>
      );
    case "cn":
      return (
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
      );
    case "br":
      return (
        <svg viewBox="0 0 30 20" className="w-full h-full border border-gray-200 rounded">
          <rect width="30" height="20" fill="#009C3B"/>
          <polygon points="15,2 28,10 15,18 2,10" fill="#FFDF00"/>
          <circle cx="15" cy="10" r="5" fill="#002776"/>
          <path d="M15,5 Q18,10 15,15 Q12,10 15,5" fill="#FFFFFF"/>
        </svg>
      );
    default:
      return (
        <div className="w-full h-full border border-gray-200 rounded flex items-center justify-center overflow-hidden">
          <span className="text-xs font-bold text-gray-500">{countryCode.toUpperCase()}</span>
        </div>
      );
  }
};

export default CountryFlag;
