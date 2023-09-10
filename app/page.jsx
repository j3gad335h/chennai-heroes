
import Info from "@/components/Info";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Players from "@/components/Players";

export default async function Home() {

  return <>
    <Navbar />
    <section className={`relative w-full h-screen mx-auto`}>
      <Hero />
      <div id="info-page" className={`relative w-full mx-auto pt-20 md:pt-24`}>
        <Info />
      </div>
    </section>

  </>;
}
