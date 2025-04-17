
import { FC } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface LanguageAppCardProps {
  title: string;
  description: string;
  features: string[];
  link: string;
  buttonText: string;
  className?: string;
}

const LanguageAppCard: FC<LanguageAppCardProps> = ({
  title,
  description,
  features,
  link,
  buttonText,
  className,
}) => {
  return (
    <Card className={`max-w-md w-full shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] ${className}`}>
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
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
