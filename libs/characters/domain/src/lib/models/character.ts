
export interface Origin {
  name: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}

export type Status = 'Alive' | 'Dead' | 'unknown';
export type Gender = 'Female' | 'Male' | 'Genderless' | 'unknown';
export interface Character {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: Origin;
  location: Location;
  image: string; // URL
  episode: string[]; // Array di URL
  url: string; // URL
  created: string; // Data in formato stringa
}
