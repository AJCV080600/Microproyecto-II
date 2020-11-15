import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';
import { CharacterInfoPageComponent } from './pages/character-info-page/character-info-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MyFavouritesPageComponent } from './pages/my-favourites-page/my-favourites-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'characters', component: CharactersPageComponent},
  {path: 'myfavourites', canActivate: [AuthenticationGuard], component: MyFavouritesPageComponent},
  {path: 'character/info/:id', component: CharacterInfoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
