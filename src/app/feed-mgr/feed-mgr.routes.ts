import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeedsComponent } from './feeds/feeds.component';

const routes: Routes = [{
    path: '',
    // component: FeedsComponent
    children: [{
      path: '',
      component: FeedsComponent,
    }],
}];

export const userRoutes: ModuleWithProviders = RouterModule.forChild(routes);
