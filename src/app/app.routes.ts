import { Routes } from '@angular/router';
import { Cards } from './components/cards/cards';
import { About } from './components/about/about';
import { Products } from './components/products/products';
import { Login } from './components/login/login';
import { AboutPhone } from './components/about-phone/about-phone';
import { AboutLap } from './components/about-lap/about-lap';
import { Notfound } from './components/notfound/notfound';
import { authGuard } from './guards/auth-guard-guard';
import { Home } from './components/home/home';

export const routes: Routes = [

    {
        path:"",
        component:Products
    },
    {
        path:"home",
        component:Home
    },
    {
        path:"cardsss",
        component:Cards
    },
    {
        path:"about",
        loadComponent: () => import('./components/about/about').then((xyz) => xyz.About),
        children:[
            {
                path:"phone",
                component:AboutPhone
            },
            {
                path:"laptop",
                component:AboutLap
            }
        ]
    },
    {
        path:"**",
        component:Notfound
    }
];
