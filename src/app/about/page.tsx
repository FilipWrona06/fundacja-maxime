// app/about/page.tsx
import Image from 'next/image';

const AboutPage = () => {
  return (
      <div className="container mx-auto px-6 py-16 md:py-24">
        
        {/* --- SEKCJA TYTUŁOWA Z MISJĄ --- */}
        <section className="text-center mb-20">
          <h1 className="text-4xl lg:text-5xl font-montserrat font-bold mb-4">
            Nasza Misja
          </h1>
          <p className="mt-6 text-lg lg:text-xl font-montserrat max-w-3xl mx-auto leading-relaxed">
            W Fundacji Maxime wierzymy, że każdy zasługuje na równe szanse i wsparcie w realizacji swojego potencjału. Naszą misją jest tworzenie inspirującej przestrzeni dla rozwoju, edukacji i integracji społecznej, gdzie pasja spotyka się z działaniem.
          </p>
          <div className="w-3/4 h-0.5 bg-philippineSilver mx-auto mt-8"></div>
        </section>

        {/* --- SEKCJE Z TREŚCIĄ (NAPRZEMIENNE) --- */}
        <div className="space-y-20">

          {/* Sekcja 1 */}
          <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="w-full md:w-5/12">
              {/* POPRAWIONY KOD OBRAZKA */}
              <div className="relative aspect-square overflow-hidden rounded-3xl border-2 border-philippineSilver">
                <Image 
                  src="/about/2022.jpg" // Poprawna ścieżka (bez /public)
                  alt="Wydarzenia fundacji z roku 2022" // Tekst alternatywny
                  fill // Wypełnia kontener
                  className="object-cover" // Zachowuje proporcje
                />
              </div>
            </div>
            <div className="w-full md:w-7/12 text-center md:text-left">
              <h2 className="text-3xl font-montserrat font-bold mb-4">2022 - Początki i pierwsze sukcesy</h2>
              <p className="text-lg font-montserrat leading-relaxed">
                Wierzymy, że kluczem do lepszej przyszłości jest dostęp do wiedzy. Organizujemy warsztaty, szkolenia i spotkania, które inspirują do działania i poszerzania horyzontów. Każdy projekt tworzymy z pasją i zaangażowaniem.
              </p>
            </div>
          </section>

          {/* Sekcja 2 */}
          <section className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
            <div className="w-full md:w-5/12">
              <div className="relative aspect-square overflow-hidden rounded-3xl border-2 border-philippineSilver">
                <Image 
                  src="/about/2023.png" // Podmień na swoją ścieżkę
                  alt="Wydarzenia fundacji z roku 2023"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-7/12 text-center md:text-left">
              <h2 className="text-3xl font-montserrat font-bold mb-4">2023 - Rozwój społeczności</h2>
              <p className="text-lg font-montserrat leading-relaxed">
                Nasza siła tkwi w społeczności. Budujemy mosty między ludźmi, tworząc przestrzeń do wzajemnej pomocy i integracji. Działamy lokalnie, myśląc globalnie, aby nasze inicjatywy miały realny i trwały wpływ na otoczenie.
              </p>
            </div>
          </section>

          {/* Sekcja 3 */}
          <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
             <div className="w-full md:w-5/12">
              <div className="relative aspect-square overflow-hidden rounded-3xl border-2 border-philippineSilver">
                <Image 
                  src="/about/2024.jpeg" // Podmień na swoją ścieżkę
                  alt="Wydarzenia fundacji z roku 2024"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-7/12 text-center md:text-left">
              <h2 className="text-3xl font-montserrat font-bold mb-4">2024 - Nowe horyzonty</h2>
              <p className="text-lg font-montserrat leading-relaxed">
                Wierzymy, że kluczem do lepszej przyszłości jest dostęp do wiedzy. Organizujemy warsztaty, szkolenia i spotkania, które inspirują do działania i poszerzania horyzontów. Każdy projekt tworzymy z pasją i zaangażowaniem.
              </p>
            </div>
          </section>

          {/* Sekcja 4 */}
          <section className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
            <div className="w-full md:w-5/12">
              <div className="relative aspect-square overflow-hidden rounded-3xl border-2 border-philippineSilver">
                <Image 
                  src="/about/2025.jpg" // Podmień na swoją ścieżkę
                  alt="Wydarzenia fundacji z roku 2025"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-7/12 text-center md:text-left">
              <h2 className="text-3xl font-montserrat font-bold mb-4">2025 - Patrzymy w przyszłość</h2>
              <p className="text-lg font-montserrat leading-relaxed">
                Nasza siła tkwi w społeczności. Budujemy mosty między ludźmi, tworząc przestrzeń do wzajemnej pomocy i integracji. Działamy lokalnie, myśląc globalnie, aby nasze inicjatywy miały realny i trwały wpływ na otoczenie.
              </p>
            </div>
          </section>
        </div>
    </div>
  );
};

export default AboutPage;