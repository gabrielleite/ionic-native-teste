import { Injectable } from '@angular/core';

const CHAVE = 'avatar';

@Injectable()
export class AvatarServiceProvider {

  constructor() {
  }

  obtemAvatar() {
    return localStorage.getItem(CHAVE)
            ? localStorage.getItem(CHAVE)
            : 'assets/img/default-avatar.png';
  }

  salvaAvatar(avatar) {
    localStorage.setItem(CHAVE, avatar);
  }

}
