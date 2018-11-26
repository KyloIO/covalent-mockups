import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
    path: 'login',
    component: LoginComponent,
  }, {
    path: '',
    component : MainComponent,
    children: [{
        path: '',
        loadChildren: './feed-mgr/feed-mgr.module#FeedMgrModule'
      },{
        path: 'ops',
        loadChildren: './ops/ops.module#OpsModule'
      }
    ],
  }
    // redirectTo : '/feeds',
    // pathMatch : 'full',
  // },{
  //   path : 'ops',
  //   loadChildren: './ops/ops.module#OPSModule',
  // }
];

export const appRoutes: any = RouterModule.forRoot(routes);
