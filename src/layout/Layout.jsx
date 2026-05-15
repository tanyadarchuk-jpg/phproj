import { useState } from 'react';
import {
  ChevronRight,
  ClipboardList,
  Home,
  Package,
  SlidersHorizontal,
  TrendingUp,
  Upload,
  Users,
  X,
} from 'lucide-react';

const iconMap = {
  Home,
  Upload,
  Package,
  TrendingUp,
  ClipboardList,
  SlidersHorizontal,
};

function Layout({ navItems, activePage, onNavigate, children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="relative mx-auto flex min-h-screen max-w-[1600px] overflow-hidden">
        <aside className="hidden w-[320px] shrink-0 border-r border-white/10 bg-slate-950 lg:block">
          <div className="sticky top-0 flex h-screen flex-col justify-between px-6 py-8">
            <div className="space-y-8">
              <div className="flex items-center gap-3 rounded-3xl bg-slate-900/90 px-4 py-4 shadow-panel ring-1 ring-white/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600/10 text-indigo-300">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                    <p className="text-sm text-orange-200/70">Мережа Пузата Хата</p>
                    <p className="text-lg font-semibold text-white">Аналітика доставки</p>
                </div>
              </div>

              <nav className="space-y-1">
                {navItems.map((item) => {
                  const Icon = iconMap[item.icon] || ChevronRight;
                  const isActive = item.id === activePage;

                  return (
                    <button
                      key={item.id}
                      onClick={() => onNavigate(item.id)}
                      className={`group flex w-full items-center gap-3 rounded-3xl px-4 py-4 text-left transition hover:bg-[#3c2714]/90 ${
                        isActive ? 'bg-[#3c2714] text-white shadow-panel ring-1 ring-orange-300/20' : 'text-slate-300'
                      }`}
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-slate-400 group-hover:text-indigo-300">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="flex-1">
                        <div className="text-sm font-semibold">{item.label}</div>
                        <p className="mt-1 text-xs text-slate-500">{item.description}</p>
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>

              <div className="space-y-4 rounded-3xl bg-[#2e1f15]/90 px-5 py-6 text-slate-300 shadow-panel ring-1 ring-orange-300/20">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-orange-200/70">Статус</p>
                    <p className="mt-2 text-sm font-semibold text-white">Живі метрики мережі</p>
                  </div>
                  <span className="rounded-2xl bg-orange-500/15 px-3 py-1 text-xs text-orange-100">Онлайн</span>
                </div>
                <div className="text-sm leading-6 text-slate-400">
                  Оновлюйте дані, синхронізуйте звіти та тримайте роботу мережі Пузата Хата під контролем.
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 bg-slate-950/95 px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-6">
            <div className="flex items-center justify-between gap-4 lg:hidden">
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="inline-flex items-center gap-2 rounded-2xl bg-[#2e1f15] px-4 py-3 text-sm font-semibold text-orange-100 shadow-panel ring-1 ring-orange-300/20 transition hover:bg-[#3e2a1d]"
              >
                <Users className="h-4 w-4" />
                Меню
              </button>
              <div className="rounded-3xl bg-[#2e1f15]/90 px-4 py-3 text-sm text-slate-400 ring-1 ring-orange-300/10">Фіксована навігація, адаптивний макет</div>
            </div>

            {menuOpen && (
              <div className="fixed inset-0 z-50 bg-slate-950/90 px-5 py-6 sm:px-8 lg:hidden">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-orange-200/80">Центр аналітики</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">Навігація</h2>
                  </div>
                  <button
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-slate-200 ring-1 ring-white/10"
                    onClick={() => setMenuOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-8 space-y-3">
                  {navItems.map((item) => {
                    const Icon = iconMap[item.icon] || ChevronRight;
                    const isActive = item.id === activePage;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          onNavigate(item.id);
                          setMenuOpen(false);
                        }}
                        className={`flex w-full items-start gap-3 rounded-3xl px-4 py-4 text-left transition ${
                          isActive ? 'bg-slate-800 text-white' : 'bg-slate-900 text-slate-300 hover:bg-slate-800/80'
                        }`}
                      >
                        <Icon className="mt-1 h-5 w-5 text-slate-400" />
                        <div>
                          <div className="font-semibold">{item.label}</div>
                          <p className="mt-1 text-xs text-slate-500">{item.description}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Layout;
