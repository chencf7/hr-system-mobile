import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {NgZorroAntdMobileModule} from 'ng-zorro-antd-mobile';

import { HomePage } from './home.page';
import {FunctionComponent} from './function/function.component';
import { MyComponent } from './my/my.component';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [{
      path: 'function',
      component: FunctionComponent
    }, {
      path: 'my',
      component: MyComponent
    }, {
      path: '',
      redirectTo: '/home/function',
      pathMatch: 'full'
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgZorroAntdMobileModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage, FunctionComponent, MyComponent]
})
export class HomePageModule {}
