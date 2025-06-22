export interface Country {
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  subregion: string; // Novo
  capital: string[];
  flags: {
    svg: string;
  };
  cca3: string;
  // Novos campos
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [key: string]: string;
  };
}
