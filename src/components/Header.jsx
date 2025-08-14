function Header({ aoClicarMenu }) {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-4 border-b">
      <button className="text-2xl" onClick={aoClicarMenu}>☰</button>
      <h1 className="text-blue-700 font-bold text-lg">Laboratorio <span className="text-gray-800">//</span></h1>
    </header>
  )
}

export default Header
