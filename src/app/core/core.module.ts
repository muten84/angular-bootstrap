import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    LoginComponent, HeaderComponent
  ],
  exports: [LoginComponent, HeaderComponent],
  imports: [
    BrowserModule
  ],
  providers: [],

})
export class CoreModule { }
