import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MediaItem } from '../../models';
import { MediaCreate } from '../../models/media-create';
import { MediaFeatureState, selectMediaItems } from '../../reducers';
import { mediaAdded } from '../../actions/media.actions';

@Component({
  selector: 'app-media-tracking',
  templateUrl: './media-tracking.component.html',
  styleUrls: ['./media-tracking.component.scss']
})
export class MediaTrackingComponent implements OnInit {

  data$!: Observable<MediaItem[]>;

  constructor(private store: Store<MediaFeatureState>) { }

  ngOnInit(): void {

    this.data$ = this.store.pipe(
      select(selectMediaItems)
    );
  }

  onItemAdded(media: MediaCreate): void {
    this.store.dispatch(mediaAdded({ media }));
  }
}
