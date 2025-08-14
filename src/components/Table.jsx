export default function Table({ colunas, dados, renderLinha, mensagemVazio }) {
  return (
    <div className="overflow-x-auto border rounded">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            {colunas.map((coluna) => (
              <th key={coluna} className="text-left px-4 py-2">
                {coluna}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dados.length > 0 ? (
            dados.map(renderLinha)
          ) : (
            <tr>
              <td
                className="px-4 py-6 text-center"
                colSpan={colunas.length}
              >
                {mensagemVazio}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}