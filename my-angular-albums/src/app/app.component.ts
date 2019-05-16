import { Component, OnInit } from '@angular/core';

// import { Album } from './albums/album.model';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'my-angular-albums';
    lastClickedId = '';
    lastClickedAlbum = '';

    parentFunctionHandler(inputs)  {
        this.lastClickedId = inputs[0];
        this.lastClickedAlbum = inputs[1];
    }
}
