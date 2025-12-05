// app/contact/page.tsx
export default function ContactPage() {
  return (
    <main className="bg-black text-white min-h-screen p-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-4">Get in Touch With Us</h1>
      <p className="text-lg mb-8">
        We’re here to help hosts and travelers every step of the way.
      </p>

      {/* Contact Form */}
      <form className="bg-gray-900 p-6 rounded-lg shadow-lg space-y-4 max-w-md">
        <div>
          <label className="block mb-2 font-semibold">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Message</label>
          <textarea
            placeholder="Write your message..."
            rows={4}
            className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600"
        >
          Send Message
        </button>
      </form>

      {/* Live Chat Info */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Live Chat</h2>
        <p className="text-gray-300">
          Use the chat widget at the bottom-right corner for instant support.
        </p>
      </section>
    </main>
  );
}