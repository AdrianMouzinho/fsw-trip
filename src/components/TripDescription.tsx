interface TripDescriptionProps {
  description: string
}

export function TripDescription({ description }: TripDescriptionProps) {
  return (
    <div className="space-y-1.5">
      <h2 className="font-semibold text-dark-purple">Sobre a viagem</h2>

      <p className="text-xs leading-5 text-dark-purple">{description}</p>
    </div>
  )
}
