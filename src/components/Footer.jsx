import { NavLink } from "react-router-dom"
const Footer = () => {
  return (
    <>
        <footer className="text-center text-lg-start text-white bg-[#1c2331]">
        {/* <!-- Section: Social media --> */}
        <section className="flex justify-between p-4 bg-[#037BFF]">
            {/* <!-- Left --> */}
            <div className="mr-5">
            <span>Get connected with us on social networks:</span>
            </div>

            {/* <!-- Right --> */}
            <div>
                <NavLink to="facebook.com" className="text-white mx-3">
                    <i className="fab fa-facebook-f"></i>
                </NavLink>
                <NavLink to="#" className="text-white mx-3">
                    <i className="fab fa-twitter"></i>
                </NavLink>
                <NavLink to="#" className="text-white mx-3">
                    <i className="fab fa-google"></i>
                </NavLink>
                <NavLink to="#" className="text-white mx-3">
                    <i className="fab fa-instagram"></i>
                </NavLink>
            </div>    

        </section>

        {/* <!-- Section: Links  --> */}

        <section className="">
        <div className="container text-center md:text-left mt-5">
            {/* <!-- SubSection: Description  --> */}
            <div className="flex flex-wrap mt-3">
                <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4">
                {/* <!-- Content --> */}
                    <h6 className="uppercase font-bold">Airshine</h6>
                    <hr className="mb-4 mt-0 w-16 mx-auto bg-[#037BFF] h-0.5" />
                    <p>
                        Discover Trichy Travels, your gateway to exploring the vibrant culture and scenic beauty of Tamil Nadu. Specializing in personalized tours, we offer unique experiences.
                    </p>
                </div>
            
                {/* <!-- SubSection: Services  --> */}
                <div className="w-full md:w-1/6 lg:w-1/6 xl:w-1/6 mb-4 text-left">
                    <h6 className="uppercase font-bold">Services</h6>
                    <hr className="mb-4 mt-0 w-16 mx-auto bg-[#037BFF] h-0.5"/>
                    <p>
                        <NavLink to="#!" className="text-white">Flights</NavLink>
                    </p>
                    <p>
                        <NavLink to="#!" className="text-white">Hotels</NavLink>
                    </p>
                    <p>
                        <NavLink to="#!" className="text-white">Visa</NavLink>
                    </p>
                    <p>
                        <NavLink to="#!" className="text-white">Insurance</NavLink>
                    </p>
                    <p>
                        <NavLink to="#!" className="text-white">Domestic</NavLink>
                    </p>
                    <p>
                        <NavLink to="#!" className="text-white">International</NavLink>
                    </p>
                </div>
                
                {/* <!-- SubSection: About Us  --> */}
                <div className="w-full md:w-1/6 lg:w-1/6 xl:w-1/6 mb-4 text-left">
                    <h6 className="uppercase font-bold">About Us</h6>
                    <hr className="mb-4 mt-0 w-16 mx-auto bg-[#037BFF] h-0.5"/>
                    <p>
                        <NavLink to="{{ url_for('main.home') }}" className="text-white">Home</NavLink>
                    </p>
                    <p>
                        <NavLink to="{{ url_for('main.about') }}" className="text-white">About Us</NavLink>
                    </p>
                    <p>
                        <NavLink to="{{ url_for('main.ourstory') }}" className="text-white">Our Story</NavLink>
                    </p>
                    <p>
                        <NavLink to="{{ url_for('main.ourservices') }}" className="text-white">Our Services</NavLink>
                    </p>
                    <p>
                        <NavLink to="{{ url_for('main.testimonials') }}" className="text-white">Testimonials</NavLink>
                    </p>
                </div>

                {/* <!-- SubSection: Contact  --> */}
                <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4 text-left">
                    <h6 className="uppercase font-bold">Contact</h6>
                    <hr className="mb-4 mt-0 w-20 mx-auto bg-[#037BFF] h-0.5"/>
                    <p>
                        <NavLink to="{{ url_for('main.testimonials') }}" className="text-white">Contact Us</NavLink>
                    </p>
                    <p><i className="fas fa-home mr-3"></i> Trichy, Tamil Nadu.</p>
                    <p><i className="fas fa-envelope mr-3"></i> contact@airshineonline.com</p>
                    <p><i className="fas fa-phone mr-3"></i> +919585557593</p>
                </div>

            </div>
            </div>
        </section>

        


        </footer>

    </>
  )
}

export default Footer