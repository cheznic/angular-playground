import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';
import { FilterComponent } from './filter/filter.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { ScanComponent } from './scan/scan.component';
import { PluckComponent } from './pluck/pluck.component';
import { MergemapComponent } from './mergemap/mergemap.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'debouncetime',
    component: DebounceTimeComponent
  },
  {
    path: 'filter',
    component: FilterComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'mergemap',
    component: MergemapComponent
  },
  {
    path: 'pluck',
    component: PluckComponent
  },
  {
    path: 'scan',
    component: ScanComponent
  },
  {
    path: 'switchmap',
    component: SwitchmapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
