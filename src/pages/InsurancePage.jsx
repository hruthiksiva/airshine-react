import insurance1 from '../assets/images/insurance-1.jpg'
import ContactUsForm from '../components/ContactUsForm'
// import insurance2 from '../assets/images/insurance-2.jpg'

const InsurancePage = () => {
  return (
    <>
        <section className="bg-gray-100">
            <div className="container mx-auto mt-10 px-4">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="mb-8">
                        <h3 className="text-3xl font-bold text-left">Travel Insurance Services</h3>
                    </div>

                    <div className="md:flex md:items-start md:space-x-8 mt-8">
                        <div className="md:w-1/2">
                            <img src={insurance1} alt="Insurance Providers" className="w-full h-auto rounded shadow-sm"/>
                        </div>
                        <div className="md:w-1/2 mt-4 md:mt-0">
                            <p className="mb-4">Be it a trip with family or friends, safety and assurance are always at the back of our heads. It might be the sudden need for a medical emergency abroad or the loss of valuable items in your luggage.</p>
                            <p>For that very reason, we have partnered with the best insurance providers in town to offer you optimal travel insurance policies to safeguard you from losses at affordable rates so that you can have a peaceful trip without worry.</p>
                        </div>
                    </div>
                    
                    <div className="mt-8">
                        <p>We are just a query away from getting your issues resolved. Please do inbox us at <a href="mailto:contact@airshineonline.com" className="text-blue-500 underline">contact@airshineonline.com</a> or contact us via WhatsApp to voice away your concerns!</p>
                    </div>
                </div>
                <ContactUsForm />
            </div>
        </section>
    </>
  )
}

export default InsurancePage