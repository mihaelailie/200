import { createAction, props } from '@ngrx/store';
import { MediaCreate } from '../models/media-create';
import { MediaLibraryEntity } from '../reducers/media-library.reducer';

let fakeId = 1;



// Initiator
export const loadMediaData = createAction(
  '[media-tracking media] load media data'
);


// Initiator
export const mediaAdded = createAction(
  '[media-tracking media] add media data',
  ({ media }: { media: MediaCreate }) => ({
    payload: {
      ...media,
      id: 'T' + fakeId++
    } as MediaLibraryEntity
  })
);
