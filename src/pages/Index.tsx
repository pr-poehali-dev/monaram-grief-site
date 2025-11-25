import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const elements = [
    { name: "Огонь", icon: "Flame", color: "fire", desc: "Мощные атаки и урон по площади" },
    { name: "Вода", icon: "Droplet", color: "water", desc: "Исцеление и контроль противников" },
    { name: "Земля", icon: "Mountain", color: "earth", desc: "Защита и создание укрытий" },
    { name: "Воздух", icon: "Wind", color: "air", desc: "Скорость и уклонение от атак" }
  ];

  const donatPacks = [
    { 
      name: "Новичок", 
      price: "99₽", 
      features: ["Префикс [NEW]", "Кит каждые 24ч", "Доступ к /feed"],
      color: "bg-muted"
    },
    { 
      name: "Маг", 
      price: "299₽", 
      features: ["Префикс [MAG]", "2 стихии", "Кит каждые 12ч", "/fly на 30 мин"],
      color: "bg-primary/20"
    },
    { 
      name: "Легенда", 
      price: "599₽", 
      features: ["Префикс [LEGEND]", "Все 4 стихии", "Кит каждые 6ч", "/fly навсегда", "Цветной ник"],
      color: "bg-gradient-to-br from-primary to-fire"
    }
  ];

  const wikiSections = [
    { title: "Начало игры", desc: "Первые шаги на сервере", icon: "BookOpen" },
    { title: "Магические способности", desc: "Гайд по всем стихиям", icon: "Sparkles" },
    { title: "Крафты", desc: "Уникальные рецепты сервера", icon: "Hammer" },
    { title: "Регионы", desc: "Защита территории", icon: "Shield" }
  ];

  const rules = [
    "Запрещены читы и модификации дающие преимущество",
    "Гриферство разрешено только вне регионов",
    "Уважайте других игроков в чате",
    "Не спамить командами и сообщениями",
    "Запрещена реклама других серверов",
    "Баги нужно репортить администрации"
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-fire bg-clip-text text-transparent">
            MONARAM GRIEF
          </h1>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#magic" className="hover:text-primary transition-colors">Магия</a>
            <a href="#donate" className="hover:text-primary transition-colors">Донат</a>
            <a href="#wiki" className="hover:text-primary transition-colors">Вики</a>
            <a href="#rules" className="hover:text-primary transition-colors">Правила</a>
          </div>
          <Button className="animate-glow">
            <Icon name="Copy" className="mr-2" size={16} />
            IP: monaram.ru
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="relative mb-8">
            <img 
              src="https://cdn.poehali.dev/projects/78e71403-a2ed-4964-ad85-1ce6589b2181/files/dd9f7870-5957-4208-aabf-88b28205b434.jpg" 
              alt="Hero"
              className="w-full h-[400px] object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent rounded-3xl" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h2 className="text-6xl font-bold mb-4 animate-float">
                МАГИЯ СТИХИЙ
              </h2>
              <p className="text-xl mb-8 text-muted-foreground max-w-2xl">
                Гриферский сервер с уникальной системой магии как у Аватара. 
                Овладей силой стихий и стань легендой!
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg animate-glow">
                  <Icon name="Zap" className="mr-2" />
                  Начать играть
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="Users" className="mr-2" />
                  Discord
                </Button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="p-6 bg-card/50 backdrop-blur hover:scale-105 transition-transform">
              <Icon name="Users" className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-2xl font-bold mb-2">2000+</h3>
              <p className="text-muted-foreground">Активных игроков</p>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur hover:scale-105 transition-transform">
              <Icon name="Server" className="mx-auto mb-4 text-water" size={48} />
              <h3 className="text-2xl font-bold mb-2">99.9%</h3>
              <p className="text-muted-foreground">Аптайм сервера</p>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur hover:scale-105 transition-transform">
              <Icon name="Sparkles" className="mx-auto mb-4 text-fire" size={48} />
              <h3 className="text-2xl font-bold mb-2">4</h3>
              <p className="text-muted-foreground">Стихии магии</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="magic" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Стихии магии</h2>
            <p className="text-xl text-muted-foreground">Выбери свой путь и овладей силой природы</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {elements.map((element, idx) => (
              <Card 
                key={idx}
                className={`p-8 bg-gradient-to-br from-${element.color}/20 to-${element.color}/5 border-${element.color}/30 hover:scale-105 transition-all hover:shadow-2xl hover:shadow-${element.color}/50`}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${element.color}/20 flex items-center justify-center`}>
                  <Icon name={element.icon as any} className={`text-${element.color}`} size={32} />
                </div>
                <h3 className="text-2xl font-bold text-center mb-3">{element.name}</h3>
                <p className="text-muted-foreground text-center">{element.desc}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <img 
              src="https://cdn.poehali.dev/projects/78e71403-a2ed-4964-ad85-1ce6589b2181/files/f7b6c2a2-52b4-40d8-986a-9ae0244a9a7c.jpg"
              alt="Elements"
              className="w-full max-w-3xl mx-auto rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section id="donate" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Привилегии</h2>
            <p className="text-xl text-muted-foreground">Поддержи сервер и получи эксклюзивные возможности</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {donatPacks.map((pack, idx) => (
              <Card 
                key={idx}
                className={`p-8 ${pack.color} ${idx === 2 ? 'scale-105 shadow-2xl shadow-primary/50' : ''} hover:scale-110 transition-transform`}
              >
                {idx === 2 && (
                  <Badge className="mb-4 bg-fire">Популярное</Badge>
                )}
                <h3 className="text-3xl font-bold mb-2">{pack.name}</h3>
                <p className="text-4xl font-bold mb-6 text-primary">{pack.price}</p>
                <ul className="space-y-3 mb-8">
                  {pack.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={idx === 2 ? "default" : "outline"}>
                  <Icon name="ShoppingCart" className="mr-2" size={16} />
                  Купить
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="wiki" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">База знаний</h2>
            <p className="text-xl text-muted-foreground">Всё что нужно знать о сервере</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {wikiSections.map((section, idx) => (
              <Card 
                key={idx}
                className="p-6 bg-card/50 backdrop-blur hover:bg-card hover:scale-105 transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Icon name={section.icon as any} className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-muted-foreground">{section.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="rules" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Правила сервера</h2>
            <p className="text-xl text-muted-foreground">Соблюдай правила и играй в удовольствие</p>
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur">
            <ul className="space-y-4">
              {rules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <Badge variant="outline" className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center">
                    {idx + 1}
                  </Badge>
                  <p className="text-lg">{rule}</p>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-fire bg-clip-text text-transparent">
            MONARAM GRIEF
          </h3>
          <p className="text-muted-foreground mb-6">© 2024 Все права защищены</p>
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="icon">
              <Icon name="MessageCircle" size={24} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Youtube" size={24} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Users" size={24} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
