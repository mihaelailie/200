import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaTrackingComponent } from './media-tracking.component';

describe('MediaTrackingComponent', () => {
  let component: MediaTrackingComponent;
  let fixture: ComponentFixture<MediaTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaTrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
