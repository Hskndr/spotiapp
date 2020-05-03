import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() items: any[] = [];

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  verArtista(item: any) {
    console.log(item);
    let artistaId;
    if (item.type === 'artist') {
      console.log('Soy artista');
      artistaId = item.id;

    } else {
      console.log('No soy artista');
      artistaId = item.artists[0].id;

    }
    console.log(artistaId);

    this.router.navigate(['/artist', artistaId]);
  }
}
