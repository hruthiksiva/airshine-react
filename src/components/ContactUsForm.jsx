
const ContactUsForm = () => {
  return (
    <div className="container mx-auto mt-10 px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
            <form action="#" method="POST">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                    <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email (optional)</label>
                    <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="comments" className="block text-gray-700 font-bold mb-2">Comments</label>
                    <textarea id="comments" name="comments" rows="5" className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ContactUsForm