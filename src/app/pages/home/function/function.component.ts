import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.scss'],
})
export class FunctionComponent implements OnInit {
  qingxiaojia = [{
    icon: 'assets/images/分供方考核.svg',
    text: `请假`,
    size: 'lg',
    index: 1
  }, {
    icon: 'assets/images/分包考核.svg',
    text: `请假查询`,
    size: 'lg',
    index: 2
  }, {
    icon: 'assets/images/分包评价.svg',
    text: `审批`,
    size: 'lg',
    index: 3
  }];
  fundata = [
    // { title: '组织管理', content: this.zuzhi, column: 3, modual: 1 },
    // { title: '考勤管理', content: this.kaoqin, column: 3, modual: 2 },
    { title: '请/销假管理', content: this.qingxiaojia, column: 3, modual: 3 }
  ];
  constructor(private navCtrl: NavController) { }

  ngOnInit() { }

  clickmenu(crtdata: any, type: number){
    if(type === 3){
      // 请/销假管理数据的modual===3
      switch(crtdata.index){
        case 0:
          this.navCtrl.navigateForward('/leave/addleave').then();
          break;
        case 1:
          this.navCtrl.navigateForward('/leave/queryleave').then();
          break;
        case 2:
          this.navCtrl.navigateForward('/leave/approve').then();
          break;
        default:
          break;
      }
    }
  }

}
