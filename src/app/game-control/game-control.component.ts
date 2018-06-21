import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  private timer;
  @Output('numberEvent') numberEventEmitter = new EventEmitter< {type: 'odd'|'even', value: number} >();

  constructor() { 
    
  }

  onStartGame() {
    let counter = 0;
    this.timer = setInterval(() => {
      if(counter % 2 == 0) {
        this.numberEventEmitter.emit({
          type: 'even',
          value: counter
        });
      } else {
        this.numberEventEmitter.emit({
          type: 'odd',
          value: counter
        });
      }
      counter ++;
    }, 1500); 
  }

  onStopGame() {
    clearInterval(this.timer)
  }
}
