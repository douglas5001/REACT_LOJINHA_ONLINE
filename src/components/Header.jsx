function Header({ onMenuClick }) {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b bg-white shadow-sm md:hidden">
      <button onClick={onMenuClick} className="text-2xl">☰</button>
      <span className="text-blue-600 font-bold text-lg">LOJA Admin</span>
    </header>
  )
}

export default Header
