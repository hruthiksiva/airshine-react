import OurServices from '../components/OurServices';

const AboutUsPage = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
          <div className="flex justify-center">
            <img src="https://via.placeholder.com/1000x500" className="w-full md:w-3/4 lg:w-1/2 rounded-lg" alt="Our Team" />
          </div>
          <div className="mt-6 space-y-4 text-gray-700">
            <p>Trichy Airshine Tours and Travels (P) Ltd, established in 1995 by Managing Director Mr. G. Mohan and Executive Director PMJF Lion G. Ravichandran, has grown from humble beginnings in Trichy to become a leading travel agency. Despite being newcomers to the industry, the founders embraced the challenge and developed tailor-made solutions to meet diverse customer needs. Their focus on exceptional customer experience allowed them to create a niche market and build a loyal customer base, leading to their expansion to Chennai within a year.</p>
            <p>With over 30 years of industry expertise, Trichy Airshine is now a veteran in the travel sector. We are proud to be accredited by the International Air Transport Association (IATA) and the Travel Agents Association of India (TAAI).</p>
            <p>Our success is built on core principles: dynamic leadership, creativity, integrity, vision for the future, and an unwavering commitment to excellence. These values have fostered a healthy work culture within Trichy Airshine and facilitated positive customer interactions. We are proud to have played a pivotal role in the evolution of the tourism industry in our state.</p>
            <p>Airshine Online is the digital extension of our services, bringing the convenience of a one-stop travel catalogue to your fingertips. We have embraced the fast-paced digital age, ensuring our services are easily accessible from any device, anywhere in the world.</p>
            <p>At Airshine, we are always delighted to be “Your Trustable Travel Partner” in all your adventures.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Vision</h2>
              <p>We strive to be a Leading Travel Company that offers a One Stop Solution to all the travel needs of our clients. Airshine aspires to make the world accessible to everyone, ensuring quality and client satisfaction in every journey.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Mission</h2>
              <p>Our aim is to create unforgettable journeys by offering personalised, innovative travel solutions tailored to your unique preferences and needs. Our dedicated team of travel experts are here to guide and support you every step of the way, making us your trusted travel partner in every adventure. At Trichy Airshine Tours & Travels, we believe in the joy of discovery and the power of travel to connect us all.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">MANAGING DIRECTOR’S DESK</h2>
              <img src="path/to/managing-director.jpg" alt="Managing Director" className="w-full rounded-lg shadow-sm mb-4" />
              <p>With decades of experience comes exceptional judgement. At Trichy Airshine Tours & Travels, we understand the luxury and comfort you deserve while travelling to your dream destinations. Customer satisfaction is what drives us, and we excel in providing tailor-made tour packages that align perfectly with your preferences. We offer a wide range of tour packages which are affordable and attractive, drawing on our extensive experience and deep understanding of client needs. Each package can be customised to suit your specific desires. Specialising in both domestic and international outbound tours, we have built a reputation for client loyalty that spans generations.</p>
              <p>“Life is about the adventures you take and the memories you make. So travel often and live life with open eyes and an open heart.” Unless you travel with us, you can never know how much you can explore.</p>
              <p><strong>G. Mohan<br />Managing Director</strong></p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">EXECUTIVE DIRECTOR’S DESK</h2>
              <img src="path/to/executive-director.jpg" alt="Executive Director" className="w-full rounded-lg shadow-sm mb-4" />
              <p>“Excellence is a result of high intention, sincere effort, and intelligent execution.” With our humble beginning in 1995, after 3 decades of experience in the tourism industry, we at Trichy Airshine Tours & Travels prioritise our customers preferences and use a personalized approach to ensure every trip is perfect. Accessibility and Reliability are our promises to you, with quality at the core of everything we do.</p>
              <p>We offer a diverse range of Domestic and International Outbound tour packages tailored to meet your needs. As a One Stop Shop for all your travel requirements, our expert team is dedicated to making your travel experience seamless and memorable.</p>
              <p>Thank you for choosing Trichy Airshine Tours & Travels. We look forward to being your trusted travel partner on all of your adventures.</p>
              <p><strong>PMJF Lion G Ravichandran<br />Executive Director</strong></p>
            </div>
          </div>
        </div>
      </div>
      <OurServices />
    </div>
  );
};

export default AboutUsPage;
