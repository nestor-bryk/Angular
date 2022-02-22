import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() arrTasks!: Array<any>;
  @Output() countTasks = new EventEmitter<number>();

  public editPanel: boolean = false;
  public inputEdit!: string;
  public indexTask!: number;

  constructor() { }

  ngOnInit(): void {
  }

  checking(index: number): void {
      if (this.arrTasks[index].status) {
        this.arrTasks[index].status = false
      } else {
        this.arrTasks[index].status = true;
      }
      console.log(this.arrTasks)
  }

  statusTask(index: number) {
    if(this.arrTasks[index].status) {
      return 'Done';
    } else {
      return 'in PROGRESS';
    }
  }

  isColor(index: number) {
    if(this.arrTasks[index].status) {
      return 'green';
    } else {
      return 'red';
    }
  }

  sendCountTask() {
    this.countTasks.emit(this.arrTasks.length)
  }

  editTask(index: number) {
    this.indexTask = index;
    this.inputEdit = this.arrTasks[index].name;
    this.editPanel = true;
  }

  saveEdit() {
    if(this.inputEdit) {
      this.arrTasks[this.indexTask].name = this.inputEdit;
      this.editPanel = false;
    } else {
      alert('Enter a name for the task!!!')
    }
  }

  activeButton(index: number) {
    if (this.arrTasks[index].status) {
      return false
    } else {
      return true
    }
  }

  deleteTask(index: number) {
    this.arrTasks.splice(index, 1);

    this.sendCountTask()
  }
}
