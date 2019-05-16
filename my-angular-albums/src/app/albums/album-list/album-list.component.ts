import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Album } from "../album.model";
import { AlbumService } from "../shared/album.service";

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albumsArray: Album[];

  @Output()
  albumClicked: EventEmitter<any[]> = new EventEmitter<any[]>();

  constructor( private albumService: AlbumService) { }


  ngOnInit(): void {
    this.getAlbums();
  }
  parentFunctionHandler(album) {
    // alert('Album ' + album.albumName + ' was sent from the album card component');
    this.albumClicked.emit([album.id, album.albumName]);
  }

  getAlbums() {
    this.albumService.getAlbums()
     .subscribe(
        albums => this.albumsArray = albums,
        error => console.log("Error: ", error)
      );
  }
}
