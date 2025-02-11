import Header from "@/components/layout/Header";
import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/about/About";
import Services from "@/components/sections/services/Services";
import Process from "@/components/sections/process/Process";
import Footer from "@/components/layout/Footer";
import Works from "@/app/works/Works";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Works />
        <About />
        <Services />
        <Process />
      </main>
      <Footer />
    </div>
  );
}
