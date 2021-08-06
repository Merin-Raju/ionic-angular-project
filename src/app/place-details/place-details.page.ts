import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { PlacesService } from '../home/places.service';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.page.html',
  styleUrls: ['./place-details.page.scss'],
})
export class PlaceDetailsPage implements OnInit {
  place;

  constructor(private route: Router,
              private navCtrl: NavController,
              private aRoute: ActivatedRoute,
              private placeService: PlacesService,
              private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.aRoute.paramMap.subscribe(paramMap =>{
      // this.place = this.placeService.getPlace(paramMap.get('placeId'));
      this.placeService.getPlace(paramMap.get('placeId')).subscribe(placeDetail => {
        this.place = placeDetail;
      });
      console.log(this.place);
    });
  }
  onBookPlace(){
      // this.route.navigate(['/']);
      this.navCtrl.navigateBack('/home/discover');
  }
  addPlace() {
    this.loadingCtrl.create({
      message: 'Creating dummy place...'
    }).then(loadingEl => {
      loadingEl.present();
      const d = {
        id: Math.random().toString(),
        title: 'dummy',
        desc: 'desc',
        img: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg',
        price: 444,
      };
      this.placeService.addPlaceOb(d).subscribe(() =>{
        loadingEl.dismiss();
        this.route.navigate(['/home/offers']);
      });
    });
  }
}
