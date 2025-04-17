
import { FC, ReactNode } from "react";

/**
 * Параметры для компонента градиентного фона
 */
interface GradientBackgroundProps {
  /** Начальный цвет градиента */
  fromColor?: string;
  /** Промежуточный цвет градиента */
  viaColor?: string;
  /** Конечный цвет градиента */
  toColor?: string;
  /** Дочерние элементы */
  children?: ReactNode;
  /** Дополнительные классы */
  className?: string;
}

/**
 * Компонент градиентного фона.
 * Предоставляет настраиваемый радиальный градиент.
 */
const GradientBackground: FC<GradientBackgroundProps> = ({
  fromColor = "from-green-50/20",
  viaColor = "via-blue-50/10",
  toColor = "to-transparent",
  children,
  className = "",
}) => {
  return (
    <div className={`absolute inset-0 bg-gradient-radial ${fromColor} ${viaColor} ${toColor} ${className}`}>
      {children}
    </div>
  );
};

export default GradientBackground;
