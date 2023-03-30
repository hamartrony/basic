import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';
import { ThirdComponentComponent } from './components/third-component/third-component.component';
import { NgifComponentComponent } from './components/ngif-component/ngif-component.component';
import { FourthComponentComponent } from './components/fourth-component/fourth-component.component';
import { FivethComponentComponent } from './components/fiveth-component/fiveth-component.component';
import { SixthComponentComponent } from './components/sixth-component/sixth-component.component';
//importaçoes manuais
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { SeventhComponentComponent } from './components/seventh-component/seventh-component.component'

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    ChildComponentComponent,
    ThirdComponentComponent,
    NgifComponentComponent,
    FourthComponentComponent,
    FivethComponentComponent,
    SixthComponentComponent,
    SeventhComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
