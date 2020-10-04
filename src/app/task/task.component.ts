import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../app.component";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Input() index_task: number;
  constructor() { }

  ngOnInit(): void {
  }

}
