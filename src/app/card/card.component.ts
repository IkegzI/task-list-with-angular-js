import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../app.component';
import {Todo} from '../app.component';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  interpolation: ['{{', '}}']

})

export class CardComponent implements OnInit {

  @Input() card: Card;
  @Input() todo: Todo;
  @Input() index: number;

  cardDate: Date = new Date();
  textColor: string = '';

  changeTitle() {
    // this.card.title = 'Title has been change'
  }

  inputHandler(value) {
    console.log(value);
    // this.card.title = value
  }

  changeHandler() {
    console.log(this)
  }

  ngOnInit() {

  }
}
