import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { TdMediaService } from '@covalent/core/media';

import { BaseFilteredPaginatedTableView } from '../../filtered-paginated-table-view/BaseFilteredPaginatedTableView';
import { TdDataTableService, ITdDataTableColumn } from '@covalent/core/data-table';

@Component({
  selector: 'kylo-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent  extends BaseFilteredPaginatedTableView implements OnInit{

  users: any[];
  public columns: ITdDataTableColumn[] = [
    { name: 'execution', label: 'Execution', sortable: true, filter : true },
    { name: 'owner', label: 'Owner', sortable: true, filter : true},
    { name: 'staged', label: 'Type', sortable: true, filter : true },
  ];
  
  sortBy : string = 'displayName';

  constructor(private _titleService: Title,
    public media: TdMediaService,
    public tdDataService : TdDataTableService) {
      super(tdDataService);
  }

  ngOnInit(): void {
    this._titleService.setTitle('Kylo');
    this.load();
  }

  async load(): Promise<void> {
    super.setSortBy('execution');
    super.setDataAndColumnSchema(this.users,this.columns);
    super.filter();
  }
}
