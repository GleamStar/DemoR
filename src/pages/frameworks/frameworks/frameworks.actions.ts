import { NgRedux } from 'ng2-redux';
import { AppState } from '../store';
import { Injectable} from '@angular/core';
import { FrameworksService } from './frameworks.service';

export const FILTER_FRAMEWORKS = 'frameworks/FILTER';
export const REQUEST_FRAMEWORKS_SUCCESS = 'frameworks/REQUEST_COURSES_SUCCESS';

@Injectable()
export class  FrameworksActions {
    constructor(
        private ngRedux: NgRedux<AppState>,
        private frameworkService: FrameworksService
    ) {}

    getFrameworks() {
        this.frameworkService.getFrameworks()
        .subscribe(frameworks => {
            this.ngRedux.dispatch({
                type: REQUEST_FRAMEWORKS_SUCCESS,
                frameworks,
            });
        });
    }

    filterFrameworks(searchText: string) {
        this.ngRedux.dispatch({
            type: FILTER_FRAMEWORKS,
            searchText,
        });
    }
}
