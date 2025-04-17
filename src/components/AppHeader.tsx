
import { FC } from "react";

interface AppHeaderProps {
  title: string;
  subtitle: string;
}

const AppHeader: FC<AppHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center space-y-4 mb-12">
      <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
};

export default AppHeader;
