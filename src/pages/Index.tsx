
import AppHeader from "@/components/AppHeader";
import LanguageAppCard from "@/components/LanguageAppCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <AppHeader 
          title="Универсальное приложение" 
          subtitle="К сожалению, универсального приложения для решения всех задач не существует. Однако если вы хотите изучать иностранные языки, обратите внимание на следующие приложения:"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <LanguageAppCard 
            title="Duolingo" 
            description="Лучшее приложение для изучения базового уровня иностранного языка"
            features={[
              "Игровой формат обучения",
              "Более 40 доступных языков",
              "Адаптивная система обучения",
              "Ежедневные уроки и напоминания",
              "Бесплатный базовый функционал"
            ]}
            link="https://www.duolingo.com/"
            buttonText="Перейти на Duolingo"
            className="bg-green-50"
          />
          
          <LanguageAppCard 
            title="Tandem" 
            description="Идеальное приложение для практики с носителями языка"
            features={[
              "Общение с носителями языка",
              "Обмен языковыми навыками",
              "Голосовые сообщения и видеочаты",
              "Поиск собеседников по интересам",
              "Исправление ошибок реальными людьми"
            ]}
            link="https://www.tandem.net/"
            buttonText="Перейти на Tandem"
            className="bg-blue-50"
          />
        </div>
        
        <div className="mt-16 text-center text-muted-foreground">
          <p>Начните изучать базовый уровень с Duolingo, а затем практикуйтесь с носителями языка в Tandem!</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
