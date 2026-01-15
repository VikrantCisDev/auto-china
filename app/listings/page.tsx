import DashboardLayout from '@/components/DashboardLayout';
import ListingPage from '@/components/Listings';

export default function Home() {
  return (
    <DashboardLayout activePage='/listings'>
      <ListingPage />
    </DashboardLayout>
  );
}