import DashboardLayout from '@/components/DashboardLayout';
import SettingsPage from '@/components/settings';

export default function Home() {
  return (
    <DashboardLayout activePage='/settings'>
      <SettingsPage />
    </DashboardLayout>
  );
}