// components/Hero.tsx
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      {/* Wideo w tle */}
      <video
        autoPlay
        loop
        muted
        playsInline // Ważne dla urządzeń mobilnych
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        {/* Umieść wideo w folderze /public */}
        <source src="/wideo_maxime.mp4" type="video/mp4" />
        Twoja przeglądarka nie obsługuje wideo.
      </video>

      {/* Ciemna nakładka dla czytelności tekstu */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/75 z-20"></div>

      {/* Treść */}
      <div className="relative z-30 px-4 text-white">
        <h1 className="text-5xl md:text-7xl p-2.5 font-youngest tracking-wide mb-4">
          Z pasji do muzyki
        </h1>
        <p className="text-lg md:text-2xl font-montserrat font-bold text-gray-200 mb-8">
          Poznaj historię i brzmienie naszej orkiestry.
        </p>
        <Link 
          href="/wydarzenia" 
          className="bg-transparent border-2 border-white rounded-full px-8 py-3 text-sm font-montserrat tracking-wider
                     hover:bg-white hover:text-raisinBlack transition-all duration-250"
        >
          Zobacz nadchodzące koncerty
        </Link>
      </div>
    </section>
  );
};

export default Hero;