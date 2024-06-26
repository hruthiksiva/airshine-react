import testimonialsData from '../assets/data/testimonials.json'

const TestimonialsPage = () => {
    const testimonials = testimonialsData.testimonials
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">What Our Clients Say</h2>
        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className={`flex items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
              <img className="w-24 h-24 rounded-full shadow-lg" src={testimonial.image} alt={`${testimonial.name} photo`} />
              <div className={`ml-6 ${index % 2 === 0 ? '' : 'mr-6'} bg-white p-6 rounded-lg shadow-md`}>
                <p className="text-lg text-gray-700">{testimonial.comment}</p>
                <p className="mt-4 text-sm font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;