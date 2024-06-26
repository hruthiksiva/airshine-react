import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start text-white bg-[#1c2331]">
        {/* <!-- Section: Social media --> */}
        <section className="flex justify-center p-4 bg-[#037BFF]">
          {/* <!-- Left --> */}
          <div className="mr-5">
            <span>Get connected with us on social networks:</span>
          </div>

          {/* <!-- Right --> */}
          <div>
            <NavLink to="https://facebook.com" className="text-white mx-3">
              <FontAwesomeIcon icon={faFacebookF} />
            </NavLink>
            <NavLink to="https://twitter.com" className="text-white mx-3">
              <FontAwesomeIcon icon={faTwitter} />
            </NavLink>
            <NavLink to="https://google.com" className="text-white mx-3">
              <FontAwesomeIcon icon={faGoogle} />
            </NavLink>
            <NavLink to="https://instagram.com" className="text-white mx-3">
              <FontAwesomeIcon icon={faInstagram} />
            </NavLink>
          </div>
        </section>

        {/* <!-- Section: Links  --> */}
        <section>
          <div className="container text-center md:text-left mt-5">
            {/* <!-- SubSection: Description  --> */}
            <div className="flex flex-wrap justify-center mt-3">
              <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4 text-center">
                {/* <!-- Content --> */}
                <h6 className="uppercase font-bold">Airshine</h6>
                <hr className="mb-4 mt-0 w-16 mx-auto bg-[#037BFF] h-0.5" />
                <p>
                  Discover Trichy Travels, your gateway to exploring the vibrant
                  culture and scenic beauty of Tamil Nadu. Specializing in
                  personalized tours, we offer unique experiences.
                </p>
              </div>

              {/* <!-- SubSection: Services  --> */}
              <div className="w-full md:w-1/6 lg:w-1/6 xl:w-1/6 mb-4 text-center">
                <h6 className="uppercase font-bold">Services</h6>
                <hr className="mb-4 mt-0 w-16 mx-auto bg-[#037BFF] h-0.5" />
                <p>
                  <NavLink to="/flights" className="text-white">
                    Flights
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/hotels" className="text-white">
                    Hotels
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/visa" className="text-white">
                    Visa
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/insurance" className="text-white">
                    Insurance
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/domestic" className="text-white">
                    Domestic
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/international" className="text-white">
                    International
                  </NavLink>
                </p>
              </div>

              {/* <!-- SubSection: About Us  --> */}
              <div className="w-full md:w-1/6 lg:w-1/6 xl:w-1/6 mb-4 text-center">
                <h6 className="uppercase font-bold">About Us</h6>
                <hr className="mb-4 mt-0 w-16 mx-auto bg-[#037BFF] h-0.5" />
                <p>
                  <NavLink to="/" className="text-white">
                    Home
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/aboutus" className="text-white">
                    About Us
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/faq" className="text-white">
                    FAQ
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/ourservices" className="text-white">
                    Our Services
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/testimonials" className="text-white">
                    Testimonials
                  </NavLink>
                </p>
              </div>

              {/* <!-- SubSection: Contact  --> */}
              <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4 text-center">
                <h6 className="uppercase font-bold">Contact</h6>
                <hr className="mb-4 mt-0 w-20 mx-auto bg-[#037BFF] h-0.5" />
                <p>
                  <NavLink to="/contactus" className="text-white">
                    Contact Us
                  </NavLink>
                </p>
                <p><i className="fas fa-home mr-3"></i> Trichy, Tamil Nadu.</p>
                <p><i className="fas fa-envelope mr-3"></i> contact@airshineonline.com</p>
                <p><i className="fas fa-phone mr-3"></i> +919585557593</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Section: Copyright --> */}
        <div className="text-center p-4 bg-[#1c2331]">
          © {new Date().getFullYear()} Airshine. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
