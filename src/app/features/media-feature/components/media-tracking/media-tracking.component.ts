import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MediaItem } from '../../models';
import { MediaDataService } from '../../services/media-data.service';

@Component({
  selector: 'app-media-tracking',
  templateUrl: './media-tracking.component.html',
  styleUrls: ['./media-tracking.component.scss']
})
export class MediaTrackingComponent implements OnInit {

  data$!: Observable<MediaItem[]>;
  constructor(private mediaService: MediaDataService) { }

  ngOnInit(): void {
    this.data$ = this.mediaService.getMediaLibraryItems();
  }
}
