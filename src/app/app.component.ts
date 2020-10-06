import {Component, Input} from '@angular/core'
import {HttpClient} from '@angular/common/http'

export interface Card {
  title: string,
  text: string,
}

export interface Todo {
  title: string,
  id: string,
  todos: []
}

export interface Task {
  id_task: string,
  text: string,
  isCompleted: false
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @Input() todo: Todo
  @Input() task: Task
  @Input() card: Card
  @Input() index: number
  @Input() index_task: number

  toggleCards() {
    this.toggle = !this.toggle
  }

  constructor(private http: HttpClient) {
  }

  getResponseAnswer(msg) {
    this.arr = msg
    this.todoses = this.arr
    return msg
  }

  getCards() {
    this.http.get('https://floating-cliffs-22263.herokuapp.com/projects.json', {reportProgress: true}).subscribe(msg => this.getResponseAnswer(msg))
  }

  ngOnInit() {
    this.getCards()
  }

  arr = []


  noCards = true

  toggle = true
  todoses: Todo[] = this.arr
}
