import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OddComponent } from './game-control/odd/odd.component';
import { GameControlComponent } from './game-control/game-control.component';
import { EvenComponent } from './game-control/even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    OddComponent,
    GameControlComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
