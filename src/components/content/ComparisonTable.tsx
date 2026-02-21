import { Check, X, Minus } from 'lucide-react'

interface ComparisonItem {
  feature: string
  option1: string | boolean
  option2: string | boolean
}

interface ComparisonTableProps {
  option1Name: string
  option2Name: string
  items: ComparisonItem[]
}

function renderValue(value: string | boolean) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="w-5 h-5 text-accent-600 mx-auto" />
    ) : (
      <X className="w-5 h-5 text-red-500 mx-auto" />
    )
  }
  if (value === '-') {
    return <Minus className="w-5 h-5 text-text-muted mx-auto" />
  }
  return value
}

export default function ComparisonTable({
  option1Name,
  option2Name,
  items,
}: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 my-6">
      <table className="w-full text-[15px] border-collapse">
        <thead>
          <tr>
            <th className="bg-primary text-white font-semibold px-4 py-3 text-left w-1/3">
              Feature
            </th>
            <th className="bg-primary text-white font-semibold px-4 py-3 text-center w-1/3">
              {option1Name}
            </th>
            <th className="bg-primary text-white font-semibold px-4 py-3 text-center w-1/3">
              {option2Name}
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr
              key={index}
              className={`border-b border-surface-300 hover:bg-surface-200 transition-colors ${
                index % 2 === 1 ? 'bg-surface-100' : ''
              }`}
            >
              <td className="px-4 py-3 font-medium">{item.feature}</td>
              <td className="px-4 py-3 text-center">
                {renderValue(item.option1)}
              </td>
              <td className="px-4 py-3 text-center">
                {renderValue(item.option2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
