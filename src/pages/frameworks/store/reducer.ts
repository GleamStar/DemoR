import { Framework } from '../frameworks/framework';
import { AppState } from './appState';
import { REQUEST_FRAMEWORKS_SUCCESS, FILTER_FRAMEWORKS } from '../frameworks/frameworks.actions';

const frameworks = [];

const initialState: AppState = {
    frameworks,
    filteredFrameworks: frameworks
};

function filterFrameworks(state, action): AppState {
  return Object.assign({}, state, {
    filteredFrameworks: state.frameworks.filter(c => c.framework.toLowerCase().indexOf(action.searchText.toLowerCase()) > -1),
  });
}

function storeFrameworks(state, action): AppState {
  return Object.assign({}, state, {
    frameworks: action.frameworks,
    filteredFrameworks: action.frameworks,
  });
}

export function reducer(state= initialState, action) {
    switch (action.type) {
      case FILTER_FRAMEWORKS:
        return filterFrameworks(state, action);
      case REQUEST_FRAMEWORKS_SUCCESS:
        return storeFrameworks(state, action);
      default:
        return state;
    }
}
