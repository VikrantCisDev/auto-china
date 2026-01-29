import DashboardLayout from '@/components/DashboardLayout';
import SecurityPage from '@/components/security';
import SettingsPage from '@/components/settings';

export default function Home() {
  return (
    <DashboardLayout activePage='/security'>
      <SecurityPage />
    </DashboardLayout>
  );
}