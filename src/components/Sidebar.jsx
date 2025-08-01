import { Link, useLocation } from 'react-router-dom'

function Sidebar({ aberta, onClose }) {
  const { pathname } = useLocation()

  const navItemClass = (path) =>
    `flex items-center gap-2 px-4 py-2 rounded hover:bg-blue-100 transition ${
      pathname === path ? 'bg-blue-200 font-bold' : ''
    }`

  return (
    <>
      {/* Overlay escuro para qualquer resolução */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black bg-opacity-30 z-20 transition-opacity duration-300 ${
          aberta ? 'block' : 'hidden'
        }`}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed z-30 top-0 left-0 h-full w-64 bg-white border-r shadow-lg transform transition-transform duration-300 ${
          aberta ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-16 border-b px-4">
          <span className="text-xl font-bold text-blue-700">LOJA Admin</span>
          <button onClick={onClose} className="text-2xl text-gray-600">×</button>
        </div>
        <nav className="p-4 space-y-2">
          <Link to="/dashboard" className={navItemClass('/')}>📊 Dashboard</Link>
          <Link to="/projetos" className={navItemClass('/projetos')}>📁 Meus Projetos</Link>
          <Link to="/servicos" className={navItemClass('/servicos')}>🛠 Meus Serviços</Link>
          <button className="w-full text-left text-red-500 hover:underline mt-4">⎋ Sair</button>
        </nav>
      </div>
    </>
  )
}

export default Sidebar
