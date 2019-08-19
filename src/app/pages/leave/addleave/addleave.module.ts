import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';

import {CommonComponentModule} from 'src/app/components/common-component.module';

import { AddleavePage } from './addleave.page';

const routes: Routes = [
  {
    path: '',
    component: AddleavePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgZorroAntdMobileModule,
    CommonComponentModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddleavePage]
})
export class AddleavePageModule {}
