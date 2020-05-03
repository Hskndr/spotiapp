import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient
  ) {
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBUc94ERz4bQmHPeeD9uf4r5mp4qeLaPipUcOfTMBvLYPjZISWQ3QqdT5TUjGF0CnaSEbdtu5V0j5Ya4d0'
    });

    return this.http.get(url, {headers});
  }


  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map(data => {
        return data['albums'].items;
      }));

    /*return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .pipe(map(data => {
        return data['albums'].items;
      }));*/
  }

  getArtistas(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data => {
        return data['artists'].items;
      }));

    /* return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers})
       .pipe(map(data => {
         return data['artists'].items;
       }));*/

  }

  getArtista(id: string) {

    return this.getQuery(`artists/${id}`);
    //.pipe(map(data => data['artists'].items));

  }

  getTopTracks(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map(data => data['tracks']));

  }

}
