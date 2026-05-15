import { useCallback, useMemo, useState } from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { CloudUpload, FileText, Sparkles } from 'lucide-react';

const acceptedTypes = ['text/csv', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/json'];

const weeklyPerformance = [
  { name: 'Пн', revenue: 14200, orders: 102 },
  { name: 'Вт', revenue: 15700, orders: 116 },
  { name: 'Ср', revenue: 16900, orders: 128 },
  { name: 'Чт', revenue: 18300, orders: 135 },
  { name: 'Пт', revenue: 21500, orders: 160 },
  { name: 'Сб', revenue: 23800, orders: 189 },
  { name: 'Нд', revenue: 19400, orders: 149 },
];

const zoneLoad = [
  { name: 'Центр', percent: 84 },
  { name: 'Лівий берег', percent: 72 },
  { name: 'Правий берег', percent: 78 },
  { name: 'Оболонь', percent: 64 },
];

const topDishes = [
  { name: 'Борщ', orders: 142, revenue: '38 500 грн' },
  { name: 'Вареники', orders: 118, revenue: '27 100 грн' },
  { name: 'Курячий шніцель', orders: 93, revenue: '31 200 грн' },
  { name: 'Салат «Пузата»', orders: 84, revenue: '18 900 грн' },
];

function ReportUploader() {
  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState('');

  const handleFiles = useCallback((selectedFiles) => {
    const nextFiles = Array.from(selectedFiles).map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type || 'unknown',
      updatedAt: new Date().toLocaleString(),
    }));

    const invalid = nextFiles.filter((file) => !acceptedTypes.includes(file.type));
    if (invalid.length) {
      setError('Підтримуються лише файли CSV, XLSX та JSON.');
      return;
    }

    setError('');
    setFiles(nextFiles);
  }, []);

  const handleDrop = useCallback(
    (event) => {
      event.preventDefault();
      setDragActive(false);
      handleFiles(event.dataTransfer.files);
    },
    [handleFiles],
  );

  const handleChange = useCallback(
    (event) => {
      handleFiles(event.target.files);
    },
    [handleFiles],
  );

  const sampleSummary = useMemo(
    () => ({
      filesUploaded: files.length,
      parsedRows: files.length ? 1358 : 0,
      lastUpload: files.length ? files[0].updatedAt : '—',
    }),
    [files],
  );

  const virtualStats = useMemo(
    () => ({
      orders: 178,
      avgCheck: 237,
      promoSales: '18%',
      courierRating: '92%',
    }),
    [],
  );

  return (
    <div className="grid gap-6">
      <section className="rounded-3xl bg-[#2e1f15]/95 p-6 shadow-panel ring-1 ring-orange-400/10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-orange-200/70">Завантажувач звітів</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Пузата Хата — віртуальна аналітика</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Поки реальних звітів немає, система показує прикладові дані мережі Пузата Хата. Завантажте CSV, XLSX або JSON, і панель перейде до реального режиму.
            </p>
          </div>
          <div className="rounded-3xl bg-[#3c2714] px-4 py-3 text-sm text-orange-100 ring-1 ring-orange-300/15">
            <span className="font-semibold">Віртуальні KPI</span>
            <p className="mt-1 text-slate-300">Модельний потік продажів і логістики.</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.45fr_0.95fr]">
        <div className="rounded-3xl bg-[#231708]/90 p-6 shadow-panel ring-1 ring-orange-300/10">
          <div
            className={`group relative flex min-h-[340px] flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed px-6 py-10 text-center transition ${
              dragActive ? 'border-orange-400/80 bg-[#3b2714]/80' : 'border-[#533a24] bg-[#241309]/70'
            }`}
            onDragEnter={() => setDragActive(true)}
            onDragLeave={() => setDragActive(false)}
            onDragOver={(event) => {
              event.preventDefault();
              setDragActive(true);
            }}
            onDrop={handleDrop}
          >
            <CloudUpload className="h-14 w-14 text-orange-300" />
            <div>
              <p className="text-lg font-semibold text-white">Перетягніть файли звітів</p>
              <p className="mt-2 max-w-xl text-sm text-slate-400">Використовуйте CSV, XLSX або JSON. Поки даних нема, відображаються віртуальні показники.</p>
            </div>
            <label className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-400">
              Вибрати файли
              <input type="file" accept=".csv,.xlsx,.json" className="hidden" onChange={handleChange} multiple />
            </label>
            {error ? <p className="mt-3 text-sm text-rose-400">{error}</p> : null}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-[#2f200f]/95 p-4 ring-1 ring-orange-300/10">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Завантажено файлів</p>
              <p className="mt-3 text-3xl font-semibold text-white">{sampleSummary.filesUploaded}</p>
            </div>
            <div className="rounded-3xl bg-[#2f200f]/95 p-4 ring-1 ring-orange-300/10">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Рядків у зразку</p>
              <p className="mt-3 text-3xl font-semibold text-white">{sampleSummary.parsedRows}</p>
            </div>
            <div className="rounded-3xl bg-[#2f200f]/95 p-4 ring-1 ring-orange-300/10">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Останнє оновлення</p>
              <p className="mt-3 text-2xl font-semibold text-white">{sampleSummary.lastUpload}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-[#2f200f]/95 p-4 ring-1 ring-orange-300/10">
              <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Замовлень сьогодні</p>
              <p className="mt-3 text-3xl font-semibold text-white">{virtualStats.orders}</p>
            </div>
            <div className="rounded-3xl bg-[#2f200f]/95 p-4 ring-1 ring-orange-300/10">
              <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Середній чек</p>
              <p className="mt-3 text-3xl font-semibold text-white">{virtualStats.avgCheck} грн</p>
            </div>
            <div className="rounded-3xl bg-[#2f200f]/95 p-4 ring-1 ring-orange-300/10">
              <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Продажі з акції</p>
              <p className="mt-3 text-3xl font-semibold text-white">{virtualStats.promoSales}</p>
            </div>
            <div className="rounded-3xl bg-[#2f200f]/95 p-4 ring-1 ring-orange-300/10">
              <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Рейтинг кур’єрів</p>
              <p className="mt-3 text-3xl font-semibold text-white">{virtualStats.courierRating}</p>
            </div>
          </div>
        </div>

        <aside className="space-y-4 rounded-3xl bg-[#231309]/95 p-6 shadow-panel ring-1 ring-orange-300/10">
          <div className="rounded-3xl bg-[#2b190f]/95 p-4 ring-1 ring-orange-300/15">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Тижневі продажі</p>
                <h3 className="mt-2 text-lg font-semibold text-white">Динаміка замовлень</h3>
              </div>
              <Sparkles className="h-5 w-5 text-orange-300" />
            </div>
            <div className="mt-4 h-52">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weeklyPerformance} margin={{ top: 8, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#fb923c" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#fb923c" stopOpacity={0.06} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#3b2b1a" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#d8c4ae' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#d8c4ae' }} />
                  <Tooltip contentStyle={{ background: '#1f150a', borderColor: '#3f2a18' }} labelStyle={{ color: '#fff' }} formatter={(value) => [`${value} грн`, '']}/>
                  <Area type="monotone" dataKey="revenue" stroke="#fb923c" fill="url(#salesGradient)" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-3xl bg-[#2b190f]/95 p-4 ring-1 ring-orange-300/15">
            <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Завантаження зон</p>
            <div className="mt-4 h-44">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={zoneLoad} margin={{ top: 10, right: 0, left: -10, bottom: 0 }}>
                  <CartesianGrid stroke="#3b2b1a" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#d8c4ae' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#d8c4ae' }} />
                  <Tooltip contentStyle={{ background: '#1f150a', borderColor: '#3f2a18' }} formatter={(value) => [`${value}%`, 'Завантаження']} />
                  <Bar dataKey="percent" radius={[8, 8, 0, 0]} fill="#fb923c">
                    {zoneLoad.map((entry) => (
                      <Cell key={entry.name} fill={entry.name === 'Центр' ? '#f59e0b' : '#fb923c'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-3xl bg-[#2b190f]/95 p-4 ring-1 ring-orange-300/15">
            <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Топ страви</p>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <div className="grid grid-cols-[1.4fr_0.8fr_0.8fr] gap-4 font-semibold text-slate-200 border-b border-[#3b2b1a] pb-3">
                <span>Страва</span>
                <span className="text-right">Замовлень</span>
                <span className="text-right">Доходи</span>
              </div>
              {topDishes.map((dish) => (
                <div key={dish.name} className="grid grid-cols-[1.4fr_0.8fr_0.8fr] gap-4 rounded-2xl bg-[#24150d] px-3 py-3">
                  <span className="text-white">{dish.name}</span>
                  <span className="text-right text-orange-200">{dish.orders}</span>
                  <span className="text-right text-slate-300">{dish.revenue}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[#3b2b1a] bg-[#231309]/95 p-5 text-sm text-slate-400">
            <FileText className="mb-3 h-5 w-5 text-orange-300" />
            <p className="font-semibold text-white">Віртуальна аналітика</p>
            <p className="mt-2">Ці дані показують модельний сценарій роботи мережі Пузата Хата та допоможуть візуалізувати майбутні метрики.</p>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default ReportUploader;
