import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { OpeningComponent } from './Components/opening/opening.component';
import { StrategyComponent } from './Components/strategy/strategy.component';
import { AboutComponent } from './Components/about/about.component';
import { E4openingComponent } from './Components/e4opening/e4opening.component';
import { D4openingComponent } from './Components/d4opening/d4opening.component';
import { OthersopeningComponent } from './Components/othersopening/othersopening.component';
import { RulesComponent } from './Components/rules/rules.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'opening', component: OpeningComponent},
  {path: 'strategy', component: StrategyComponent},
  {path: 'rules', component: RulesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'e4', component: E4openingComponent},
  {path: 'd4', component: D4openingComponent},
  {path: 'others', component: OthersopeningComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
