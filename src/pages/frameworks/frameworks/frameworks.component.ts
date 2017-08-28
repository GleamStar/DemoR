import { Component, OnInit } from '@angular/core';
import { FrameworksService } from './frameworks.service';
import { Framework } from './framework';
//import { FilterTextComponent } from '../blocks/filter-text';
import { AppState } from '../store';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { FrameworksActions } from './frameworks.actions';

@Component({
  selector: 'frameworks',
  templateUrl: './frameworks.component.html'
})
export class FrameworksComponent implements OnInit {

  @select('filteredFrameworks') filteredFrameworks$: Observable<Framework>;

  constructor(
   // private ngRedux: NgRedux<AppState>,
    private courseActions: FrameworksActions
    ) {
  }

  filterChanged(searchText: string) {
    console.log('user searched: ', searchText);
    this.courseActions.filterFrameworks(searchText);
  }

  ngOnInit() {
    this.courseActions.getFrameworks();
  }

}
