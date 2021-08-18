import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmsOtpPage } from './sms-otp.page';

const routes: Routes = [
  {
    path: '',
    component: SmsOtpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmsOtpPageRoutingModule {}
