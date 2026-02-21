import { CheckCircle } from 'lucide-react'

interface KeyTakeawaysProps {
  items: string[]
}

export default function KeyTakeaways({ items }: KeyTakeawaysProps) {
  return (
    <div className="bg-accent-50 border border-accent-200 p-6 rounded-lg my-6">
      <h3 className="font-semibold text-accent-700 mb-4 flex items-center gap-2">
        <CheckCircle className="w-5 h-5" />
        Key Takeaways
      </h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-text">
            <span className="text-accent-600 mt-1.5">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
