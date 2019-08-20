import { Injectable } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalService, ToastService } from 'ng-zorro-antd-mobile';

import {popupDataMap} from '../utilsmethod/popupData';

@Injectable({
  providedIn: 'root'
})
export class CommonpopupService {

  constructor(private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private _zorromodal: ModalService, 
    private _zorrotoast: ToastService) { }

  async popup(popupcode){
    return new Promise((resolve, reject)=>{
      ModalService.alert('请假类型', '', [
        { text: '事假', onPress: () => this.zorroAlertHandlerOk(resolve, '事假') },
        { text: '病假', onPress: () => this.zorroAlertHandlerOk(resolve, '病假') },
        { text: '婚假', onPress: () => this.zorroAlertHandlerOk(resolve, '婚假') },
        { text: '取消', onPress: () => this.zorroAlertHandlerCancel(resolve) }
      ]);
    })


    return;
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
  // alert弹窗确定点击
  private zorroAlertHandlerOk(resolve, d: any){
    resolve.call(null, {
      role: 'ok',
      data: d
    });
  }
  private zorroAlertHandlerCancel(resolve){
    resolve.call(null, {role: 'cancel'});
  }
}
