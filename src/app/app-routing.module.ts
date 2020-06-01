import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { TeamComponent } from './logged-in/team/team.component';
import { PlayerComponent } from './logged-in/player/player.component';
import { SearchComponent } from './logged-in/search/search.component';
const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logged-in', component: LoggedInComponent ,
  children:
  [
    { path: 'player', component: PlayerComponent },
    { path: 'team', component: TeamComponent },
    { path: 'search', component: SearchComponent }
  ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,LoggedInComponent]