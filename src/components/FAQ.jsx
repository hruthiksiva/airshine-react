import { useEffect, useState } from 'react';
import faq from '../assets/data/faq.json'

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const faqData = faq.faq

  useEffect(() => {
    setFaqs(faqData);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="w-11/12 md:w-2/3 lg:w-1/2 bg-white rounded-lg shadow-lg p-6">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">{faq.question}</h2>
            <p className="text-gray-700">{faq.answer}</p>
            <hr className="mt-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
