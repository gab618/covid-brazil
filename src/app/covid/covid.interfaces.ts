export interface InfectedByRegion {
  state: string;
  count: number;
}

export interface DeceasedByRegion {
  state: string;
  count: number;
}

export interface Covid {
  infectedByRegion: InfectedByRegion[];
  deceasedByRegion: DeceasedByRegion[];
}
