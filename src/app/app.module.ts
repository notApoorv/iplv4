import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { TokenService } from './token.service';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule} from '@angular/forms';
import { TeamComponent } from './logged-in/team/team.component';
import { PlayerComponent } from './logged-in/player/player.component';
import { SearchComponent } from './logged-in/search/search.component';





@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule, HttpClientModule ,
    ReactiveFormsModule],
  declarations: [ AppComponent, LoginComponent, LoggedInComponent, TeamComponent, PlayerComponent, SearchComponent],
  bootstrap:    [ AppComponent ],
  providers: [TokenService]
})
export class AppModule { }
