import Image from "next/image";
import Link from "next/link";
import TickerCarousel from "@/components/pagespecific/homepage/TickerCarousel";
import Fade from "@/animations/Fade";
import TransitionVertical from "@/animations/TransitionVertical";

export default function Home() {
  return (
<main className="flex min-h-screen flex-col items-center p-6 lg:px-16 lg:py-10 bg-[#002E79]">
  <img src="/images/homepage/bg.png" alt="Background" className="absolute inset-0 w-full h-screen object-cover mix-blend-multiply z-0" />
  
  <TransitionVertical direction="down" duration={1.5} className="absolute top-0 left-0 w-full h-full z-0 ">
  <img src="/images/homepage/hand.png" alt="Background" className="absolute bottom-0 left-1/2 -translate-x-1/2 sm:right-[12px] sm:-translate-x-0 lg:right-1/6 w-auto h-[60vh] lg:h-[90vh] object-cover" />
  </TransitionVertical>
  <TransitionVertical direction="up" duration={1.5} className="w-full justify-between items-center gap-4 lg:gap-8 z-10 flex flex-row">
          <img src="/images/logo.svg" alt="Doable" className="w-auto h-6 lg:h-10" />
          <div className="flex items-center justify-center gap-4">
                <img src="/images/icons/phone.svg" alt="Doable" className="w-auto h-6" />
                <Link href="tel:+919930552989" className="text-white text-xs lg:text-lg font-inter hover:underline hover:underline-offset-4">
                  +91 99305 52989
                </Link>
      
                </div>
  </TransitionVertical>
    <div className="flex flex-col items-center lg:items-start justify-start w-full h-full mt-[16vh] z-10">
      <div className="flex flex-col items-center lg:items-start justify-center gap-2">
        <h1 className="hidden lg:block lg:text-[6rem] font-semibold text-white leading-none tracking-none">
          <Fade>
          Everything is <br/> Doable
          </Fade>
        </h1>
                <h1 className="lg:hidden block text-3xl lg:text-[6rem] font-semibold text-white leading-none tracking-none">
          <Fade>
          Everything is Doable
          </Fade>
        </h1>
        <h2 className="font-inter font-light text-white text-xl lg:text-3xl">
          <Fade>
          Our website is building
          </Fade>
        </h2>
        <div className="flex flex-row items-start lg:items-center gap-4 mt-10">
          <TransitionVertical direction="down" duration={1.5}>
          <a href="/DoableWorksCredDeck.pptx" download rel="noopener noreferrer" className="group bg-[#9AD3FF] font-medium py-2 px-6 rounded-full text-[#002E79] flex items-center justify-center gap-2 w-36">
            <img src="/images/icons/download.svg" alt="Download" className="w-6 h-6 transition-transform duration-200 group-hover:-translate-x-1" />
            <span className="transition-all duration-200 group-hover:font-bold">Portfolio</span>
          </a>
          </TransitionVertical>
          <TransitionVertical direction="down" duration={1.5}>
          <a
            href="https://www.instagram.com/doableworks/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-[6px] py-2 px-6 rounded-full text-white text-[15px] whitespace-nowrap w-36"
            style={{ background: "linear-gradient(102.18deg, #FF65E0 2.98%, #FF3C00 55.65%, #FFAF40 84.20%)" }}
          >
            <img src="/images/icons/instagram.svg" alt="Instagram" className="w-6 h-6 shrink-0 transition-transform duration-200 group-hover:-translate-x-1" />
            <span className="transition-all duration-200 group-hover:font-bold">Follow</span>
          </a>
          </TransitionVertical>
        </div>
      </div>
  </div>
    <Fade className="absolute bottom-[10vh] lg:bottom-[8vh] left-0 w-full z-10">
      <TickerCarousel />
  </Fade>
</main>
  );
}
