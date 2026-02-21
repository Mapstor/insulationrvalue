import { Lightbulb } from 'lucide-react'

interface ProTipProps {
  children: React.ReactNode
}

export default function ProTip({ children }: ProTipProps) {
  return (
    <div className="border-l-4 border-secondary bg-secondary-50 p-4 rounded-r-lg my-6">
      <div className="flex items-start gap-3">
        <Lightbulb className="w-5 h-5 text-secondary-600 mt-0.5 flex-shrink-0" />
        <div className="text-text">
          <span className="font-semibold text-secondary-700">Pro Tip: </span>
          {children}
        </div>
      </div>
    </div>
  )
}
