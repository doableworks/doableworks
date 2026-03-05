import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 font-sans">
      <div className="text-center max-w-lg mx-auto animate-fade-in">
        {/* Logo */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Image
            src="/logo.png"
            alt="Doable Works Logo"
            width={300}
            height={300}
            className="mx-auto object-contain"
          />
        </div>
        
        {/* Company Name */}
        <h1 
          className="text-5xl lg:text-6xl font-black mb-6 tracking-tight animate-fade-in-up"
          style={{ color: 'rgb(24, 113, 178)', animationDelay: '0.4s' }}
        >
          DOABLE WORKS
        </h1>
        
        {/* Coming Soon Message */}
        <h2 
          className="text-xl lg:text-2xl font-normal mb-12 tracking-wide animate-fade-in-up"
          style={{ color: 'rgb(24, 113, 178)', animationDelay: '0.6s' }}
        >
          Website Coming Soon
        </h2>
        
        {/* Contact Information */}
        <div 
          className="text-lg space-y-3 animate-fade-in-up"
          style={{ color: 'rgb(24, 113, 178)', animationDelay: '0.8s' }}
        >
          <p className="mb-6 font-medium">For any further queries contact:</p>
          <p className="font-bold text-2xl mb-6 tracking-wider">+91 99305 52989</p>
          <div className="space-y-1">
            <p className="font-semibold text-lg">
              <span className="font-medium">CEO:</span> Harsh Mehta
            </p>
            <p className="font-medium text-base">Doable Works</p>
          </div>
        </div>
      </div>
    </div>
  );
}
