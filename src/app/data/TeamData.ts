// data/teamData.ts

// Definiujemy typ, aby TypeScript pilnował poprawności danych
export type TeamMember = {
  name: string;
  position: string;
  imageUrl: string;
  description: string;
};

// Eksportujemy tablicę z danymi, aby można ją było importować w innych plikach
export const teamMembers: TeamMember[] = [
  // --- Osoba 1 ---
  {
    name: 'Anna Nowak',
    position: 'Prezes Fundacji',
    imageUrl: '/team/anna-nowak.jpg',
    description: 'Anna jest założycielką fundacji z ponad 10-letnim doświadczeniem w sektorze non-profit. Jej pasją jest tworzenie projektów, które realnie zmieniają życie społeczności.',
  },
  // --- Osoba 2 ---
  {
    name: 'Jan Kowalski',
    position: 'Wiceprezes ds. Finansów',
    imageUrl: '/team/jan-kowalski.jpg',
    description: 'Jan dba o stabilność finansową organizacji. Jest ekspertem w dziedzinie pozyskiwania funduszy i zrównoważonego rozwoju.',
  },
  // --- Osoba 3 ---
  {
    name: 'Maria Wiśniewska',
    position: 'Dyrektor ds. Projektów',
    imageUrl: '/team/maria-wisniewska.jpg',
    description: 'Maria koordynuje wszystkie nasze inicjatywy. Dba o to, by każdy projekt był realizowany z najwyższą starannością i przynosił oczekiwane rezultaty.',
  },
  // --- Osoba 4 ---
  {
    name: 'Anna Mandryka',
    position: 'Prezes Fundacji',
    imageUrl: '/team/anna-nowak.jpg',
    description: 'Anna jest założycielką fundacji z ponad 10-letnim doświadczeniem w sektorze non-profit. Jej pasją jest tworzenie projektów, które realnie zmieniają życie społeczności.',
  },
  // --- Osoba 5 ---
  {
    name: 'Anna Mandryka',
    position: 'Prezes Fundacji',
    imageUrl: '/team/anna-nowak.jpg',
    description: 'Anna jest założycielką fundacji z ponad 10-letnim doświadczeniem w sektorze non-profit. Jej pasją jest tworzenie projektów, które realnie zmieniają życie społeczności.',
  },
  // --- Osoba 6 ---
  {
    name: 'Anna Mandryka',
    position: 'Prezes Fundacji',
    imageUrl: '/team/anna-nowak.jpg',
    description: 'Anna jest założycielką fundacji z ponad 10-letnim doświadczeniem w sektorze non-profit. Jej pasją jest tworzenie projektów, które realnie zmieniają życie społeczności.',
  },
  // --- Osoba 7 ---
  {
    name: 'Anna Mandryka',
    position: 'Prezes Fundacji',
    imageUrl: '/team/anna-nowak.jpg',
    description: 'Anna jest założycielką fundacji z ponad 10-letnim doświadczeniem w sektorze non-profit. Jej pasją jest tworzenie projektów, które realnie zmieniają życie społeczności.',
  },
  // --- Osoba 8 ---
  {
    name: 'Anna Mandryka',
    position: 'Prezes Fundacji',
    imageUrl: '/team/anna-nowak.jpg',
    description: 'Anna jest założycielką fundacji z ponad 10-letnim doświadczeniem w sektorze non-profit. Jej pasją jest tworzenie projektów, które realnie zmieniają życie społeczności.',
  },
  // --- Osoba 9 ---
  {
    name: 'Anna Mandryka',
    position: 'Prezes Fundacji',
    imageUrl: '/team/anna-nowak.jpg',
    description: 'Anna jest założycielką fundacji z ponad 10-letnim doświadczeniem w sektorze non-profit. Jej pasją jest tworzenie projektów, które realnie zmieniają życie społeczności.',
  },
  // --- Osoba 10 ---
  {
    name: 'Anna Mandryka',
    position: 'Prezes Fundacji',
    imageUrl: '/team/anna-nowak.jpg',
    description: 'Anna jest założycielką fundacji z ponad 10-letnim doświadczeniem w sektorze non-profit. Jej pasją jest tworzenie projektów, które realnie zmieniają życie społeczności.',
  },
  // --- Osoba 11 ---
  {
    name: 'Anna Mandryka',
    position: 'Prezes Fundacji',
    imageUrl: '/team/anna-nowak.jpg',
    description: 'Anna jest założycielką fundacji z ponad 10-letnim doświadczeniem w sektorze non-profit. Jej pasją jest tworzenie projektów, które realnie zmieniają życie społeczności.',
  },

  // ...dodaj tutaj tyle osób, ile potrzebujesz
];