
import { FC } from "react";

interface FlagIconProps {
  code: string;
  className?: string;
}

// Компонент для отображения флагов стран в SVG
const FlagIcon: FC<FlagIconProps> = ({ code, className = "" }) => {
  // Словарь с основными флагами
  // Можно расширить при необходимости
  const flagComponents: Record<string, JSX.Element> = {
    us: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className={className}>
        <rect width="60" height="30" fill="#B22234"/>
        <rect y="2.3" width="60" height="2.3" fill="#FFFFFF"/>
        <rect y="6.9" width="60" height="2.3" fill="#FFFFFF"/>
        <rect y="11.5" width="60" height="2.3" fill="#FFFFFF"/>
        <rect y="16.1" width="60" height="2.3" fill="#FFFFFF"/>
        <rect y="20.7" width="60" height="2.3" fill="#FFFFFF"/>
        <rect y="25.3" width="60" height="2.3" fill="#FFFFFF"/>
        <rect width="25.2" height="16.1" fill="#3C3B6E"/>
      </svg>
    ),
    fr: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className={className}>
        <rect width="3" height="2" fill="#FFFFFF"/>
        <rect width="1" height="2" fill="#002654"/>
        <rect width="1" height="2" x="2" fill="#CE1126"/>
      </svg>
    ),
    de: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" className={className}>
        <rect width="5" height="3" fill="#000000"/>
        <rect width="5" height="2" y="1" fill="#DD0000"/>
        <rect width="5" height="1" y="2" fill="#FFCE00"/>
      </svg>
    ),
    es: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className={className}>
        <rect width="3" height="2" fill="#AA151B"/>
        <rect width="3" height="1" y="0.5" fill="#F1BF00"/>
      </svg>
    ),
    it: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className={className}>
        <rect width="3" height="2" fill="#FFFFFF"/>
        <rect width="1" height="2" fill="#009246"/>
        <rect width="1" height="2" x="2" fill="#CE2B37"/>
      </svg>
    ),
    jp: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" className={className}>
        <rect width="30" height="20" fill="#FFFFFF"/>
        <circle cx="15" cy="10" r="6" fill="#BC002D"/>
      </svg>
    ),
  };

  // Возвращаем соответствующий SVG или заглушку
  return flagComponents[code] || (
    <div className={`flex items-center justify-center border border-gray-300 ${className}`}>
      <span className="text-xs font-bold">{code.toUpperCase()}</span>
    </div>
  );
};

export default FlagIcon;
