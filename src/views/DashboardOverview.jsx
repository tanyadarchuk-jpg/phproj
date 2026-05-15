import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const performance = [
  { name: 'Пн', revenue: 13800 },
  { name: 'Вт', revenue: 15100 },
  { name: 'Ср', revenue: 16150 },
  { name: 'Чт', revenue: 17800 },
  { name: 'Пт', revenue: 20600 },
  { name: 'Сб', revenue: 23200 },
  { name: 'Нд', revenue: 19150 },
];

const restaurants = [
  { name: 'Пузата Хата на Хрещатику', revenue: '84 200 грн', orders: 378 },
  { name: 'Пузата Хата на Оболоні', revenue: '72 900 грн', orders: 341 },
  { name: 'Пузата Хата на Подолі', revenue: '66 400 грн', orders: 298 },
];

function DashboardOverview() {
  return (
    <div className="grid gap-6">
      <section className="rounded-3xl bg-[#2e1f15]/95 p-6 shadow-panel ring-1 ring-orange-300/10">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-3xl bg-[#24150d]/95 p-5 ring-1 ring-orange-300/10">
            <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Дохід</p>
            <p className="mt-4 text-3xl font-semibold text-white">1 528 400 грн</p>
            <p className="mt-2 text-sm text-slate-300">Тиждень</p>
          </div>
          <div className="rounded-3xl bg-[#24150d]/95 p-5 ring-1 ring-orange-300/10">
            <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Середній чек</p>
            <p className="mt-4 text-3xl font-semibold text-white">242 грн</p>
            <p className="mt-2 text-sm text-slate-300">Мережа</p>
          </div>
          <div className="rounded-3xl bg-[#24150d]/95 p-5 ring-1 ring-orange-300/10">
            <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Вчасність</p>
            <p className="mt-4 text-3xl font-semibold text-white">93%</p>
            <p className="mt-2 text-sm text-slate-300">Доставка</p>
          </div>
          <div className="rounded-3xl bg-[#24150d]/95 p-5 ring-1 ring-orange-300/10">
            <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Кур’єри</p>
            <p className="mt-4 text-3xl font-semibold text-white">68 активних</p>
            <p className="mt-2 text-sm text-slate-300">Сьогодні</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-[#231309]/95 p-6 shadow-panel ring-1 ring-orange-300/10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Основні тренди</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Продажі за тиждень</h2>
          </div>
          <p className="text-sm text-slate-300">Оцінка динаміки замовлень та зростання по мережі ресторанів.</p>
        </div>

        <div className="mt-6 h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={performance} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#fb923c" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#fb923c" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#3b2b1a" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#d8c4ae' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#d8c4ae' }} />
              <Tooltip contentStyle={{ background: '#1f150a', borderColor: '#3f2a18' }} formatter={(value) => [`${value} грн`, 'Дохід']} />
              <Area type="monotone" dataKey="revenue" stroke="#fb923c" fill="url(#revenueGradient)" strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="rounded-3xl bg-[#231309]/95 p-6 shadow-panel ring-1 ring-orange-300/10">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Топ закладів</p>
            <h3 className="mt-2 text-xl font-semibold text-white">Найприбутковіші локації</h3>
          </div>
          <span className="rounded-full bg-orange-500/15 px-3 py-1 text-sm text-orange-100">Жива модель</span>
        </div>

        <div className="mt-6 grid gap-4">
          {restaurants.map((restaurant) => (
            <div key={restaurant.name} className="grid grid-cols-[1.6fr_0.8fr_0.8fr] gap-4 rounded-3xl bg-[#2b190f]/95 p-4 text-slate-200 ring-1 ring-orange-300/10">
              <div>
                <p className="font-semibold">{restaurant.name}</p>
                <p className="mt-2 text-sm text-slate-400">Популярні страви: борщ, вареники, салат «Пузата».</p>
              </div>
              <p className="text-right text-white">{restaurant.orders} замовлень</p>
              <p className="text-right text-orange-200">{restaurant.revenue}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default DashboardOverview;
