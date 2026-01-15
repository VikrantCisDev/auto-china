import DashboardLayout from '@/components/DashboardLayout';
import Orders from '@/components/Orders';

export default function Home() {
  return (
    <DashboardLayout activePage='/orders'>
      <Orders />
    </DashboardLayout>
  );
}