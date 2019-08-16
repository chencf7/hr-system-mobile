import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-addleave',
  templateUrl: './addleave.page.html',
  styleUrls: ['./addleave.page.scss'],
})
export class AddleavePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  // 返回
  goBack(){
    this.navCtrl.navigateBack('/home/function').then();
  }
}
