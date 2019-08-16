import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'addleave', loadChildren: './addleave/addleave.module#AddleavePageModule', },
  { path: 'queryleave', loadChildren: './queryleave/queryleave.module#QueryleavePageModule' },
  { path: 'approve', loadChildren: './approve/approve.module#ApprovePageModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveRoutingModule { }
