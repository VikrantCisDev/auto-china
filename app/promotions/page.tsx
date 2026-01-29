import DashboardLayout from '@/components/DashboardLayout';
import Promotions from '@/components/Promotions';

export default function Home() {
  return (
    <DashboardLayout activePage='/promotions'>
      <Promotions />
    </DashboardLayout>
  );
}