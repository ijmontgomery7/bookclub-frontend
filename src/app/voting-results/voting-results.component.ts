import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { VotingResultsDataSource } from './voting-results-datasource';

@Component({
  selector: 'voting-results',
  templateUrl: './voting-results.component.html',
  styleUrls: ['./voting-results.component.scss']
})
export class VotingResultsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: VotingResultsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new VotingResultsDataSource(this.paginator, this.sort);
  }
}
