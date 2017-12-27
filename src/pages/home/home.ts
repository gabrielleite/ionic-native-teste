import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AvatarServiceProvider } from '../../providers/avatar-service/avatar-service';

import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private _avatarService: AvatarServiceProvider,
    private _camera: Camera) {
  }

  tiraFoto() {
    this._camera.getPicture({
      destinationType: this._camera.DestinationType.FILE_URI,
      saveToPhotoAlbum: true,
      correctOrientation: true
    })
    .then(fotoUri => this._avatarService.salvaAvatar(fotoUri))
    .catch(err => console.log(err));
  }

  get avatar() {
    return this._avatarService.obtemAvatar();
  }
}
