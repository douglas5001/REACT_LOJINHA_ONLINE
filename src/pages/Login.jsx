function Login() {
  return (
    <div className="bg-white p-8 rounded shadow-md w-96">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Login</h1>
      <input
        type="text"
        placeholder="Usuário"
        className="w-full border px-4 py-2 mb-3 rounded"
      />
      <input
        type="password"
        placeholder="Senha"
        className="w-full border px-4 py-2 mb-4 rounded"
      />
      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
        Entrar
      </button>
    </div>
  )
}

export default Login
