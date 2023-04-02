import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  inputText = '';

  @Output() textSubmitted = new EventEmitter<string>();

  submitText() {
    this.textSubmitted.emit(this.inputText);
    this.inputText = '';
  }
}
