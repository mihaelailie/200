import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MediaCreate } from '../../models/media-create';

@Component({
  selector: 'app-media-entry',
  templateUrl: './media-entry.component.html',
  styleUrls: ['./media-entry.component.scss']
})
export class MediaEntryComponent implements OnInit {

  form!: FormGroup;
  @Output() itemAdded = new EventEmitter<MediaCreate>();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      format: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)])

    });

  }

  get title(): AbstractControl { return this.form.get('title') as AbstractControl; }
  get format(): AbstractControl { return this.form.get('format') as AbstractControl; }
  get isLoaned(): AbstractControl { return this.form.get('isLoaned') as AbstractControl; }

  add(elementToReceiveTheFocus: HTMLElement): void {

    this.itemAdded.emit({
      title: this.title.value,
      format: this.format.value,
      isLoaned: false
    });

    this.form.reset();
    elementToReceiveTheFocus.focus();

  }
}
