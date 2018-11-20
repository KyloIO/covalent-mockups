import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
    path: 'login',
    component: LoginComponent,
  }, {
    path: '',
    // component: MainComponent,
    redirectTo : '/feeds',
    pathMatch : 'full',
    // children: [
    //   // ,
    // ],
  },{
    path: 'feeds',
    loadChildren: './feed-mgr/feed-mgr.module#FeedMgrModule',
  }
];

export const appRoutes: any = RouterModule.forRoot(routes);
