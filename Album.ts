import { Artist } from "./Artist";
import { Song } from "./Song";
export class Album {
  private _name!: string;
  private _artist!: Artist;
  private _year!: number;
  private _songs: Song[] = [];
  constructor(name: string, artist: Artist, year: number) {
    this._name = name;
    this._artist = artist;
    this._year = year;
  }
  public addTrack(song: Song) {
    this._songs.push(song);
  }
  public get songs() {
    return this._songs;
  }
  public get name() {
    return this._name;
  }
  public set name(name: string) {
    this._name = name;
  }
}
