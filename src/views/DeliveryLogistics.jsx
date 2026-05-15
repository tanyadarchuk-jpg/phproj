import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const courierPerformance = [
  { name: 'Олександр', deliveries: 14 },
  { name: 'Марія', deliveries: 18 },
  { name: 'Ігор', deliveries: 12 },
  { name: 'Олена', deliveries: 16 },
];

const zoneStatus = [
  { name: 'Центр', load: 84 },
  { name: 'Лівий берег', load: 72 },
  { name: 'Правий берег', load: 78 },
  { name: 'Оболонь', load: 64 },
];

function DeliveryLogistics() {
  return (
    <div className="grid gap-6">
      <section className="rounded-3xl bg-[#2e1f15]/95 p-6 shadow-panel ring-1 ring-orange-300/10">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl bg-[#24150d]/95 p-5 ring-1 ring-orange-300/10">
            <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Середній час</p>
            <p className="mt-4 text-3xl font-semibold text-white">28 хв</p>
            <p className="mt-2 text-sm text-slate-300">до доставки</p>
          </div>
          <div className="rounded-3xl bg-[#24150d]/95 p-5 ring-1 ring-orange-300/10">
            <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Успішні доставки</p>
            <p className="mt-4 text-3xl font-semibold text-white">93%</p>
            <p className="mt-2 text-sm text-slate-300">вчасно</p>
          </div>
          <div className="rounded-3xl bg-[#24150d]/95 p-5 ring-1 ring-orange-300/10">
            <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Активні кур’єри</p>
            <p className="mt-4 text-3xl font-semibold text-white">68</p>
            <p className="mt-2 text-sm text-slate-300">на маршруті</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-[#231309]/95 p-6 shadow-panel ring-1 ring-orange-300/10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Кур’єри</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Продуктивність персоналу</h2>
          </div>
          <p className="text-sm text-slate-300">Найефективніші доставщики і їх поточні результати.</p>
        </div>

        <div className="mt-6 h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={courierPerformance} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid stroke="#3b2b1a" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#d8c4ae' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#d8c4ae' }} />
              <Tooltip contentStyle={{ background: '#1f150a', borderColor: '#3f2a18' }} formatter={(value) => [`${value} доставл.`, 'За день']} />
              <Bar dataKey="deliveries" fill="#fb923c" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="rounded-3xl bg-[#231309]/95 p-6 shadow-panel ring-1 ring-orange-300/10">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Зони</p>
            <h3 className="mt-2 text-xl font-semibold text-white">Навантаження районів</h3>
          </div>
          <span className="rounded-full bg-orange-500/15 px-3 py-1 text-sm text-orange-100">Live-зона</span>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {zoneStatus.map((zone) => (
            <div key={zone.name} className="rounded-3xl bg-[#2b190f]/95 p-4 ring-1 ring-orange-300/10">
              <div className="flex items-center justify-between gap-2">
                <p className="font-semibold text-white">{zone.name}</p>
                <p className="text-sm text-orange-200">{zone.load}%</p>
              </div>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-[#341f12]">
                <div className="h-full rounded-full bg-orange-500" style={{ width: `${zone.load}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default DeliveryLogistics;
