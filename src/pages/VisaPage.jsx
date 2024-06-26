import visa1 from '../assets/images/visa-1.jpg';
import visa2 from '../assets/images/visa-2.jpg';
import ContactUsForm from '../components/ContactUsForm';
const VisaPage = () => {
  return (
    <>
        <section className="bg-gray-100">
            <div className="container mx-auto mt-10 px-4">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-left">Visa Services</h1>
                    </div>
                    
                    <div className="md:flex md:items-start md:space-x-8 mt-8">
                        <div className="md:w-1/2">
                            <p className="mb-4">Airshine values Visa service as it is the most crucial gateway for experiencing international adventures. Sometimes, Visa seems to be the most suspenseful part of an international trip. It can make or break our plans.</p>
                            <p>Our Visa experts are up to date with Visa regulations of all the hotspot destinations in the world to ensure that you get your Visas approved without any delays.</p>
                        </div>
                        <div className="md:w-1/2 mt-4 md:mt-0">
                            <img src={visa1} alt="Visa Services" className="w-full h-auto rounded shadow-sm" />
                        </div>
                    </div>

                    <div className="md:flex md:items-start md:space-x-8 mt-8">
                        <div className="md:w-1/2 order-2 md:order-1 mt-4 md:mt-0">
                            <img src={visa2} alt="Visa Experts" className="w-full h-auto rounded shadow-sm" />
                        </div>
                        <div className="md:w-1/2 order-1 md:order-2">
                            <p className="mb-4">You just have to enter your personal details, upload the required documents, and we'll take care of the rest. We will verify the documents and ensure that it is error-free. You'll receive your Visa within a week!</p>
                            <p>Dedicated staff members are always at your disposal to solve any queries. Please do inbox us at <a href="mailto:contact@airshineonline.in" className="text-blue-500 underline">contact@airshineonline.in</a> or contact us via WhatsApp and let us know more about your requirements.</p>
                        </div>
                    </div>
                </div>
                <ContactUsForm />
            </div>
        </section>
    </>
  );
};

export default VisaPage;