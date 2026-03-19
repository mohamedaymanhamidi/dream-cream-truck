import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes,  } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsComponent } from './pages/terms/terms.component';


const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'top', // <-- this scrolls to top on route change
  anchorScrolling: 'enabled',       // <-- if you use #anchors
};

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path:  'terms', component: TermsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
