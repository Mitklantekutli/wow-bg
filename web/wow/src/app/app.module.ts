import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

import { RouterModule, Routes } from '@angular/router';
import { PriestComponent } from './priest/priest.component';
import { MageComponent } from './mage/mage.component';

const appRoutes: Routes = [
  { path: 'priest', component: PriestComponent },
  { path: 'mage',   component: MageComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PriestComponent,
    MageComponent
  ],
  imports: [
    RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
