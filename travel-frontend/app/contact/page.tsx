// app/page.tsx
import Hero from "../../components/Hero";
import PackageCard from "../../components/PackageCard";
import Contact from "../../components/Contact";


export default function Home() {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>

      <section id="packages">
        <PackageCard  />
      </section>

      {/* Add the ID here so the navbar knows where to jump */}
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}