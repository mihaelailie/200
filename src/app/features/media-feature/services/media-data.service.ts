import { BehaviorSubject, Observable, of } from 'rxjs';
import { MediaItem } from '../models';


// @Injectable({
//   providedIn: 'root',
// })


export class MediaDataService {

  private data: MediaItem[] = [
    { id: '1', title: 'Shawshank Redemption', format: 'Movie', isLoaned: false },
    { id: '2', title: 'Gone with the Wind', format: 'Movie', isLoaned: true }
  ]
  private subject = new BehaviorSubject<MediaItem[]>(this.data)


  getMediaLibraryItems(): Observable<MediaItem[]> {
    return this.subject.asObservable();
  }
}
