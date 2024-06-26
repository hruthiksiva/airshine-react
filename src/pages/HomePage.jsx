import TripCards from "../components/TripCards"
import FAQ from "../components/FAQ"
import TestimonialsPage from "./TestimonialsPage"

const HomePage = () => {
  return (
    <>
    <div className="container mx-auto p-4">
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
    <TestimonialsPage />
    <FAQ />

    </>
    
  )
}

export default HomePage