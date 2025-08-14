import { Link } from "react-router-dom";

function IconLink({ to, emoji, title }) {
  return (
    <Link
      to={to}
      className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition
                 hover:-translate-y-1 hover:shadow-xl transform-gpu"
    >
      <span className="text-4xl">{emoji}</span>
      <span className="text-sm font-medium text-gray-700">{title}</span>
    </Link>
  );
}

function MenuAdmin() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Admin</h1>
      <div className="w-full rounded-2xl bg-white shadow p-6">
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          <IconLink to="/usuarios" emoji="👤" title="Usuários" />
          <IconLink to="/projetos" emoji="🧰" title="Perfil" />
          <IconLink to="/projetos" emoji="🔑" title="Permissions" />
        </div>
      </div>
    </div>
  );
}

export default MenuAdmin;
