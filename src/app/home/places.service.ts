/* eslint no-underscore-dangle: 0 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Place } from '../tab2/place.model';
import { take, map, delay, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places = new BehaviorSubject<Place[]>([
    new Place(
      '1',
      'Taj Mahal',
      'Seven wonders in the world',
      'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg',
      232
    ),
    new Place(
      '2',
      'Nayagra',
      'wer',
      'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg',
      232
    ),
    new Place(
      '3',
      'India',
      'ewr',
      'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg',
      232
    ),
  ]);

  get places() {
    return this._places.asObservable();
  }
  constructor(private http: HttpClient) {}

  getPlace(id: string) {
    return this.places.pipe(
      take(1),
      map((places) => ({ ...places.find((p) => p.id === id) }))
    );
  }

  addPlace() {
    console.log('ll');
    const dummyData = { name: 'place3', description: 'eewr' };
    return this.http
      .post<{ name: string }>(
        'https://ionic-angular-29efc-default-rtdb.firebaseio.com/add_places.json',
        dummyData
      )
      .subscribe((des) => {
        console.log(des.name);
      });
    // .pipe(tap(res => {
    //   console.log(res);
    // },error => {
    //   console.log(error);
    // }));
  }
  fetchAll() {
    return this.http
      .get(
        'https://ionic-angular-29efc-default-rtdb.firebaseio.com/add_places.json'
      )
      .subscribe((des) => {
        console.log(des);
      });
  }
  getPlaceserver() {
    return this.http
      .get(
        `https://ionic-angular-29efc-default-rtdb.firebaseio.com/add_places/-MgOsnyYgqoCdSwJFdpc.json`
      )
      .subscribe((des) => {
        console.log('fetchdata', des);
      });
  }

  addPlaceOb(d: any) {
    const newPlace = new Place(d.id, d.title, d.desc, d.img, d.price);
    console.log(newPlace);
   return this.places.pipe(
     take(1),
     delay(1000),
     tap(places => {
       this._places.next(places.concat(newPlace));
     })
   );
  }
}
