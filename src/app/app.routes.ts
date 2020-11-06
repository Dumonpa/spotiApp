import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { ArtistaComponent } from './components/artista/artista.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'search', component: SearchComponent},
    { path: 'home', component: HomeComponent },
    { path: 'artist/:id', component: ArtistaComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APPROUTING = RouterModule.forRoot(ROUTES, { useHash: true});
