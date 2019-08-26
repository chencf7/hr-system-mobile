import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  u_class: string='';
  p_class: string='';
  constructor() { }

  ngOnInit() {
  }

  loginunchange($event){
    if($event.target.value){
      this.u_class='has-value';
    }else{
      this.u_class='';
    }
  }
  loginpwchange($event){
    if($event.target.value){
      this.p_class='has-value';
    }else{
      this.p_class='';
    }
  }

}
