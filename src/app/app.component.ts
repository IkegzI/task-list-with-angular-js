import {Component, Input} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  totalAngularPackages;

  // constructor(private http_: Http) { }
  constructor(private httpClient: HttpClient) {
  }

  getCards() {
    console.log('1')
    this.httpClient.get<any>('http://localhost:3000').subscribe((data: any[]) => {
      console.log(data)
    });
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
