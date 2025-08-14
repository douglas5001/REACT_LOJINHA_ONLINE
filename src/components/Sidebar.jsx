import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../contexts/auth-context";

function Sidebar({ aberta, onClose }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { signOut } = useContext(AuthContext);

  const navItemClass = (path) =>
    `flex items-center gap-2 px-4 py-2 rounded hover:bg-blue-100 transition ${
      pathname.startsWith(path) ? "bg-blue-200 font-bold" : ""
    }`;

  function handleLogout() {
    signOut();
    onClose?.();
    navigate("/login", { replace: true });
  }

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black bg-opacity-30 z-20 transition-opacity duration-300 ${
          aberta ? "block" : "hidden"
        }`}
      />
      <div
        className={`fixed z-30 top-0 left-0 h-full w-64 bg-white border-r shadow-lg transform transition-transform duration-300 ${
          aberta ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-16 border-b px-4">
          <span className="text-xl font-bold text-blue-700">SliderBar</span>
          <button onClick={onClose} className="text-2xl text-gray-600">×</button>
        </div>
        <nav className="p-4 space-y-2">
          <Link to="/dashboard" className={navItemClass("/dashboard")}>📊 Dashboard</Link>
          <Link to="/projetos" className={navItemClass("/projetos")}>📁 Meus Projetos</Link>
          <Link to="/servicos" className={navItemClass("/servicos")}>🛠 Meus Serviços</Link>
          <Link to="/menu-admin" className={navItemClass("/menu-admin")}>👤 Admin</Link>
          <button onClick={handleLogout} className="w-full text-left text-red-500 hover:underline mt-4">⎋ Sair</button>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
