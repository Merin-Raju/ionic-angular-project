import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlacesService } from '../home/places.service';
import { Place } from '../tab2/place.model';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {


  usersArray = [];
  loadedPlace: Place[];
  private placeSub: Subscription;
  constructor(private placeService: PlacesService) { }

  ngOnInit() {
    console.log('ll');
    this.usersArray.push({proPic:'https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png',
    name:'Edison',phone:3342344},
    {proPic:'https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png',
    name:'Edison',phone:3342344},
    {proPic:'https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png',
    name:'Edison',phone:3342344});
    // this.loadedPlace = this.placeService.places;
    this.placeSub = this.placeService.places.subscribe(places => {
      this.loadedPlace = places;
    });
    console.log(this.loadedPlace);
  }
ngOnDesctroy(){
  if(this.placeSub){
    this.placeSub.unsubscribe();
  }
}
}
