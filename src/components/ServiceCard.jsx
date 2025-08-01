function ServiceCard({ titulo, descricao, preco, onDetalhes }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border p-4 flex flex-col justify-between">
      <div>
        <div className="bg-gray-100 h-40 rounded flex items-center justify-center mb-4">
          <span className="text-gray-400 text-sm">Imagem</span>
        </div>

        <h2 className="text-lg font-semibold text-gray-900 mb-1">
          {titulo}
        </h2>

        <p className="text-gray-600 text-sm mb-4">{descricao}</p>
      </div>

      <div className="flex justify-between items-center mt-auto">
        <span className="bg-gray-100 px-3 py-1 rounded text-sm font-semibold text-gray-800">
          R$ {preco}
        </span>
        <button
          onClick={onDetalhes}
          className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Ver detalhes
        </button>
      </div>
    </div>
  )
}

export default ServiceCard
