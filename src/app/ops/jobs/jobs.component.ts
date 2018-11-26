import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { TdMediaService } from '@covalent/core/media';

import { BaseFilteredPaginatedTableView } from '../../filtered-paginated-table-view/BaseFilteredPaginatedTableView';
import { TdDataTableService, ITdDataTableColumn } from '@covalent/core/data-table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'kylo-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class JobsComponent  extends BaseFilteredPaginatedTableView implements OnInit{

  jobs: any[];
  filterTerm : string = 'All';
  public columns: ITdDataTableColumn[] = [
    { name: 'state', label :'', width : 60,sortable: false, filter: true },
    { name: 'jobName', label: 'Job Name', sortable: true, filter: false },
    { name: 'owner', label: 'Owner', sortable: true, filter: false},
    { name: 'staged', label: 'Type', sortable: true, filter: false},
  ];
  
  sortBy : string = 'jobName';

  constructor(private _titleService: Title,
    public media: TdMediaService,
    public tdDataService : TdDataTableService,
    public http : HttpClient) {
      super(tdDataService);
  }

  ngOnInit(): void {
    this._titleService.setTitle('Kylo');
    this.load();
  }

  async load(): Promise<void> {
    this.http.get("data/jobs.json").toPromise().then((jobs : any) => {
      this.jobs = jobs;
      super.setSortBy('jobName');
      super.setDataAndColumnSchema(this.jobs,this.columns);
      super.filter();
    })
  }
  selectFilter(term : string) {
    this.filterTerm = term ===''?'All' : term;
    this.searchTerm = term;
    super.filter();
  }
}
