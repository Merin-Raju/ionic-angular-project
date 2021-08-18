import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  scannedData: string;
  error: any;

  constructor(private barcodeScanner: BarcodeScanner) {}
scan(){
  alert('hi');
  this.barcodeScanner.scan().then(barcodeData => {
    this.scannedData = barcodeData.text;
    alert(' data => '+JSON.stringify(barcodeData));
   }).catch(err => {
    alert('Error'+ err);
   });
//   this.qrScanner.prepare()
//   .then((status: QRScannerStatus) => {
//     alert('hi1'+JSON.stringify(status));
//      if (status.authorized) {
//        // camera permission was granted


//        // start scanning
//        alert('hi scanned');
//        const scanSub = this.qrScanner.scan().subscribe((text: string) => {
//          alert('hi after scanning');
//          console.log('Scanned something', text);
//          alert('hi cam');
//          this.qrScanner.useBackCamera();
//          this.scannedData = text;

//          this.qrScanner.hide(); // hide camera preview
//          scanSub.unsubscribe(); // stop scanning
//        },
//        error => {
//          alert(error);
//        });
//        alert('hi scanned ggg');
//      } else if (status.denied) {
//       alert('hi2');
//        // camera permission was permanently denied
//        // you must use QRScanner.openSettings() method to guide the user to the settings page
//        // then they can grant the permission from there
//      } else {
//       alert('hi3');
//        // permission was denied, but not permanently. You can ask for permission again at a later time.
//      }
//   },
//   error => {
//     alert('camera not showing = >'+JSON.stringify(error));
//   })
//   .catch((e: any) => {
//     alert('hi4');
//     alert(JSON.stringify(e));
//     console.log('Error is', e);
// this.error = e;});
}
}
