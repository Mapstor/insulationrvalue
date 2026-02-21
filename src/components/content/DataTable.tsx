interface DataTableProps {
  headers: string[]
  rows: string[][]
  caption?: string
}

export default function DataTable({ headers, rows, caption }: DataTableProps) {
  return (
    <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 my-6">
      <table className="w-full text-[15px] border-collapse">
        {caption && (
          <caption className="text-sm text-text-muted mb-2 text-left">
            {caption}
          </caption>
        )}
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="bg-primary text-white font-semibold px-4 py-3 text-left"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`border-b border-surface-300 hover:bg-surface-200 transition-colors ${
                rowIndex % 2 === 1 ? 'bg-surface-100' : ''
              }`}
            >
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
