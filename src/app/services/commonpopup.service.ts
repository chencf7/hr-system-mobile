import { Injectable } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

import {popupDataMap} from '../utilsmethod/popupData';

@Injectable({
  providedIn: 'root'
})
export class CommonpopupService {

  constructor(private alertCtrl: AlertController,
    private modalCtrl: ModalController) { }

  async popup(popupcode){
    const alert = await this.alertCreate(popupcode);
    await alert.present();
    return alert.onDidDismiss();
  }

  private async alertCreate(alertCode: string) {
    const alert = await this.alertCtrl.create({
      header: popupDataMap.get(alertCode).header,
      buttons: popupDataMap.get(alertCode).data.map(b => {
        return {
          text: b.value, handler: () => {
            this.alertHandlerOk(alert, {name: b.value});
          }
        };
      }).concat({
        role: 'cancel',
        text: '取消'
      })
    });
    return alert;
  }
  // alert弹窗确定点击
  private alertHandlerOk(alertEl: HTMLIonAlertElement, d: any){
    debugger;
    alertEl.dismiss(d, 'ok').then();
  }
}
