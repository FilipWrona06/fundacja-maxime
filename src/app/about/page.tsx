// app/about/page.tsx

import Image from 'next/image';

// DANE ZARZĄDU - w przyszłości możesz je pobierać z bazy danych
const managementTeam = [
  {
    name: 'Anna Nowak',
    position: 'Prezes Fundacji',
    imageUrl: '/placeholder.jpg', // Ścieżka do zdjęcia
    description: 'Anna jest założycielką fundacji z ponad 10-letnim doświadczeniem w sektorze non-profit. Jej pasją jest tworzenie projektów, które realnie zmieniają życie społeczności.',
  },
  {
    name: 'Jan Kowalski',
    position: 'Wiceprezes ds. Finansów',
    imageUrl: '/placeholder.jpg',
    description: 'Jan dba o stabilność finansową organizacji. Jest ekspertem w dziedzinie pozyskiwania funduszy i zrównoważonego rozwoju.',
  },
  {
    name: 'Maria Wiśniewska',
    position: 'Dyrektor ds. Projektów',
    imageUrl: '/placeholder.jpg',
    description: 'Maria koordynuje wszystkie nasze inicjatywy. Dba o to, by każdy projekt był realizowany z najwyższą starannością i przynosił oczekiwane rezultaty.',
  },
  {
    name: 'Piotr Zieliński',
    position: 'Specjalista ds. Komunikacji',
    imageUrl: '/placeholder.jpg',
    description: 'Piotr odpowiada za kontakt ze światem. To dzięki niemu nasza misja dociera do szerokiego grona odbiorców i wolontariuszy.',
  },
];

const AboutPage = () => {
  return (
    <div className="bg-raisinBlack">
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

        {/* --- NOWA SEKCJA: ZARZĄD --- */}
        <section className="text-center mt-24">
          <h2 className="text-4xl font-montserrat font-bold mb-4">
            Nasz Zarząd
          </h2>
          <div className="w-75% h-0.5 bg-philippineSilver mx-auto"></div>

          {/* Grid z kartami członków zarządu */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {managementTeam.map((member) => (
              <div
                key={member.name}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
              >
                {/* Tło (obrazek) - powiększa się po najechaniu */}
                <div className="w-full h-full border-2 border-philippineSilver transition-transform duration-250 ease-in-out group-hover:scale-110 flex items-center justify-center">
                  {/* Użyj komponentu Image, gdy będziesz miał zdjęcia */}
                  {/* <Image src={member.imageUrl} alt={member.name} layout="fill" objectFit="cover" className="..." /> */}
                   <span>Zdjęcie</span>
                </div>

                {/* Nakładka z imieniem i pozycją (widoczna domyślnie) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 to-transparent transition-opacity duration-250 group-hover:opacity-0">
                  <h3 className="font-montserrat font-bold text-lg">{member.name}</h3>
                  <p className="text-sm">{member.position}</p>
                </div>

                {/* Nakładka z opisem (pojawia się po najechaniu) */}
                <div className="absolute inset-0 flex items-center justify-center p-6 bg-raisinBlack/90 text-center opacity-0 transition-opacity duration-250 ease-in-out group-hover:opacity-100">
                  <p className="text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;