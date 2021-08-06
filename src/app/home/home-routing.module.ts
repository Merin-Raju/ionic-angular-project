import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'discover',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab1/tab1.module').then( m => m.Tab1PageModule)
          },
          {
            path: ':placeId',
            loadChildren: () => import('../place-details/place-details.module').then( m => m.PlaceDetailsPageModule)
          }
        ]
      },
      {
        path: 'offers',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          },
          {
            path: 'new',
            loadChildren: () => import('../tab2/new-offer/new-offer.module').then( m => m.NewOfferPageModule)
          },
          {
            path: 'edit:placeId',
            loadChildren: () => import('../tab2/edit-offer/edit-offer.module').then( m => m.EditOfferPageModule)
          },
          {
            path: 'placeId',
            loadChildren: () => import('../tab2/offer-bookings/offer-bookings.module').then( m => m.OfferBookingsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/discover',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/discover',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
