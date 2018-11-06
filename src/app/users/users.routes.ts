import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeedsComponent } from './users.component';

const routes: Routes = [{
    path: '',
    children: [{
      path: '',
      component: FeedsComponent,
    }],
}];

export const userRoutes: ModuleWithProviders = RouterModule.forChild(routes);
