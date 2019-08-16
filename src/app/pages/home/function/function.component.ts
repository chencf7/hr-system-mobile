import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.scss'],
})
export class FunctionComponent implements OnInit {
  qingxiaojia = [
    {
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
    }
  ];
  fundata = [
    // { title: '组织管理', content: this.zuzhi, column: 3, modual: 1 },
    // { title: '考勤管理', content: this.kaoqin, column: 3, modual: 3 },
    { title: '请/销假管理', content: this.qingxiaojia, column: 3, modual: 2 }
  ];
  constructor() { }

  ngOnInit() { }

}
