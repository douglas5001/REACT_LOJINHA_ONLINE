import { useCallback, useEffect, useState } from "react"
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

  return (
    <div className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Usuários</h1>
        <button
          onClick={() => setOpenCreate(true)}
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Cadastrar
        </button>
      </div>

      {busy && <p>Carregando...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!busy && !error && (
        <Table
          colunas={["ID", "Nome", "E-mail", "Perfil", "Admin"]}
          dados={rows}
          mensagemVazio="Nenhum usuário encontrado"
          renderLinha={(u) => (
            <tr key={u.id} className="border-t">
              <td className="px-4 py-2">{u.id}</td>
              <td className="px-4 py-2">{u.name}</td>
              <td className="px-4 py-2">{u.email}</td>
              <td className="px-4 py-2">{u.profile_id ?? "-"}</td>
              <td className="px-4 py-2">{u.is_admin ? "sim" : "não"}</td>
            </tr>
          )}
        />
      )}

      <CreateUserModal
        open={openCreate}
        onClose={() => setOpenCreate(false)}
        onCreated={fetchUsers}
      />
    </div>
  )
}
