
import { FC } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, MessageSquare } from "lucide-react";

interface LanguageAppCardProps {
  title: string;
  description: string;
  features: string[];
  link: string;
  buttonText: string;
  className?: string;
  icon?: "duo" | "chat";
}

const LanguageAppCard: FC<LanguageAppCardProps> = ({
  title,
  description,
  features,
  link,
  buttonText,
  className,
  icon,
}) => {
  // Иконка Дуо (зеленая сова)
  const DuoIcon = () => (
    <div className="w-12 h-12 mb-2">
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
      </svg>
    </div>
  );

  return (
    <Card className={`max-w-md w-full shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] ${className}`}>
      <CardHeader className="flex flex-row items-start gap-4">
        <div className="flex-1">
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        {icon === "duo" && <DuoIcon />}
        {icon === "chat" && <MessageSquare size={48} className="text-blue-500" />}
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 list-disc pl-5">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            {buttonText}
            <ExternalLink size={16} />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LanguageAppCard;
