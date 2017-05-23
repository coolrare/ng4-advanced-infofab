import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {CardsComponent} from 'app/cards/cards.component';
import {DashboardComponent} from 'app/dashboard/dashboard.component';
import {fallbackRoute} from 'app/shared/fallback-route';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, data: {title: 'Page 1'}},
  {path: 'cards', component: CardsComponent}, fallbackRoute
];

@NgModule({
  imports:
      [RouterModule.forRoot(routes, {useHash: false, enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
