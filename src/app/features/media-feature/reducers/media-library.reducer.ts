import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/media.actions';

export interface MediaLibraryEntity {
  id: string;
  title: string;
  format: string;
  isLoaned: boolean;
}

export interface MediaLibraryState extends EntityState<MediaLibraryEntity> {

}
export const adapter = createEntityAdapter<MediaLibraryEntity>();

//const initialState = adapter.getInitialState();

const initialState: MediaLibraryState =
{
  ids: ['1', '2'],
  entities: {
    1: { id: '1', title: 'x', format: 'Movie', isLoaned: false },
    2: { id: '2', title: 'Gone with the Wind', format: 'Movie', isLoaned: true }
  }
};


const reducerFunction = createReducer(
  initialState,
  on(actions.mediaAdded, (state, action) => adapter.addOne(action.payload, state))
);

export function reducer(state: MediaLibraryState = initialState, action: Action): MediaLibraryState {
  return reducerFunction(state, action);
}
