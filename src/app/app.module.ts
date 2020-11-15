import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from 'src/environments/environment';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { MyFavouritesPageComponent } from './pages/my-favourites-page/my-favourites-page.component';
import { CharactersChartComponent } from './components/characters-chart/characters-chart.component';
import { CharacterInfoPageComponent } from './pages/character-info-page/character-info-page.component';
import { CharacterInfoComponent } from './components/character-info/character-info.component';
import { CharactersFilterPageComponent } from './pages/characters-filter-page/characters-filter-page.component';
import { CharacterFilterComponent } from './components/character-filter/character-filter.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    CharactersPageComponent,
    MyFavouritesPageComponent,
    CharactersChartComponent,
    CharacterInfoPageComponent,
    CharacterInfoComponent,
    CharactersFilterPageComponent,
    CharacterFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
