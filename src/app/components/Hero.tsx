import Link from 'next/link';

const Hero = () => {
  return (

    // Główny kontener sekcji. `relative` jest kluczowe, aby pozycjonować elementy-dzieci (wideo, nakładka) względem tego kontenera.
    // `h-screen` sprawia, że sekcja zajmuje całą wysokość ekranu.
    <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      
      {/* Wideo w tle           */}
      {/* `absolute` i `z-10` umieszczają wideo pod innymi warstwami. */}
      {/* Kombinacja `min-w-full`, `min-h-full`, `top-1/2`, `left-1/2` i transformacji centruje wideo i zapewnia, że zawsze pokrywa cały kontener, nawet przy zmianie proporcji okna. */}

      {/* Atrybuty: */}
      {/* `autoPlay` - wideo startuje automatycznie. */}
      {/* `loop` - wideo jest zapętlone. */}
      {/* `muted` - wideo jest wyciszone (konieczne dla `autoPlay` w wielu przeglądarkach). */}
      {/* `playsInline` - zapobiega przejściu wideo w tryb pełnoekranowy na urządzeniach mobilnych (iOS). */}
      <video autoPlay loop muted playsInline className="absolute z-10 w-auto min-w-full min-h-full max-w-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover">
        <source src="/wideo_maxime.mp4" type="video/mp4" />
        {/* Ten tekst wyświetli się, jeśli przeglądarka nie wspiera tagu <video>. */}
        Twoja przeglądarka nie obsługuje wideo.
      </video>

      {/* Ciemna nakładka na wideo dla poprawy czytelności tekstu */}
      {/* `absolute` pozycjonuje nakładkę wewnątrz kontenera `section`. */}
      {/* `z-20` umieszcza ją nad wideo (`z-10`), ale pod treścią (`z-30`). */}
      {/* `bg-black/75` tworzy półprzezroczyste czarne tło (75% krycia). */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/75 z-20" />

      {/* Treść na wideo */}
      {/* `relative` i `z-30` zapewniają, że treść jest na samej górze, ponad nakładką i wideo. */}
      <div className="relative z-30 px-4">
        <h1 className="text-5xl md:text-7xl p-2.5 font-youngest tracking-wide mb-4">
          Z pasji do muzyki
        </h1>
        <p className="text-lg md:text-2xl font-montserrat font-bold mb-8">
          Poznaj historię i brzmienie naszej orkiestry.
        </p>
        {/* Przycisk CTA (Call to Action) */}
        <Link href="/wydarzenia" className="bg-transparent border-2 border-philippineSilver rounded-full px-8 py-3 text-sm font-montserrat font-bold tracking-wider hover:bg-philippineSilver hover:text-raisinBlack transition-all duration-250">
          Zobacz nadchodzące koncerty
        </Link>
      </div>
    </section>
  );
};

export default Hero;