import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MediaItem } from '../../models';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaListComponent implements OnInit {

  @Input() items: MediaItem[] | null = [];
  constructor() { }

  ngOnInit(): void {
  }

}
