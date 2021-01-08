import { ActionReducerMap, createFeatureSelector, createSelector, select } from '@ngrx/store';
import { MediaItem } from '../models';
//import { MediaItem } from '../models';
import * as fromMediaLibraries from './media-library.reducer';
export const featureName = 'mediaFeature';

export interface MediaFeatureState {
  mediaLibraries: fromMediaLibraries.MediaLibraryState;
}


export const reducers: ActionReducerMap<MediaFeatureState> = {
  mediaLibraries: fromMediaLibraries.reducer
};

const selectMediaFeature = createFeatureSelector<MediaFeatureState>(featureName);

const selectMediaLibraryBranch = createSelector(
  selectMediaFeature,
  f => f.mediaLibraries
)

const { selectAll: selectAllMediaArray } = fromMediaLibraries.adapter.getSelectors(selectMediaLibraryBranch);

export const selectMediaItems = createSelector(
  selectAllMediaArray,
  (items) => items.map(item => {
    return {
      ...item
    };
  }) as MediaItem[]
);
