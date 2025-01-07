
export default function ContactPage() {
  return (
    <div>
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              rows={4}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}