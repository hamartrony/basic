import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';
import { ThirdComponentComponent } from './components/third-component/third-component.component';
import { NgifComponentComponent } from './components/ngif-component/ngif-component.component';
import { FourthComponentComponent } from './components/fourth-component/fourth-component.component';
import { FivethComponentComponent } from './components/fiveth-component/fiveth-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    ChildComponentComponent,
    ThirdComponentComponent,
    NgifComponentComponent,
    FourthComponentComponent,
    FivethComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
