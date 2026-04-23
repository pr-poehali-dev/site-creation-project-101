import Icon from '@/components/ui/icon';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const team = [
    { name: 'Алексей Петров', role: 'Основатель & CEO', emoji: '👨‍💼' },
    { name: 'Мария Иванова', role: 'Руководитель отдела продаж', emoji: '👩‍💼' },
    { name: 'Дмитрий Козлов', role: 'Технический эксперт', emoji: '👨‍💻' },
    { name: 'Анна Смирнова', role: 'Сервис и поддержка', emoji: '👩‍🔧' },
  ];

  const milestones = [
    { year: '2009', text: 'Открытие первого магазина в центре города' },
    { year: '2014', text: 'Запуск интернет-магазина и доставки по России' },
    { year: '2018', text: 'Партнёрство с Apple, Samsung, ASUS, MSI' },
    { year: '2022', text: 'Сервисный центр и расширение до 20 городов' },
    { year: '2025', text: 'Более 50 000 довольных покупателей' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-purple/30 mb-6">
              <Icon name="Star" size={14} className="text-neon-purple" />
              <span className="text-sm font-golos text-neon-purple">15 лет на рынке электроники</span>
            </div>
            <h1 className="font-oswald font-black text-6xl text-foreground leading-tight mb-6">
              МЫ — <span className="neon-text-purple">HUSKОВИЧ</span>
            </h1>
            <p className="text-lg font-golos text-muted-foreground leading-relaxed mb-6">
              Huskович — это команда настоящих энтузиастов технологий. Мы помогаем людям выбирать 
              лучшую технику и получать удовольствие от каждой покупки с 2009 года.
            </p>
            <p className="text-base font-golos text-muted-foreground leading-relaxed mb-8">
              Мы не просто продаём гаджеты — мы подбираем решения под задачи каждого клиента. 
              Наши эксперты всегда готовы помочь с выбором, настройкой и обслуживанием техники.
            </p>
            <button
              onClick={() => onNavigate('catalog')}
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-neon-purple text-white font-golos font-bold neon-glow-purple hover:scale-105 transition-all duration-200"
            >
              <Icon name="ShoppingBag" size={20} />
              Перейти в каталог
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/10 rounded-3xl blur-2xl" />
            <img
              src="https://cdn.poehali.dev/projects/1ef7ab98-beb5-48de-9dcf-5cbcbbf21d72/files/27cce009-5133-447f-aa33-2e053f1967cf.jpg"
              alt="TechZone магазин"
              className="relative z-10 w-full rounded-3xl border border-neon-purple/20 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-card/40 py-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '50 000+', label: 'Довольных клиентов', color: 'neon-text-cyan' },
              { value: '5 000+', label: 'Товаров в каталоге', color: 'neon-text-purple' },
              { value: '15 лет', label: 'Опыта работы', color: 'neon-text-cyan' },
              { value: '20 городов', label: 'Доставка по России', color: 'neon-text-purple' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <p className={`font-oswald font-black text-5xl ${stat.color} mb-2`}>{stat.value}</p>
                <p className="font-golos text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="font-oswald font-bold text-4xl text-foreground mb-12 text-center">
          НАША <span className="neon-text-cyan">ИСТОРИЯ</span>
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent" />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div key={m.year} className={`flex gap-8 items-start animate-slide-up delay-${(i + 1) * 100}`}>
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl glass border border-neon-cyan/30 flex items-center justify-center neon-glow-cyan relative z-10">
                  <span className="font-oswald font-bold text-sm neon-text-cyan">{m.year}</span>
                </div>
                <div className="glass rounded-2xl border border-white/8 p-5 flex-1 mt-2">
                  <p className="font-golos text-foreground">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="font-oswald font-bold text-4xl text-foreground mb-12 text-center">
          НАША <span className="neon-text-purple">КОМАНДА</span>
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div key={member.name} className={`glass rounded-2xl border border-white/8 p-6 text-center card-hover animate-slide-up delay-${(i + 1) * 100}`}>
              <div className="w-20 h-20 rounded-full glass border border-neon-purple/30 flex items-center justify-center mx-auto mb-4 text-4xl">
                {member.emoji}
              </div>
              <h3 className="font-oswald font-semibold text-lg text-foreground mb-1">{member.name}</h3>
              <p className="text-xs text-muted-foreground font-golos">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contacts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl border border-white/10 p-10 grid sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-14 h-14 rounded-2xl glass border border-neon-cyan/30 flex items-center justify-center mx-auto mb-4">
              <Icon name="Phone" size={24} className="text-neon-cyan" />
            </div>
            <p className="font-oswald font-semibold text-lg text-foreground mb-1">Телефон</p>
            <p className="text-muted-foreground font-golos text-sm">+7 (800) 123-45-67</p>
            <p className="text-xs text-muted-foreground font-golos mt-1">Бесплатно, пн–вс 8:00–22:00</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 rounded-2xl glass border border-neon-cyan/30 flex items-center justify-center mx-auto mb-4">
              <Icon name="Mail" size={24} className="text-neon-cyan" />
            </div>
            <p className="font-oswald font-semibold text-lg text-foreground mb-1">Email</p>
            <p className="text-muted-foreground font-golos text-sm">info@techzone.ru</p>
            <p className="text-xs text-muted-foreground font-golos mt-1">Ответим в течение 2 часов</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 rounded-2xl glass border border-neon-cyan/30 flex items-center justify-center mx-auto mb-4">
              <Icon name="MapPin" size={24} className="text-neon-cyan" />
            </div>
            <p className="font-oswald font-semibold text-lg text-foreground mb-1">Адрес</p>
            <p className="text-muted-foreground font-golos text-sm">Москва, ул. Тверская, 15</p>
            <p className="text-xs text-muted-foreground font-golos mt-1">Пн–вс 10:00–21:00</p>
          </div>
        </div>
      </section>
    </div>
  );
}