import { ancientsFloor1 } from '../data/ancientsFloor1'
import EventCard from '../components/EventCard'

export default function AncientsFloor1() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {ancientsFloor1.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  )
}
