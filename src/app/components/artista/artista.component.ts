import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {
  artista: any = {};
  topTracksList: any[] = [];

  loadingArtist: boolean;

  constructor(
    private router: ActivatedRoute,
    private spotify: SpotifyService
  ) {
    this.loadingArtist = true;
    this.router.params.subscribe(params => {
      console.log(params['id']);
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);

    });
  }

  getArtista(id: string) {
    this.loadingArtist = true;
    this.spotify.getArtista(id)
      .subscribe(artistaServ => {
        console.log(artistaServ);
        this.artista = artistaServ;
        this.loadingArtist = false;
      });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id)
      .subscribe(topTracks => {
        console.log(topTracks);
        this.topTracksList = topTracks;
      });
  }

}
