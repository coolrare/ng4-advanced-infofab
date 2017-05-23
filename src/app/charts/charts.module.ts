import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlotComponent} from 'app/charts/flot/flot.component';

import {ChartsRoutingModule} from './charts-routing.module';

@NgModule({
  imports: [CommonModule, ChartsRoutingModule],
  declarations: [FlotComponent]
})
export class ChartsModule {
}
