import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              public alertCtrl: AlertController) {
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [{
        text: 'OK',
        role: 'OK',
        handler: () => {
          this.router.navigate(['home']);
        }
      },
      {
        text: 'Cancel',
        role: 'Cancel',
        handler: () => {
          this.router.navigate(['']);
        }
      }
    ]
    });

    await alert.present();
  }
  onClickReg(){
    if (this.registerForm.valid) {
       this.presentAlert();
    }
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }

  ionViewDidEnter(){
    console.log('destroyed');
  }
}
