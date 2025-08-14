import { useState } from "react"
import useAuthApi from "../hooks/useAuthApi"
import Modal from "./Modal"

const USERS_PATH = "/users"

export default function CreateUserModal({ open, onClose, onCreated }) {
  const api = useAuthApi()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [profileId, setProfileId] = useState("")
  const [isAdmin, setIsAdmin] = useState(false)
  const [imageFile, setImageFile] = useState(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    setError("")
    setBusy(true)
    try {
      const form = new FormData()
      form.append("name", name)
      form.append("email", email)
      form.append("password", password)
      form.append("profile_id", String(profileId))
      form.append("is_admin", String(isAdmin))
      if (imageFile) form.append("image", imageFile)
      await api.post(USERS_PATH, form)
      setName("")
      setEmail("")
      setPassword("")
      setProfileId("")
      setIsAdmin(false)
      setImageFile(null)
      onCreated?.()
      onClose()
    } catch (err) {
      const msg = err.response?.data?.error || err.response?.data?.message || "falha ao cadastrar usuário"
      setError(msg)
    } finally {
      setBusy(false)
    }
  }

  return (
    <Modal open={open} onClose={onClose}>
      <h2 className="text-xl font-semibold mb-4">Cadastrar usuário</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          className="w-full border rounded px-3 py-2"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full border rounded px-3 py-2"
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full border rounded px-3 py-2"
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="w-full border rounded px-3 py-2"
          placeholder="ID do perfil"
          type="number"
          value={profileId}
          onChange={(e) => setProfileId(e.target.value)}
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={isAdmin}
            onChange={(e) => setIsAdmin(e.target.checked)}
          />
          <span>Administrador</span>
        </label>
        <input
          className="w-full"
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files?.[0] || null)}
        />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <div className="flex gap-2 justify-end pt-2">
          <button
            type="button"
            className="px-4 py-2 rounded border"
            onClick={onClose}
            disabled={busy}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-60"
            disabled={busy}
          >
            {busy ? "Salvando..." : "Salvar"}
          </button>
        </div>
      </form>
    </Modal>
  )
}
