import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

  //Please try changing the property 
  encapsulation: ViewEncapsulation.Emulated,
  //encapsulation: ViewEncapsulation.Native,
  //encapsulation: ViewEncapsulation.None

})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
