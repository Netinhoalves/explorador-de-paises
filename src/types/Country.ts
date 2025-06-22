export interface Country {
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string[];
  flags: {
    svg: string;
  };
  // Usaremos o cca3 para criar os links únicos para cada país
  cca3: string;
}
