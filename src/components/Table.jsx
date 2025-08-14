import React, { useMemo, useState } from "react"

export default function Table({
  colunas,
  dados,
  renderLinha,
  mensagemVazio,
  getRowId,
  selectedId,
  onSelect,
}) {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(20)

  const total = dados.length
  const totalPages = Math.max(1, Math.ceil(total / pageSize))
  const currentPage = Math.min(page, totalPages)
  const start = (currentPage - 1) * pageSize
  const end = start + pageSize

  const pageSlice = useMemo(() => dados.slice(start, end), [dados, start, end])

  const goFirst = () => setPage(1)
  const goPrev = () => setPage((p) => Math.max(1, p - 1))
  const goNext = () => setPage((p) => Math.min(totalPages, p + 1))
  const goLast = () => setPage(totalPages)

  const rangePages = useMemo(() => {
    const around = 5
    const from = Math.max(1, currentPage - around)
    const to = Math.min(totalPages, currentPage + around)
    return Array.from({ length: to - from + 1 }, (_, i) => from + i)
  }, [currentPage, totalPages])

  const handlePageSize = (e) => {
    const size = Number(e.target.value)
    setPageSize(size)
    setPage(1)
  }

  const downloadExcel = () => {
    const header = colunas.join(";")
    const body = dados.map((row) => {
      const tr = renderLinha(row)
      const cells = React.Children.toArray(tr.props.children)
      const values = cells.map((td) =>
        String(td.props.children ?? "").replaceAll(";", ",")
      )
      return values.join(";")
    })
    const csv = [header, ...body].join("\n")
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "tabela.csv"
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="border border-gray-300 rounded-md shadow-sm">
      <div className="flex items-center justify-between px-3 py-2">
        <div className="text-xs text-gray-600">
          Página {currentPage} de {totalPages} - {total} registro(s)
        </div>

        <div className="flex items-center gap-4">
          <select
            value={pageSize}
            onChange={handlePageSize}
            className="h-7 rounded border-gray-300 text-xs"
          >
            {[10, 20, 50, 100].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>

          <div className="flex items-center gap-1">
            <button
              onClick={goFirst}
              className="h-7 w-7 grid place-items-center rounded border border-gray-300 hover:bg-gray-100"
            >
              «
            </button>
            <button
              onClick={goPrev}
              className="h-7 w-7 grid place-items-center rounded border border-gray-300 hover:bg-gray-100"
            >
              ‹
            </button>

            {rangePages.map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`h-7 min-w-7 px-2 rounded border text-xs ${
                  p === currentPage
                    ? "border-blue-500 text-blue-700 bg-blue-50"
                    : "border-gray-300 hover:bg-gray-100"
                }`}
              >
                {p}
              </button>
            ))}

            <button
              onClick={goNext}
              className="h-7 w-7 grid place-items-center rounded border border-gray-300 hover:bg-gray-100"
            >
              ›
            </button>
            <button
              onClick={goLast}
              className="h-7 w-7 grid place-items-center rounded border border-gray-300 hover:bg-gray-100"
            >
              »
            </button>
          </div>
        </div>

        <button
          onClick={downloadExcel}
          className="flex items-center gap-2 h-8 px-3 rounded bg-emerald-600 text-white hover:bg-emerald-700 text-xs"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7h2v7h10v-7h2zM11 3h2v8h3l-4 4-4-4h3V3z" />
          </svg>
          Excel
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-xs border-collapse">
          <thead>
            <tr className="bg-[#f3f8fb] text-gray-700 border-y border-gray-300">
              {colunas.map((coluna) => (
                <th
                  key={coluna}
                  className="px-3 py-2 text-left font-semibold border-r border-gray-300 last:border-r-0"
                >
                  {coluna}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pageSlice.length > 0 ? (
              pageSlice.map((row) => {
                const tr = renderLinha(row)
                const id = getRowId ? getRowId(row) : tr.key
                const isSelected = selectedId === id
                const cells = React.Children.toArray(tr.props.children)
                return (
                  <tr
                    key={id}
                    onClick={() => onSelect && onSelect(id)}
                    className={`cursor-pointer border-b border-gray-200 hover:bg-[#f3f8fb] ${
                      isSelected ? "bg-blue-50" : ""
                    }`}
                  >
                    {cells.map((td, i) => (
                      <td
                        key={i}
                        className="px-3 py-2 border-r border-gray-200 last:border-r-0"
                      >
                        {td.props.children}
                      </td>
                    ))}
                  </tr>
                )
              })
            ) : (
              <tr>
                <td
                  colSpan={colunas.length}
                  className="px-4 py-6 text-center text-gray-500"
                >
                  {mensagemVazio}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
