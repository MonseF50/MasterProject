import { Routes } from '@angular/router';
import { Auth } from './layouts/auth/auth';
import { Blank } from './layouts/blank/blank';

export const routes: Routes = [
    {
        path: '', component: Auth, children: [
        ]
    },
    {
        path: '', component: Blank, children: [
            { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
            { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About) },
            { path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.Contact) },
            { path: 'contact', loadComponent: () => import('./pages/brands/brands').then(m => m.Brands) },

        ]
    }
];
