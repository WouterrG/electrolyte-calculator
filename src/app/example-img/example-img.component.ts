import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-example-img',
  templateUrl: './example-img.component.html',
  styleUrls: ['./example-img.component.css'],
})
export class ExampleImgComponent {
  @Input() imageTitle: string = 'Placeholder Title';
  @Input() imageSrc: string = '';

  constructor() {}
}
