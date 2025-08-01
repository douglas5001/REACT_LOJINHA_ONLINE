function Dashboard() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 bg-white shadow rounded">
          <h2 className="text-lg">Total de Projetos</h2>
          <p className="text-blue-600 text-2xl font-bold">3</p>
        </div>
        <div className="p-6 bg-white shadow rounded">
          <h2 className="text-lg">Total de Serviços</h2>
          <p className="text-green-600 text-2xl font-bold">3</p>
        </div>
        <div className="p-6 bg-white shadow rounded">
          <h2 className="text-lg">Vendas do Mês</h2>
          <p className="text-purple-600 text-2xl font-bold">R$ 12.500</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
