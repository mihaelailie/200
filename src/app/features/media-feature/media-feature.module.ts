import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaListComponent } from './components/media-list/media-list.component';
import { MediaFeatureComponent } from './media-feature.component';
import { MediaTrackingComponent } from './components/media-tracking/media-tracking.component';



@NgModule({
  declarations: [MediaListComponent, MediaFeatureComponent, MediaTrackingComponent],
  imports: [
    CommonModule
  ]
})
export class MediaFeatureModule { }
