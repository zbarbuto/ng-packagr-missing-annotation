import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  selector: 'test-bold'
})
export class TestComponent {
  @Input() content: string;
}
