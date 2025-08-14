import { useCallback, useEffect, useMemo, useState } from "react"
import useAuthApi from "../hooks/useAuthApi"
import CreateUserModal from "../components/CreateUserModal"
import Table from "../components/Table"

const USERS_PATH = "/users"

export default function Users() {
  const api = useAuthApi()
  const [rows, setRows] = useState([])
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState("")
  const [openCreate, setOpenCreate] = useState(false)
  const [selectedId, setSelectedId] = useState(null)

  const [field, setField] = useState("name")
  const [operator, setOperator] = useState("contains")
  const [query, setQuery] = useState("")
  const [status, setStatus] = useState("active")

  const fetchUsers = useCallback(async () => {
    setBusy(true)
    setError("")
    try {
      const { data } = await api.get(USERS_PATH)
      setRows(data)
    } catch (err) {
      const msg = err.response?.data?.message || "falha ao carregar usuários"
      setError(msg)
    } finally {
      setBusy(false)
    }
  }, [api])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  const filtered = useMemo(() => {
    const normalize = (v) => String(v || "").toLowerCase()
    return rows.filter((u) => {
      const value =
        field === "email"
          ? normalize(u.email)
          : field === "id"
          ? String(u.id)
          : normalize(u.name)
      const q = normalize(query)
      const op =
        operator === "equals"
          ? value === q
          : operator === "starts"
          ? value.startsWith(q)
          : value.includes(q)
      const st =
        status === "all" ? true : status === "active" ? Boolean(u.active ?? u.is_active ?? true) : !(u.active ?? u.is_active ?? true)
      return op && st
    })
  }, [rows, field, operator, query, status])

  const handleAdd = () => setOpenCreate(true)
  const handleEdit = () => selectedId && console.log("editar", selectedId)
  const handleDelete = () => selectedId && console.log("excluir", selectedId)
  const canEditDelete = Boolean(selectedId)

  return (
    <div className="p-6">
      <div className="mb-4 flex items-center gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="relative">
            <select
              value={field}
              onChange={(e) => setField(e.target.value)}
              className="h-9 pl-3 pr-7 rounded-md border border-gray-300 text-sm bg-white"
            >
              <option value="name">Nome</option>
              <option value="email">Login</option>
              <option value="id">Cód.</option>
            </select>
          </div>

          <div className="relative">
            <select
              value={operator}
              onChange={(e) => setOperator(e.target.value)}
              className="h-9 pl-3 pr-7 rounded-md border border-gray-300 text-sm bg-white"
            >
              <option value="contains">Contém</option>
              <option value="equals">Igual</option>
              <option value="starts">Começa</option>
            </select>
          </div>

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-9 w-80 rounded-md border border-gray-300 text-sm px-3"
            placeholder=""
          />

          <button
            onClick={() => {}}
            className="h-9 px-3 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            title="Buscar"
          >
            🔍
          </button>
        </div>

        <div className="flex items-center gap-6 mx-4">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="status"
              value="all"
              checked={status === "all"}
              onChange={(e) => setStatus(e.target.value)}
              className="accent-blue-600"
            />
            Todos
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="status"
              value="active"
              checked={status === "active"}
              onChange={(e) => setStatus(e.target.value)}
              className="accent-blue-600"
            />
            Ativo
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="status"
              value="inactive"
              checked={status === "inactive"}
              onChange={(e) => setStatus(e.target.value)}
              className="accent-blue-600"
            />
            Inativo
          </label>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleAdd}
            className="h-9 px-3 rounded bg-blue-600 text-white hover:bg-blue-700 text-sm flex items-center gap-2"
          >
            ➕ Adicionar
          </button>
          <button
            onClick={handleEdit}
            disabled={!canEditDelete}
            className={`h-9 px-3 rounded text-white text-sm flex items-center gap-2 ${
              canEditDelete
                ? "bg-emerald-600 hover:bg-emerald-700"
                : "bg-emerald-300 cursor-not-allowed"
            }`}
          >
            ✏️ Editar
          </button>
          <button
            onClick={handleDelete}
            disabled={!canEditDelete}
            className={`h-9 px-3 rounded text-white text-sm flex items-center gap-2 ${
              canEditDelete
                ? "bg-rose-600 hover:bg-rose-700"
                : "bg-rose-300 cursor-not-allowed"
            }`}
          >
            🗑️ Excluir
          </button>
        </div>
      </div>

      {busy && <p>Carregando...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!busy && !error && (
        <Table
          colunas={["Cód.", "Nome", "Login", "Perfil", "Situação", "Gestor", "Lic. Nom."]}
          dados={filtered}
          mensagemVazio="Nenhum usuário encontrado"
          getRowId={(u) => u.id}
          selectedId={selectedId}
          onSelect={setSelectedId}
          renderLinha={(u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.profile_name ?? "-"}</td>
              <td>{u.active ? "✔" : "✖"}</td>
              <td>{u.is_manager ? "✔" : "✖"}</td>
              <td>{u.has_nomination ? "✔" : "✖"}</td>
            </tr>
          )}
        />
      )}

      <CreateUserModal
        open={openCreate}
        onClose={() => setOpenCreate(false)}
        onCreated={() => {
          setSelectedId(null)
          fetchUsers()
        }}
      />
    </div>
  )
}
