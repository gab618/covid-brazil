export interface InfectedByRegion {
  state: string;
  count: number;
}

export interface DeceasedByRegion {
  state: string;
  count: number;
}

export interface Covid {
  version: number;
  sourceUrl: string;
  country: string;
  lastUpdatedAtApify: Date;
  historyData: string;
  readMe: string;
  tested: string;
  recovered: number;
  lastUpdatedAtSource: Date;
  infected: number;
  deceased: number;
  infectedByRegion: InfectedByRegion[];
  deceasedByRegion: DeceasedByRegion[];
}
