import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor(private http: HttpClient) {
    console.log('spotify service listo');
   }

   getQuery ( query: string ){
     const url = `https://api.spotify.com/v1/${query}`;
     const headers = new HttpHeaders({
      Authorization: 'Bearer BQCc2LbEimALWxYSz6AxB0yaAZDtkqu9bDESIByod9mifUx3eDx__EgRBwV2uApnYG9lsrGFAUUKXWGU_EA'
    });
     return this.http.get(url, {headers});
   }

   getNewReleases(){
       return this.getQuery('browse/new-releases?')
     // tslint:disable-next-line: no-string-literal
     .pipe( map( data => data['albums'].items));
   }

   getArtistas( termino: string) {
       return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    // tslint:disable-next-line: no-string-literal
    .pipe( map( data => data['artists'].items));
    }

    getArtista( id: string) {
      return this.getQuery(`artists/${id}`)
   // tslint:disable-next-line: no-string-literal
  //  .pipe( map( data => data['artists'].items));
   }

   getTopTracks( id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
 // tslint:disable-next-line: no-string-literal
     .pipe( map( data => data['tracks']));
 }
 }

