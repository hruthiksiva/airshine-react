import { useState } from 'react';
import trips from '../assets/data/trips.json'

const DomesticPage = () => {
  const tripsData = trips.domestic
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTrips = tripsData.filter(trip =>
    trip.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
    <h1 className="text-4xl font-bold mb-4">Domestic Trips</h1>
    <p className="mb-6">Explore our exclusive international trips. Use the search bar to find your next adventure.</p>
    
    <input
      type="text"
      placeholder="Search by location..."
      className="w-full p-2 mb-6 border rounded"
      onChange={(e) => setSearchTerm(e.target.value)}
    />

    {filteredTrips.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTrips.map(trip => (
          <div key={trip.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={trip.image} alt={trip.location} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{trip.location}</h2>
              <p className="text-gray-700 mb-4">{trip.duration}</p>
              <a href={trip.link} className="text-blue-500 hover:underline">More</a>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className="text-center mt-6">
        <p className="text-xl mb-4">No trips found. Contact us to get the best offers for the State you want to go.</p>
        <a href="/contact" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Contact Us</a>
      </div>
    )}
  </div>
);
};

export default DomesticPage;