import { NotfoundComponent } from './notfound/notfound.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full',
  },
  {
    path: 'Home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'About',
    component: AboutComponent,
    title: 'About',
  },
  {
    path: 'Contact',
    component: ContactComponent,
    title: 'Contact',
  },
  {
    path: 'Portfolio',
    component: PortfolioComponent,
    title: 'Portfolio',
  },
  { path: '**', component: NotfoundComponent, title: 'Error' },
];
