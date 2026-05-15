function SettingsView() {
  return (
    <div className="grid gap-6">
      <section className="rounded-3xl bg-[#2e1f15]/95 p-6 shadow-panel ring-1 ring-orange-300/10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Система</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Налаштування мережі</h2>
          </div>
          <p className="text-sm text-slate-300">Оновлюйте параметри і переглядайте статус мережі доставки.</p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl bg-[#24150d]/95 p-5 ring-1 ring-orange-300/10">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Активний режим</p>
            <p className="mt-3 text-xl font-semibold text-white">Демонстраційний</p>
          </div>
          <div className="rounded-3xl bg-[#24150d]/95 p-5 ring-1 ring-orange-300/10">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Оновлення даних</p>
            <p className="mt-3 text-xl font-semibold text-white">Авто</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-[#231309]/95 p-6 shadow-panel ring-1 ring-orange-300/10">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl bg-[#2b190f]/95 p-5 ring-1 ring-orange-300/10">
            <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Інтеграції</p>
            <p className="mt-3 text-slate-300">Підключення до внутрішніх систем замовлень, складу та доставки.</p>
          </div>
          <div className="rounded-3xl bg-[#2b190f]/95 p-5 ring-1 ring-orange-300/10">
            <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Права доступу</p>
            <p className="mt-3 text-slate-300">Адміністратор, оператор, аналітик. Усі ролі налаштовані.</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-[#231309]/95 p-6 shadow-panel ring-1 ring-orange-300/10">
        <h3 className="text-lg font-semibold text-white">Операційні команди</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-[#2b190f]/95 p-4 ring-1 ring-orange-300/10">
            <p className="text-sm text-slate-400">Менеджмент</p>
            <p className="mt-3 text-white">Олексій, Марина, Анна</p>
          </div>
          <div className="rounded-3xl bg-[#2b190f]/95 p-4 ring-1 ring-orange-300/10">
            <p className="text-sm text-slate-400">Логістика</p>
            <p className="mt-3 text-white">Наталія, Ігор, Євген</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SettingsView;
