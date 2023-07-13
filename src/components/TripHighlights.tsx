import { CheckCircle } from 'lucide-react'

interface TripHighlightsProps {
  highlights: string[]
}

export function TripHighlights({ highlights }: TripHighlightsProps) {
  return (
    <div className="space-y-3 mb-5">
      <h2 className="font-semibold text-dark-purple">Destaques</h2>

      <div className="grid grid-cols-2 gap-3">
        {highlights.map((highlight, i) => (
          <span
            key={`${highlight}-${i}`}
            className="flex items-center gap-1 text-sm leading-6"
          >
            <CheckCircle size={16} className="text-purple" />
            {highlight}
          </span>
        ))}
      </div>
    </div>
  )
}
