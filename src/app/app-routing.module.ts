import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes, PreloadAllModules} from '@angular/router';
import {CardsComponent} from 'app/cards/cards.component';
import {FlotComponent} from 'app/charts/flot/flot.component';
import {DashboardComponent} from 'app/dashboard/dashboard.component';
import {fallbackRoute} from 'app/shared/fallback-route';
import { LayoutComponent } from "app/layout/layout.component";
import { LoginComponent } from "app/login/login.component";
import { LoginGuard } from "app/login.guard";
import { ClassicComponent } from "app/forms/classic/classic.component";
import { Classic2Component } from "app/forms/classic2/classic2.component";

const routes: Routes = [
  {path: '', component: LayoutComponent,
  children: [
    {path: '', redirectTo: 'forms/classic2', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent, data: {title: 'Page 1'}},
    {path: 'cards/:type', component: CardsComponent,
     canActivate: [
       LoginGuard
     ]
    },
    {path: 'charts', loadChildren: './charts/charts.module#ChartsModule'},
    {path: 'forms/classic', component: ClassicComponent},
    {path: 'forms/classic2', component: Classic2Component}
  ]},
  {path: 'login', component: LoginComponent},
  fallbackRoute
];

@NgModule({
  imports:
      [RouterModule.forRoot(routes, {
        useHash: false,
        enableTracing: false,
        preloadingStrategy: PreloadAllModules
      })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
