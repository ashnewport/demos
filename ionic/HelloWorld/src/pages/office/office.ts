import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-office',
  templateUrl: 'office.html',
})
export class OfficePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    const username = this.navParams.get('username');
    const password = this.navParams.get('password');
    console.log(username, password);
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad OfficePage');
  // }

  goBack() {
    this.navCtrl.pop();
  }

  reset() {
    this.navCtrl.setRoot(HomePage);
  }

}
