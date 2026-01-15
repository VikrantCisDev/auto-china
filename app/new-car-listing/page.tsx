import CarListingForm from '@/components/CarListingForm';
import DashboardLayout from '@/components/DashboardLayout';

export default function Home() {
  return (
    <DashboardLayout activePage='/listings'>
      <CarListingForm/>
    </DashboardLayout>
  );
}