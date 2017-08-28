import { Framework } from '../frameworks/framework';

export interface AppState {
    frameworks: Framework[];
    filteredFrameworks: Framework[];
}
