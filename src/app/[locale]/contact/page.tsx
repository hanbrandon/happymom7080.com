import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Contact from '@/components/home/Contact';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-48 pb-20 bg-white">
        <div className="container mx-auto px-10">
          <span className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em] mb-6 block">Contact</span>
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tighter leading-[1.1]">
            We're here <br />to help.
          </h1>
        </div>
      </section>

      <Contact />
      
      <Footer />
    </main>
  );
}
