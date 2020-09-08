import { Component, EventEmitter, Input, Output } from '@angular/core';
import {ITask} from './task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  title: string;
  @Input() task: ITask;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onPinTask: EventEmitter<any> = new EventEmitter();

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onArchiveTask: EventEmitter<any> = new EventEmitter();

  constructor() {}

  public onPin(id: any): void {
    this.onPinTask.emit(id);
  }

  public onArchive(id: any): void {
    this.onArchiveTask.emit(id);
  }
}
