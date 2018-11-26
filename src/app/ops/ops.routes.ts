import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';


const routes: Routes = [{
    path: '',
    component: JobsComponent,
}];

export const jobsRoute: ModuleWithProviders = RouterModule.forChild(routes);
