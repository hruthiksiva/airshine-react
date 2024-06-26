import TripCards from "../components/TripCards"
import FAQ from "../components/FAQ"
import TestimonialsPage from "./TestimonialsPage"

const HomePage = () => {
  return (
    <>
    <div className="container mx-auto p-4">
      {/* Header */}
      <header className="bg-blue-500 text-white text-center p-6">
        <h1 className="text-4xl font-bold">Welcome to Your Travel Company</h1>
        <p className="text-xl mt-2">Explore the world with us</p>
      </header>
      <h1 className="text-4xl font-bold mb-4">Popular Packages</h1>
    <TripCards trip="popular"/>
    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="/international"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All International Trips</a
      >
    </section>
    <h1 className="text-4xl font-bold mb-4">International Trips</h1>
    <TripCards trip="International"/>
    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="/international"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All International Trips</a
      >
    </section>
    <h1 className="text-4xl font-bold mb-4">Domestic Trips</h1>
    <TripCards trip="Domestic"/>
    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="/domestic"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Domestic Trips</a
      >
    </section>
    </div>
          {/* Statistics */}
          <section className="bg-white py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Achievements</h2>
        <div className="flex justify-around">
          <Statistic number="100+" label="Destinations" />
          <Statistic number="500+" label="Happy Clients" />
          <Statistic number="200+" label="Tours Organized" />
        </div>
      </section>
    <TestimonialsPage />
    <FAQ />

    </>
    
  )
}

// Statistic Component
const Statistic = ({ number, label }) => (
  <div className="text-center">
    <p className="text-4xl font-bold text-blue-500">{number}</p>
    <p className="text-xl text-gray-700">{label}</p>
  </div>
);

export default HomePage