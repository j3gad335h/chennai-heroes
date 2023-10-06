
import Info from "@/components/Info";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Players from "@/components/Players";

export default async function Home() {

  return <>
    <section className={`relative w-full h-screen mx-auto`}>
      <Hero />
      <div className={`relative w-full mx-auto`}>
        <Info />
      </div>
    </section>

  </>;
}
