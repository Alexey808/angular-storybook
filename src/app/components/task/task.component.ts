import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ITask} from './task.interface';

const STATE = {
  unchecked: 'UNCHECKED',
  checked: 'CHECKED',
};

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task: ITask;
  @Output() onToggle = new EventEmitter<ITask>();

  readonly state = STATE;

  constructor() {}

  public onclick(): void {
    this.task.state = this.task.state === this.state.unchecked
      ? this.state.checked
      : this.state.unchecked;
    this.onToggle.emit(this.task);
  }
}
