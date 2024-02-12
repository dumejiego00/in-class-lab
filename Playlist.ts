import { Album } from "./Album";
import { Song } from "./Song";
export class Playlist {
  private _name!: string;
  private _songs: Song[] = [];

  constructor(name: string) {
    this._name = name;
  }

  public addAlbum(album: Album) {
    for (const song of album.songs) {
      this._songs.push(song);
    }
  }

  public get name() {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public getSongs() {
    for (const song of this._songs) {
      console.log(song.name);
    }
  }
}
