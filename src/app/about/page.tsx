// app/about/page.tsx

import Image from 'next/image';
import TeamSlider from '../components/TeamSlider'; // Użyj poprawnej ścieżki! Może być '../components/TeamSlider'

import { teamMembers } from '../data/TeamData'; // Upewnij się, że ścieżka jest poprawna!

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
          <div className="w-75% h-0.5 bg-philippineSilver mx-auto mt-8"></div>
        </section>

        {/* --- SEKCJE Z TREŚCIĄ (NAPRZEMIENNE) --- */}
        <div className="space-y-20">
          {/* Sekcja 1 */}
          <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="w-full md:w-5/12">
              <div className="aspect-square border-2 border-philippineSilver rounded-3xl flex items-center justify-center">
                <span>Zdjęcie</span>
              </div>
            </div>
            <div className="w-full md:w-7/12 text-center md:text-left">
              <h2 className="text-3xl font-montserrat font-bold mb-4">Edukacja i Rozwój</h2>
              <p className="text-lg font-montserrat leading-relaxed">
                Wierzymy, że kluczem do lepszej przyszłości jest dostęp do wiedzy. Organizujemy warsztaty, szkolenia i spotkania, które inspirują do działania i poszerzania horyzontów. Każdy projekt tworzymy z pasją i zaangażowaniem.
              </p>
            </div>
          </section>
          {/* Sekcja 2 */}
          <section className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
            <div className="w-full md:w-5/12">
              <div className="aspect-square border-2 border-philippineSilver rounded-3xl flex items-center justify-center">
                <span>Zdjęcie</span>
              </div>
            </div>
            <div className="w-full md:w-7/12 text-center md:text-left">
              <h2 className="text-3xl font-montserrat font-bold mb-4">Wsparcie Społeczności</h2>
              <p className="text-lg font-montserrat leading-relaxed">
                Nasza siła tkwi w społeczności. Budujemy mosty między ludźmi, tworząc przestrzeń do wzajemnej pomocy i integracji. Działamy lokalnie, myśląc globalnie, aby nasze inicjatywy miały realny i trwały wpływ na otoczenie.
              </p>
            </div>
          </section>
        </div>

        {/* --- ZAKTUALIZOWANA SEKCJA: ZESPÓŁ --- */}
      <section className="text-center mt-24">
        <h2 className="text-4xl font-montserrat font-bold mb-4">
          Nasz Zespół
        </h2>
        <div className="w-75% h-0.5 bg-philippineSilver mx-auto"></div>

        <div className="mt-12">
          {/* Komponent slidera teraz pobiera dane z importu */}
          <TeamSlider members={teamMembers} />
        </div>
      </section>

    </div>
  );
};

export default AboutPage;