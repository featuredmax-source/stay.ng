// components/Hero.tsx
export default function Hero() {
  return (
    <section className="text-center py-20 bg-teal-900">
      <h1 className="text-4xl font-bold mb-4">
        Find your perfect stay in Enugu – a place closer to home!
      </h1>
      <p className="text-lg mb-6">
        Browse from our list of trusted, affordable and conducive homes for the holidays.
      </p>
      <a
        href="/listings"
        className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600"
      >
        Find Your New Home
      </a>
    </section>
  );
}