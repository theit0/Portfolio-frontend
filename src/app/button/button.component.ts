import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  public buttonText = '';

@Input()
set text(name: string) {
  this.buttonText = name;
}
get name(): string {
  return this.buttonText;
}

constructor() {}


}

