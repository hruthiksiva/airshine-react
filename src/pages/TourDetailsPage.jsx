
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import dubai1 from '../assets/images/trips/dubai/dubai-1.jpeg'
import dubai2 from '../assets/images/trips/dubai/dubai-2.jpeg'

const TourDetailsPage = () => {
  return (
    <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4 text-center">Dubai</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <Carousel>
            <div>
              <img src={dubai1} alt="Place 1" />
            </div>
            <div>
              <img src={dubai2} alt="Place 2" />
            </div>
            <div>
              <img src={dubai1} alt="Place 3" />
            </div>
            <div>
              <img src={dubai2} alt="Place 4" />
            </div>
            <div>
              <img src={dubai1} alt="Place 5" />
            </div>
          </Carousel>
        </div>
        <div className="md:col-span-1 bg-gray-100 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl mb-4">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input type="tel" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email (Optional)</label>
              <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Comments</label>
              <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" rows="4"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white px-3 py-2 rounded-md">Submit</button>
          </form>
        </div>
      </div>
      <div className="bg-gray-100 mt-8">
        <h2 className="text-3xl mb-4">Itinerary</h2>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="p-4 border rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">Day {i + 1}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg shadow-lg">
          <h2 className="text-2xl mb-4">Included</h2>
          <ul className="list-disc list-inside">
            <li>Accommodation</li>
            <li>Meals</li>
            <li>Transportation</li>
            <li>Guided Tours</li>
          </ul>
        </div>
        <div className="p-4 border rounded-lg shadow-lg">
          <h2 className="text-2xl mb-4">Excluded</h2>
          <ul className="list-disc list-inside">
            <li>Flights</li>
            <li>Travel Insurance</li>
            <li>Personal Expenses</li>
            <li>Gratuities</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TourDetailsPage;
