import {Component, Input} from '@angular/core';

export interface Card {
  title: string,
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  getCards() {
  }

  @Input() card: Card;
  @Input() index: number;


  toggle = true


  cards: Card[] = [
    {
      title: 'Card 1',
      text: 'This is card 1'
    }, {
      title: 'Card 2',
      text: 'This is card 2'
    }, {
      title: 'Last Card',
      text: 'This is card last'
    }, {
      title: 'Last Card',
      text: 'This is card last'
    }
  ]

  toggleCards() {
    this.toggle = !this.toggle
  }


}
