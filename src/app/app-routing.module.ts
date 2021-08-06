import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'place-details',
    loadChildren: () => import('./place-details/place-details.module').then( m => m.PlaceDetailsPageModule)
  },
  {
    path:'discover',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path:'offers',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule),
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
