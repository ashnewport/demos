import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, ToastController, ActionSheetController, ModalController, PopoverController } from 'ionic-angular';
import { OfficePage } from '../office/office';
import { ProfilePage } from '../profile/profile';
import { PopoverPage } from '../popover/popover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  userType: any;
  gender: any;
  notifications: boolean;

  constructor(
    public navCtrl: NavController,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public toastController: ToastController,
    public actionSheetController: ActionSheetController,
    public modalController: ModalController,
    public popoverController: PopoverController
  ) {

  }

  login() {
    console.log('login', this.username, this.password, this.userType, this.gender, this.notifications);
  }

  cancel() {
    console.log('cancel');
    this.username = '';
    this.password = '';
  }

  alert() {
    // const alert = this.alertController.create({
    //   title: 'Congratulations',
    //   subTitle: 'You have won!',
    //   message: 'Enter you email address',
    //   inputs: [{
    //     name: 'email',
    //     placeholder: 'user@mail.com'
    //   }],
    //   buttons: [{
    //     text: 'Ok',
    //     handler: (data) => {
    //       console.log(data);
    //     }
    //   }]
    // });

    const alert = this.alertController.create();
    alert.setTitle('Congrats');
    // alert.addInput({
    //   type: 'radio',
    //   label: 'Send me the gift',
    //   value: 'send'
    // });
    // alert.addInput({
    //   type: 'radio',
    //   label: 'No thank you',
    //   value: 'dontSend'
    // });
    alert.addInput({
      type: 'checkbox',
      label: 'I prefer a dog',
      value: 'dog'
    });
    alert.addInput({
      type: 'checkbox',
      label: 'I prefer a cat',
      value: 'cat'
    });
    alert.addButton({
      text: 'Ok',
      handler: (data) => {
        console.log(data);
      }
    });
    alert.addButton({
      text: 'Cancel',
      handler: (data) => {
        console.log('User clicked cancel');
      }
    });

    alert.present();
  }

  loading() {
    const loading = this.loadingController.create({
      content: 'Loading...',
      spinner: 'crescent' // circles, crescent, dots, ios-small, ios, hide
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 3000);
  }

  toast() {
    const toast = this.toastController.create({
      message: 'This is a toast',
      duration: 3000,
      showCloseButton: true,
      position: 'top',
      closeButtonText: 'Ok'
    });

    toast.present();
  }

  actionsheet() {
    const action = this.actionSheetController.create({
      title: 'Select an option',
      buttons: [
        {
          text: 'Share via Facebook',
          icon: 'logo-facebook',
          handler: () => {
            console.log('facebook');
          }
        },
        {
          text: 'Share with Email',
          icon: 'mail',
          handler: () => {
            console.log('email');
            return false; // prevent actionsheet from being dismissed on click
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            console.log('cancel');
          }
        }
      ]
    });

    action.present();
  }

  goToOffice() {
    this.navCtrl.push(OfficePage, {'username': this.username, 'password': this.password});
  }

  openModal() {
    const modal = this.modalController.create(ProfilePage, {'username': this.username});
    modal.onDidDismiss(data => {
      console.log(data);
    });
    modal.present();
  }

  presentPopover(myEvent) {
    const popover = this.popoverController.create(PopoverPage);

    popover.present({
      ev: myEvent
    });
  }

}
