import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
  encapsulation : ViewEncapsulation.None
})
export class FeedsComponent  extends BaseFilteredPaginatedTableView implements OnInit{

  feeds: any[];
  public columns: ITdDataTableColumn[] = [
    { name: 'feedName', label: 'Feed Name', sortable: true, filter : true },
    { name: 'state', label: 'State', sortable: true, filter : true},
    { name: 'categoryName', label: 'Category', sortable: true, filter : true },
    { name: 'templateName', label: 'Type', sortable: true, filter : true },
    { name: 'updateDate', label: 'Last Updated', sortable: true, filter : true },
  ];
  
  sortBy : string = 'feedName';

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
    this._http.get('data/feeds.json').toPromise().then((feeds :any) => {
      this.feeds = feeds;
      super.setSortBy('feedName');
      super.setDataAndColumnSchema(this.feeds,this.columns);
      super.filter();
    });
    
  }
}
