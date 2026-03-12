import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Cards } from './components/cards/cards';
import { About } from './components/about/about';
import { Products } from './components/products/products';
import { Login } from './components/login/login';
import { AboutPhone } from './components/about-phone/about-phone';
import { AboutLap } from './components/about-lap/about-lap';
import { Notfound } from './components/notfound/notfound';
import { authGuard } from './guards/auth-guard-guard';

export const routes: Routes = [

    {
        path:"",
        component:Login
    },
    {
        path:"product",
        component:Products
    },
    {
        path:"cards",
         loadComponent: () => import('./components/cards/cards').then((m) => m.Cards),
         canActivate:[authGuard]
    },
    {
        path:"about",
        component:About,
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
