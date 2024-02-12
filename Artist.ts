export class Artist {
  private _name!: string;
  private _albums: string[] = [];

  constructor(name: string) {
    this._name = name;
  }

  public addAlbum = (album: string) => {
    this._albums.push(album);
  };

  public get album() {
    return this._albums;
  }

  public get name() {
    return this._name;
  }
}
