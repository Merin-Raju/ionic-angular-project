import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlacesService } from '../home/places.service';
import { Place } from './place.model';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  loadedPlace: Place[] = [];
  private placesSub: Subscription;
  constructor(private placeService: PlacesService) {}

  ngOnInit() {
    // this.loadedPlace = this.placeService.places;
    this.placesSub = this.placeService.places.subscribe(places => {
      this.loadedPlace = places;
    });
    console.log(this.loadedPlace,'kkk');
  }
  fetchPlace(){
    // this.loadedPlace = this.placeService.places;
  }
  ngOnDesctroy(){
    if(this.placesSub){
      this.placesSub.unsubscribe();
    }
  }
}
