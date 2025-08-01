function Servicos() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-blue-700">Meus Serviços</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-6 bg-white rounded shadow">
          <h2 className="text-xl font-semibold text-gray-800">Serviço 1</h2>
          <p className="text-sm text-gray-600 mt-2">Descrição do serviço 1 aqui.</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h2 className="text-xl font-semibold text-gray-800">Serviço 2</h2>
          <p className="text-sm text-gray-600 mt-2">Descrição do serviço 2 aqui.</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h2 className="text-xl font-semibold text-gray-800">Serviço 3</h2>
          <p className="text-sm text-gray-600 mt-2">Descrição do serviço 3 aqui.</p>
        </div>
      </div>
    </div>
  )
}

export default Servicos
