import { Artist } from "./Artist";
import { Album } from "./Album";
import { Song } from "./Song";
import { Playlist } from "./Playlist";

let artist = new Artist("Muse");
let album = new Album("MK Ultra", artist, 2009);
let song = new Song("Madness");
let song2 = new Song("New Born");

album.addTrack(song);
album.addTrack(song2);

let playlist = new Playlist("Fun songs");

playlist.addAlbum(album);
playlist.getSongs();
