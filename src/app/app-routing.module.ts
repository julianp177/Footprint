import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StartComponent} from "./start/start.component";
import {AboutusComponent} from "./aboutus/aboutus.component";
import {FaqComponent} from "./faq/faq.component";
import {KontaktComponent} from "./kontakt/kontakt.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AgbComponent} from "./agb/agb.component";
import {DatenschutzComponent} from "./datenschutz/datenschutz.component";
import {KarriereComponent} from "./karriere/karriere.component";
import {SpendenComponent} from "./spenden/spenden.component";
import {ImpressumComponent} from "./impressum/impressum.component";

const routes: Routes = [
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'kontakt',
    component: KontaktComponent
  },
  {
    path: 'agb',
    component: AgbComponent
  },
  {
    path: 'datenschutz',
    component: DatenschutzComponent
  },
  {
    path: 'karriere',
    component: KarriereComponent
  },
  {
    path: 'spenden',
    component: SpendenComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'impressum',
    component: ImpressumComponent
  },
  { path: '',
    redirectTo: '/start',
    pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
