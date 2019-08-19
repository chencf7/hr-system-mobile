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
    //const alert = await this.alertCreate(popupcode);
    const alert = await this.alertCtrl.create({
      'mode': "ios",
      'header': popupDataMap.get(popupcode).header,
      'buttons': popupDataMap.get(popupcode).data.map(b => {
        return {
          text: b.value,
          handler: () => {
            alert.dismiss('123', 'ok');
          }
        };
      }).concat({
        role: 'cancel',
        text: '取消'
      })
    });
    await alert.present();
    return alert.onWillDismiss();
  }

  private async alertCreate(alertCode: string) {
    const alert = await this.alertCtrl.create({
      'mode': "ios",
      'header': popupDataMap.get(alertCode).header,
      'buttons': popupDataMap.get(alertCode).data.map(b => {
        return {
          text: b.value,
          handler: () => alert.dismiss('ooo', 'ok').then()
          // handler: () => {
          //   alert.dismiss('ooo', 'ok').then();
          //   // this.alertHandlerOk(alert, {name: b.value});
          // }
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
    alertEl.dismiss(d, 'ok').then();
  }
}
