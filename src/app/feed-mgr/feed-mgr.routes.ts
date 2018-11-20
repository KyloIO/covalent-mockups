import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeedsComponent } from './feeds/feeds.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [{
    path: '',
    // component: FeedsComponent
    children: [{
      path: '',
      component: FeedsComponent,
    },
    {
      path: 'categories',
      component: CategoriesComponent,
    }
  ],
}];

export const userRoutes: ModuleWithProviders = RouterModule.forChild(routes);
