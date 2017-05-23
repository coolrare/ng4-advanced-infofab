import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FlotComponent} from 'app/charts/flot/flot.component';

const routes: Routes = [
    {
      path: 'charts',
      children: [
        {path: 'flot', component: FlotComponent}
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
