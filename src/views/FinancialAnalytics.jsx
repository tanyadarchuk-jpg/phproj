import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const financialTrend = [
  { name: 'Січ', margin: 18 },
  { name: 'Лют', margin: 20 },
  { name: 'Бер', margin: 19 },
  { name: 'Кві', margin: 21 },
  { name: 'Тра', margin: 22 },
  { name: 'Чер', margin: 23 },
];

const promoStats = [
  { name: 'Промо 1', orders: 88, uplift: '9%' },
  { name: 'Промо 2', orders: 64, uplift: '6%' },
  { name: 'Промо 3', orders: 52, uplift: '4%' },
];

function FinancialAnalytics() {
  return (
    <div className="grid gap-6">
      <section className="rounded-3xl bg-[#2e1f15]/95 p-6 shadow-panel ring-1 ring-orange-300/10">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-3xl bg-[#24150d]/95 p-5 ring-1 ring-orange-300/10">
            <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Місячна маржа</p>
            <p className="mt-4 text-3xl font-semibold text-white">22%</p>
            <p className="mt-2 text-sm text-slate-300">в мережі</p>
          </div>
          <div className="rounded-3xl bg-[#24150d]/95 p-5 ring-1 ring-orange-300/10">
            <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Промо продажі</p>
            <p className="mt-4 text-3xl font-semibold text-white">14%</p>
            <p className="mt-2 text-sm text-slate-300">від загального доходу</p>
          </div>
          <div className="rounded-3xl bg-[#24150d]/95 p-5 ring-1 ring-orange-300/10">
            <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Собівартість</p>
            <p className="mt-4 text-3xl font-semibold text-white">68%</p>
            <p className="mt-2 text-sm text-slate-300">середньо</p>
          </div>
          <div className="rounded-3xl bg-[#24150d]/95 p-5 ring-1 ring-orange-300/10">
            <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Операційні витрати</p>
            <p className="mt-4 text-3xl font-semibold text-white">31%</p>
            <p className="mt-2 text-sm text-slate-300">від доходу</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-[#231309]/95 p-6 shadow-panel ring-1 ring-orange-300/10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Маржа</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Динаміка фінансових показників</h2>
          </div>
          <p className="text-sm text-slate-300">Оцінка тренду маржі та ефективності промо.</p>
        </div>

        <div className="mt-6 h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={financialTrend} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="marginGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#fb923c" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#fb923c" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#3b2b1a" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#d8c4ae' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#d8c4ae' }} />
              <Tooltip contentStyle={{ background: '#1f150a', borderColor: '#3f2a18' }} formatter={(value) => [`${value}%`, 'Маржа']} />
              <Area type="monotone" dataKey="margin" stroke="#fb923c" fill="url(#marginGradient)" strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="rounded-3xl bg-[#231309]/95 p-6 shadow-panel ring-1 ring-orange-300/10">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Промокоди</p>
            <h3 className="mt-2 text-xl font-semibold text-white">Ефективність акцій</h3>
          </div>
          <span className="rounded-full bg-orange-500/15 px-3 py-1 text-sm text-orange-100">Модельні дані</span>
        </div>

        <div className="mt-6 space-y-3">
          {promoStats.map((promo) => (
            <div key={promo.name} className="rounded-3xl bg-[#2b190f]/95 p-4 ring-1 ring-orange-300/10 grid grid-cols-[1.4fr_0.8fr_0.8fr] gap-4 text-slate-200">
              <span className="font-semibold">{promo.name}</span>
              <span className="text-right text-white">{promo.orders} замовлень</span>
              <span className="text-right text-orange-200">{promo.uplift}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default FinancialAnalytics;
