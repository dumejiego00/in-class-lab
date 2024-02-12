import { Artist } from "./Artist";
import { Album } from "./Album";
import { Song } from "./Song";
import { Playlist } from "./Playlist";

export class User {
  private _name!: string;
  private _password!: string;
  private _playlists: Playlist[] = [];
  private _albums: Album[] = [];

  constructor(name: string, password: string) {
    this._name = name;
    this._password = password;
  }

  public addPlaylist(playlist: Playlist) {
    this._playlists.push(playlist);
  }

  public addAlbum(album: Album) {
    this._albums.push(album);
  }

  public getSongs() {
    for (const album of this._albums) {
      for (const song of album.songs) {
        console.log(song.name);
      }
    }
  }

  public getAlbums() {
    this._albums.map((data) => console.log(data.name));
  }
  public getPlaylists() {
    this._playlists.map((data) => data.name);
  }
}
