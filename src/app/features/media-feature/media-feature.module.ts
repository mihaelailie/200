import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaListComponent } from './components/media-list/media-list.component';
import { MediaFeatureComponent } from './media-feature.component';
import { MediaTrackingComponent } from './components/media-tracking/media-tracking.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';

import { ReactiveFormsModule } from '@angular/forms';
import { GiftDataService } from '../gift-feature/services/gift-data.service';
import { MediaEntryComponent } from './components/media-entry/media-entry.component';



@NgModule({
  declarations: [
    MediaListComponent,
    MediaFeatureComponent,
    MediaTrackingComponent,
    MediaEntryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(featureName, reducers)
  ],

  exports: [
    MediaFeatureComponent
  ],

  providers: [GiftDataService]

})
export class MediaFeatureModule { }
