import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmsOtpPageRoutingModule } from './sms-otp-routing.module';

import { SmsOtpPage } from './sms-otp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmsOtpPageRoutingModule
  ],
  declarations: [SmsOtpPage]
})
export class SmsOtpPageModule {}
