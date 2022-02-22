import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-lesson03',
  templateUrl: './lesson03.component.html',
  styleUrls: ['./lesson03.component.scss']
})
export class Lesson03Component implements OnInit {
  @ViewChild(ChildComponent) child!: ChildComponent;

  public count!: number;
  public inputText!: string;
  public addTasks: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTask(): void {
    if(this.inputText) {
      this.addTasks.push(
        {
          name: this.inputText,
          status: false
        }
      )
      this.inputText = ''
    }else {
      alert('Enter a name for the task!!!')
    }
    this.child.sendCountTask();
  }

  getCountTask(count: number) {
    this.count = count;
  }
}
