import {Component, OnInit} from '@angular/core';
import {timeout} from "rxjs/operators";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  interpolation: ['{{', '}}']

})

export class CardComponent implements OnInit {

  title = 'Мой первый проект';

  text = '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consectetur dolorum in. Animi beatae consequuntur\n' +
    '    doloremque, ea esse fugiat labore laboriosam libero numquam officiis quaerat quam qui quos suscipit voluptates?';

  number = 42;

  array = [1, 1, 2, 3, 5, 8, 13];

  obj = {
    name: 'alex', info: {
      age: 25,
      job: 'Front'
    }
  };

  imgUrl = 'https://www.tagesjump.ru/media/catalog/product/cache/0f831c1845fc143d00d6d1ebc49f446a/a/n/angular-base.png';
  imgUrl1 = 'https://2.bp.blogspot.com/-a1FoGKR_Wa0/Vka3UN7qdrI/AAAAAAAAEXk/_ik5FfinHZ8/s320/AngularJS.png';
  imgUrl2 = 'https://c7.uihere.com/files/186/153/320/vue-js-javascript-framework-graphql-software-framework-t-v-thumb.jpg';

  disabled = false;
  getInfo() : string {
    return 'Thi is my info'
  }

  getInfo_new() {
    return 'Thi is my info'
  }

  ngOnInit() {
    setTimeout(() => {
      this.imgUrl = this.imgUrl2;
      this.disabled = true;
    }, 3000)
  }
}
