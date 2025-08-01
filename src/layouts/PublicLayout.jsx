import PublicNavbar from '../components/PublicNavbar'
import Footer from '../components/Footer'

function PublicLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <PublicNavbar />
      <main className="flex-grow flex items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default PublicLayout
