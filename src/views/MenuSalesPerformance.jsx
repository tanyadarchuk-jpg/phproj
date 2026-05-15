import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const categoryShare = [
  { name: 'Супи', value: 28 },
  { name: 'Гарячі страви', value: 32 },
  { name: 'Салати', value: 16 },
  { name: 'Десерти', value: 12 },
  { name: 'Напої', value: 12 },
];

const topDishes = [
  { name: 'Борщ', orders: 142, revenue: '38 500 грн' },
  { name: 'Вареники', orders: 118, revenue: '27 100 грн' },
  { name: 'Курячий шніцель', orders: 93, revenue: '31 200 грн' },
];

const pieColors = ['#f97316', '#fb923c', '#fbbf24', '#fcd34d', '#fde68a'];

function MenuSalesPerformance() {
  return (
    <div className="grid gap-6">
      <section className="rounded-3xl bg-[#2e1f15]/95 p-6 shadow-panel ring-1 ring-orange-300/10">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl bg-[#24150d]/95 p-5 ring-1 ring-orange-300/10">
            <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Категорія</p>
            <p className="mt-4 text-3xl font-semibold text-white">Гарячі страви</p>
            <p className="mt-2 text-sm text-slate-300">Найпопулярніша група</p>
          </div>
          <div className="rounded-3xl bg-[#24150d]/95 p-5 ring-1 ring-orange-300/10">
            <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Продажі сьогодні</p>
            <p className="mt-4 text-3xl font-semibold text-white">428</p>
            <p className="mt-2 text-sm text-slate-300">замовлень</p>
          </div>
          <div className="rounded-3xl bg-[#24150d]/95 p-5 ring-1 ring-orange-300/10">
            <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Частка меню</p>
            <p className="mt-4 text-3xl font-semibold text-white">31%</p>
            <p className="mt-2 text-sm text-slate-300">від продажів</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-[#231309]/95 p-6 shadow-panel ring-1 ring-orange-300/10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Аналіз</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Розподіл по категоріях</h2>
          </div>
          <p className="text-sm text-slate-300">Визначення ключових товарних груп та їхнього внеску.</p>
        </div>

        <div className="mt-6 h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={categoryShare} dataKey="value" nameKey="name" innerRadius={60} outerRadius={110} paddingAngle={4}>
                {categoryShare.map((entry, index) => (
                  <Cell key={`cell-${entry.name}`} fill={pieColors[index % pieColors.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: '#1f150a', borderColor: '#3f2a18' }} formatter={(value) => [`${value}%`, 'Частка']} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="rounded-3xl bg-[#231309]/95 p-6 shadow-panel ring-1 ring-orange-300/10">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Топ страви</p>
            <h3 className="mt-2 text-xl font-semibold text-white">Найпопулярніші позиції</h3>
          </div>
          <span className="rounded-full bg-orange-500/15 px-3 py-1 text-sm text-orange-100">Дані моделі</span>
        </div>

        <div className="mt-6 grid gap-4">
          {topDishes.map((dish) => (
            <div key={dish.name} className="grid grid-cols-[1.3fr_0.8fr_0.9fr] gap-4 rounded-3xl bg-[#2b190f]/95 p-4 ring-1 ring-orange-300/10 text-slate-200">
              <span className="font-semibold">{dish.name}</span>
              <span className="text-right text-orange-200">{dish.orders}</span>
              <span className="text-right text-slate-300">{dish.revenue}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MenuSalesPerformance;
