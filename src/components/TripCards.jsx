import tripData from '../assets/data/trips.json'

const TripCards = ({trips}) => {
    let filteredTrips = {}
    if (trips == 'Domestic')
        filteredTrips = tripData.domestic
    else if (trips == 'International')
        filteredTrips = tripData.international
    else
        filteredTrips = tripData.popular


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTrips.map(trip => (
          <div key={trip.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={trip.image} alt={trip.location} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{trip.location}</h2>
              <p className="text-gray-700 mb-4">{trip.duration}</p>
              <a href="/tourdetails" className="text-blue-500 hover:underline">More</a>
            </div>
          </div>
        ))}
      </div>
  )
}

export default TripCards