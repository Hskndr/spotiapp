import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;

  error: boolean;
  mensajeError: string;

  constructor(
    private spotify: SpotifyService
  ) {
    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases().subscribe(
      (data: any) => {
        console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;
      },
      (errorServ) => {
        this.loading = false;
        this.error = true;
        console.log(errorServ);
        console.log(errorServ.error.error.message);
        this.mensajeError = errorServ.error.error.message;
      }
    );
  }


}
