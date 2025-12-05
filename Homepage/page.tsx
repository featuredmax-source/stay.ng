// app/page.tsx
import Hero from "@/components/Hero";
import ListingsPreview from "@/components/ListingsPreview";
import HostCTA from "@/components/HostCTA";
import HowItWorks from "@/components/HowItWorks";

export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Listings Preview */}
      <ListingsPreview />

      {/* Host CTA Section */}
      <HostCTA />

      {/* How It Works Section */}
      <HowItWorks />
    </main>
  );
}