import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewController: ViewController
  ) {
    console.log(this.navParams.get('username'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  close() {
    this.viewController.dismiss({status: 'done'});
  }

}
