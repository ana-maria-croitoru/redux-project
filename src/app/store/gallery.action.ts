import { createAction, props } from '@ngrx/store';
import { GalleryModel } from '../gallery/gallery.model';

export const retrievedGalleryListSuccess = createAction(
  '[Gallery API] Gallery API Success',
  props<{ allGallery: GalleryModel[] }>()
);

export const retrievedGalleryList = createAction('[Gallery API] Invoke API');
