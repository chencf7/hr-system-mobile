import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HrselectItemComponent} from './hrselect-item/hrselect-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HrselectItemComponent
  ],
  exports: [
    HrselectItemComponent
  ]
})
export class CommonComponentModule { }
