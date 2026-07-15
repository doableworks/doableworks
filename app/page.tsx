import Image from "next/image";
import Link from "next/link";
import TickerCarousel from "@/components/pagespecific/homepage/TickerCarousel";

export default function Home() {
  return (
<main className="flex min-h-screen flex-col items-center px-16 py-10 bg-[#002E79]">
  <img src="/images/homepage/bg.png" alt="Background" className="absolute inset-0 w-full h-screen object-cover mix-blend-multiply" />
  <img src="/images/homepage/hand.png" alt="Background" className="absolute bottom-0 right-1/6 w-auto h-[90vh] object-cover" />
  <div className="w-full justify-between items-center gap-4 lg:gap-8 z-10 flex flex-col lg:flex-row">
          <img src="/images/logo.svg" alt="Doable" className="w-auto h-10" />
          <div className="flex items-center justify-center gap-4">
                <img src="/images/icons/phone.svg" alt="Doable" className="w-auto h-6" />
                <Link href="tel:+919930552989" className="text-white text-lg font-inter hover:underline hover:underline-offset-4">
                  +91 99305 52989
                </Link>
      
                </div>
  </div>
    <div className="flex flex-col items-start justify-start w-full h-full mt-[16vh]">
      <div className="flex flex-col items-start justify-center gap-2">
        <h1 className="lg:text-[6rem] font-semibold text-white leading-none tracking-none">
          Everything is <br/> Doable
        </h1>
        <h2 className="font-inter font-light text-white text-3xl">
          Our website is building
        </h2>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 mt-10">
          <button className="bg-[#9AD3FF] font-medium py-2 px-6 rounded-full text-[#002E79] flex items-center justify-center gap-2 lg:w-36">
            <img src="/images/icons/download.svg" alt="Download" className="w-6 h-6" />
            Portfolio
          </button>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-[6px] py-2 px-6 rounded-full text-white text-[15px] whitespace-nowrap lg:w-36"
            style={{ background: "linear-gradient(102.18deg, #FF65E0 2.98%, #FF3C00 55.65%, #FFAF40 84.20%)" }}
          >
            <img src="/images/icons/instagram.svg" alt="Instagram" className="w-6 h-6 shrink-0" />
            Follow
          </a>
        </div>
      </div>
  </div>
    <div className="absolute bottom-[8vh] left-0 w-full z-10">
      <TickerCarousel />
  </div>
</main>
  );
}
