import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-exercise-0';

  // Testing
  evenLengthWords: string[] = [];
  oddLengthWords: string[] = [];
   
  
  onTextSubmitted(text: string) {
  const words = text.split(' ');
  for (let word of words) {
    if (word.length % 2 === 0) {
      this.evenLengthWords.push(word);
    } else {
      this.oddLengthWords.push(word);
    }
  }
}
  
}


