import { BehaviorSubject, Observable, of } from 'rxjs';
import { MediaItem } from '../models';
import { MediaCreate } from '../models/media-create';

export class MediaDataService {

  private data: MediaItem[] = [
    { title: 'Shawshank Redemption', format: 'Movie', isLoaned: false },
    { title: 'Gone with the Wind', format: 'Movie', isLoaned: true }
  ]
  private subject = new BehaviorSubject<MediaItem[]>(this.data)


  getMediaLibraryItems(): Observable<MediaItem[]> {
    return this.subject.asObservable();
  }

  addItem(mediaItem: MediaCreate): void {
    this.data = [mediaItem, ...this.data];
    this.subject.next(this.data);
  }
}
