import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { TdLoadingService } from '@covalent/core/loading';
import { TdMediaService } from '@covalent/core/media';

import { UserService, IUser } from '../services/feed-mgr.service';
import { BaseFilteredPaginatedTableView } from '../../filtered-paginated-table-view/BaseFilteredPaginatedTableView';
import { TdDataTableService, ITdDataTableColumn } from '@covalent/core/data-table';

@Component({
  selector: 'qs-users',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss'],
})
export class FeedsComponent  extends BaseFilteredPaginatedTableView implements OnInit{

  users: IUser[];
  public columns: ITdDataTableColumn[] = [
    { name: 'displayName', label: 'Feed Name', sortable: true, filter : true },
    { name: 'id', label: 'State', sortable: true, filter : true},
    { name: 'email', label: 'Type', sortable: true, filter : true },
    { name: 'created', label: 'Created', sortable: true, filter : true },
    { name: 'lastAccess', label: 'Last Updated', sortable: true, filter : true },
  ];
  
  sortBy : string = 'displayName';

  constructor(private _titleService: Title,
    private _loadingService: TdLoadingService,
    private _userService: UserService,
    public media: TdMediaService,
    public tdDataService : TdDataTableService) {
      super(tdDataService);
  }

  ngOnInit(): void {
    this._titleService.setTitle('Kylo');
    this.load();
  }

  // filterUsers(displayName: string = ''): void {
  //   this.filteredUsers = this.users.filter((user: IUser) => {
  //     return user.displayName.toLowerCase().indexOf(displayName.toLowerCase()) > -1;
  //   });
  // }

  async load(): Promise<void> {
    try {
      this._loadingService.register('users.list');
      this.users = await this._userService.query().toPromise();
    } catch (error) {
      this.users = await this._userService.staticQuery().toPromise();
    } finally {
      this._loadingService.resolve('users.list');
    }
    super.setSortBy('displayName');
    super.setDataAndColumnSchema(this.users,this.columns);
    super.filter();
  }

  // delete(id: string): void {
  //   this._dialogService
  //     .openConfirm({ message: 'Are you sure you want to delete this user?' })
  //     .afterClosed().toPromise().then((confirm: boolean) => {
  //       if (confirm) {
  //         this._delete(id);
  //       }
  //     });
  // }

  // private async _delete(id: string): Promise<void> {
  //   try {
  //     this._loadingService.register('users.list');
  //     await this._userService.delete(id).toPromise();
  //     this.users = this.users.filter((user: IUser) => {
  //       return user.id !== id;
  //     });
  //     this.filteredUsers = this.filteredUsers.filter((user: IUser) => {
  //       return user.id !== id;
  //     });
  //     this._snackBarService.open('User Deleted', 'Ok');
  //   } catch (error) {
  //     this._dialogService.openAlert({ message: 'There was an error trying to delete the user' });
  //   } finally {
  //     this._loadingService.resolve('users.list');
  //   }
  // }

}
