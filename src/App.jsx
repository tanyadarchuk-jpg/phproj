import { useMemo, useState } from 'react';
import Layout from './layout/Layout.jsx';
import DashboardOverview from './views/DashboardOverview.jsx';
import ReportUploader from './views/ReportUploader.jsx';
import DeliveryLogistics from './views/DeliveryLogistics.jsx';
import MenuSalesPerformance from './views/MenuSalesPerformance.jsx';
import FinancialAnalytics from './views/FinancialAnalytics.jsx';
import SettingsView from './views/SettingsView.jsx';

const navItems = [
  { id: 'dashboard', label: 'Панель', description: 'Огляд', icon: 'Home' },
  { id: 'uploader', label: 'Завантажувач звітів', description: 'Завантаження звітів', icon: 'Upload' },
  { id: 'logistics', label: 'Логістика доставки', description: 'Час, кур’єри, зони', icon: 'Package' },
  { id: 'sales', label: 'Меню та продажі', description: 'Динаміка меню та продажів', icon: 'TrendingUp' },
  { id: 'finance', label: 'Фінансова аналітика', description: 'Маржа та акції', icon: 'ClipboardList' },
  { id: 'settings', label: 'Налаштування', description: 'Конфігурація системи', icon: 'SlidersHorizontal' },
];

const pageViews = {
  dashboard: <DashboardOverview />,
  uploader: <ReportUploader />,
  logistics: <DeliveryLogistics />,
  sales: <MenuSalesPerformance />,
  finance: <FinancialAnalytics />,
  settings: <SettingsView />,
};

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  const pageTitle = useMemo(() => {
    const current = navItems.find((item) => item.id === activePage);
    return current ? current.label : 'Аналітика';
  }, [activePage]);

  return (
    <Layout navItems={navItems} activePage={activePage} onNavigate={setActivePage}>
      <div className="space-y-6">
        <header className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-orange-200/70">Панель Пузата Хата</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">{pageTitle}</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-[#3c2a18] px-4 py-2 text-sm text-orange-100 shadow-panel">KPI мережі ресторанів</span>
            <span className="rounded-full bg-[#3c2a18] px-4 py-2 text-sm text-orange-100 shadow-panel">Операційна аналітика</span>
          </div>
        </header>

        {pageViews[activePage]}
      </div>
    </Layout>
  );
}

export default App;
