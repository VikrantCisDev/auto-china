
import AccountDashboard from "@/components/account/account-dashboard"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Partners from "@/components/Partners"

export default function AccountPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <AccountDashboard />
      </div>
      <Partners />
      <Footer />
    </main>
  )
}
