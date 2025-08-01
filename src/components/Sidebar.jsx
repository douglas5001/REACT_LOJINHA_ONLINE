import { Link, useLocation } from 'react-router-dom'

function Sidebar({ aberta, onClose }) {
  const { pathname } = useLocation()

  const navItemClass = (path) =>
    `flex items-center gap-2 px-4 py-2 rounded transition hover:bg-blue-100 ${
      pathname === path ? 'bg-blue-200 font-semibold' : ''
    }`

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white border-r shadow-lg z-40 transform transition-transform duration-300 ${
        aberta ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 md:static md:shadow-none`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <span className="font-bold text-blue-600 text-xl">LOJA Admin</span>
        <button onClick={onClose} className="md:hidden text-xl">×</button>
      </div>
      <nav className="p-4 space-y-2">
        <Link to="/" className={navItemClass('/')}>📊 Dashboard</Link>
        <Link to="/projetos" className={navItemClass('/projetos')}>📁 Meus Projetos</Link>
        <Link to="/servicos" className={navItemClass('/servicos')}>🛠 Meus Serviços</Link>
        <button className="w-full text-left text-red-600 hover:underline mt-4">⎋ Sair</button>
      </nav>
    </div>
  )
}

export default Sidebar
