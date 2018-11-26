import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { TdLoadingService } from '@covalent/core/loading';
import { TdMediaService } from '@covalent/core/media';

import { UserService, IUser } from '../services/feed-mgr.service';
import { BaseFilteredPaginatedTableView } from '../../filtered-paginated-table-view/BaseFilteredPaginatedTableView';
import { TdDataTableService, ITdDataTableColumn } from '@covalent/core/data-table';
import { HttpClient } from '@angular/common/http';

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
    public media: TdMediaService,
    public tdDataService : TdDataTableService,
    public _http : HttpClient) {
      super(tdDataService);
  }

  ngOnInit(): void {
    this._titleService.setTitle('Kylo');
    this.load();
  }

  async load(): Promise<void> {
    this._http.get('data/users.json').toPromise().then((users :any) => {
      this.users = users
      super.setSortBy('displayName');
      super.setDataAndColumnSchema(this.users,this.columns);
      super.filter();
    });
    
  }
}
