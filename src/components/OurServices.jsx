
const OurServices = () => {
  return (
    <>
    <div className="container mx-auto mt-10">
    <div className="p-6 bg-white shadow-lg rounded-lg">
        <div className="text-left">
            <h1 className="text-4xl font-bold">Our Services</h1>
            <p className="text-lg mt-2">We strive to give a hassle-free experience for our customers and believe in providing excellent professional client service with high ethical standards.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
                <h2 className="text-2xl font-semibold">Inbound and Outbound Tours</h2>
                <p className="mt-2">Time to cross out your dream destinations off your bucket list!</p>
                <ul className="list-disc list-inside mt-2">
                    <li>International Tours</li>
                    <li>Domestic Tours</li>
                    <li>Local Tours</li>
                </ul>
                <p className="mt-4">Book Domestic & International flights that best suit your interest. Bag exciting offers and deals. We also cover other modes of transportation like Flights, Ships, Trains, Busses, etc.</p>
            </div>
            <div>
                <img src="https://via.placeholder.com/500x300" alt="Inbound and Outbound Tours" className="w-full h-auto rounded-lg"/>
            </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
                <img src="https://via.placeholder.com/500x300" alt="Tour Packages" className="w-full h-auto rounded-lg"/>
            </div>
            <div>
                <h2 className="text-2xl font-semibold">Tour Packages</h2>
                <ul className="list-disc list-inside mt-2">
                    <li>Student Tour Packages</li>
                    <li>Family Tour Packages</li>
                    <li>Group Tour Packages</li>
                    <li>Pilgrimage Tour Packages</li>
                    <li>Honeymoon Tour Packages</li>
                </ul>
                <p className="mt-4">Dont worry about numbers. Airshine has successfully orchestrated trips with groups of more than 200 passengers. Get onboard and have a delightful journey.</p>
            </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
                <h2 className="text-2xl font-semibold">Hospitality Services</h2>
                <ul className="list-disc list-inside mt-2">
                    <li>Hotel Bookings</li>
                    <li>Meal Deals</li>
                    <li>Activities Planning</li>
                    <li>Tour Guides</li>
                </ul>
                <p className="mt-4">Yummy food, cozy beds, a stunning pool, and adrenaline-pumping activities. Sounds good? You can get all that and more using our hospitality services. We strive to provide the best overall experience through our hospitality services.</p>
            </div>
            <div>
                <img src="https://via.placeholder.com/500x300" alt="Hospitality Services" className="w-full h-auto rounded-lg"/>
            </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
                <img src="https://via.placeholder.com/500x300" alt="Professional Services" className="w-full h-auto rounded-lg"/>
            </div>
            <div>
                <h2 className="text-2xl font-semibold">Professional Services</h2>
                <ul className="list-disc list-inside mt-2">
                    <li>Travel Consultation</li>
                    <li>Travel Planning</li>
                </ul>
            </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
                <h2 className="text-2xl font-semibold">Ancillary Services</h2>
                <p className="mt-2">You dont have to worry anymore about the verification of your travel documents & travel insurance. We can take care of that through our ancillary services and ensure you have a hassle-free trip.</p>
                <ul className="list-disc list-inside mt-2">
                    <li>Passports New Issue/Renewal</li>
                </ul>
                <p className="mt-4">You dont have a passport? Are you worried it is too late to get one for the upcoming trip? We can help you get your passport issued swiftly. You dont need to worry about any legal issues delaying the process.</p>
                <p className="mt-4">We are just a query away from getting your issues resolved. Please do inbox us at <a href="mailto:email@example.com" className="text-blue-500 underline">email@example.com</a> or WhatsApp to voice away your concerns!</p>
            </div>
            <div>
                <img src="https://via.placeholder.com/500x300" alt="Ancillary Services" className="w-full h-auto rounded-lg"/>
            </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
                <img src="https://via.placeholder.com/500x300" alt="MICE" className="w-full h-auto rounded-lg"/>
            </div>
            <div>
                <h2 className="text-2xl font-semibold">MICE</h2>
                <p className="mt-2"><strong>M</strong> – Meeting</p>
                <p><strong>I</strong> – Incentives</p>
                <p><strong>C</strong> – Conferences/Convention</p>
                <p><strong>E</strong> – Education/Exhibition</p>
                <p className="mt-4">Travel arrangements will be made by our office for all kinds of MICE Tourism. Air Tickets, Visa Process, Airport Transfers and Hotel Bookings will be made as per the budget of the MICE traveler.</p>
            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default OurServices