import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';
import { FilterComponent } from './filter/filter.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { ScanComponent } from './scan/scan.component';
import { PluckComponent } from './pluck/pluck.component';
import { MergemapComponent } from './mergemap/mergemap.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent,
    FilterComponent,
    DebounceTimeComponent,
    ScanComponent,
    PluckComponent,
    MergemapComponent,
    SwitchmapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
