import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { CovalentCommonModule } from '@covalent/core/common';
import { CovalentSearchModule } from '@covalent/core/search';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentDialogsModule } from '@covalent/core/dialogs';
import { CovalentMediaModule } from '@covalent/core/media';
import { CovalentLoadingModule } from '@covalent/core/loading';
import { CovalentDataTableModule } from '@covalent/core/data-table';

import { FeedsComponent } from './feeds/feeds.component';
import { CategoriesComponent } from './categories/categories.component';
import { userRoutes } from './feed-mgr.routes';

import { USER_PROVIDER, USERS_API } from './services/feed-mgr.service';
import { KyloCommonModule } from '../common.module';
import { LocalStorageService } from './services/local-storage.service';
@NgModule({
  declarations: [
    FeedsComponent,
    CategoriesComponent
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    // angular modules
    CommonModule,
    FormsModule,
    RouterModule,
    KyloCommonModule,
    // material modules
    MatSnackBarModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatSlideToggleModule,
    MatMenuModule,
    // covalent modules
    CovalentLoadingModule,
    CovalentDialogsModule,
    CovalentMediaModule,
    CovalentLayoutModule,
    CovalentSearchModule,
    CovalentCommonModule,
    CovalentDataTableModule,
    // extra
    userRoutes,
  ], // modules needed to run this module
  providers: [
    { provide: USERS_API, useValue: ''},
    USER_PROVIDER, LocalStorageService
  ],
})
export class FeedMgrModule {}
