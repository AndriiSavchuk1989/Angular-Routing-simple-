import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

// components
import { AppComponent } from './app.component';
import {AboutComponent} from './about.component';
import {HomeComponent} from './home.component';
import {NotFoundComponent} from './not-found.component';

const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, HomeComponent, AboutComponent, NotFoundComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
