
import { FC } from "react";

/**
 * Компонент стилей для анимаций.
 * Включает определения keyframes для всех используемых анимаций.
 */
const AnimationStyles: FC = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
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
    `}} />
  );
};

export default AnimationStyles;
