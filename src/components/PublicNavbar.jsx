import { Link } from 'react-router-dom'
import { FaBasketShopping } from "react-icons/fa6";

function PublicNavbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav className="w-full mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
          DevStore
        </Link>
        <div className="flex gap-4">
          <Link
            to="/"
            className="font-bold text-blue-600 hover:text-blue-800 transition"
          >
            Início
          </Link>
          <Link
            to="/login"
            className="font-bold text-blue-600 hover:text-blue-800 transition"
          >
            Sobre Nós
          </Link>

          <Link
            to="/login"
            className="text-red-600 hover:text-blue-800 transition flex items-center justify-center text-2xl"
          >
            <FaBasketShopping />
          </Link>
          
        </div>
      </nav>
    </header>
    
  )
}

export default PublicNavbar
