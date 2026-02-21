import { Zap } from 'lucide-react'

interface QuickAnswerProps {
  children: React.ReactNode
}

export default function QuickAnswer({ children }: QuickAnswerProps) {
  return (
    <div className="bg-primary-50 border border-primary-200 p-6 rounded-lg my-6">
      <div className="flex items-start gap-3">
        <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
        <div className="text-text">
          <span className="font-semibold text-primary">Quick Answer: </span>
          {children}
        </div>
      </div>
    </div>
  )
}
