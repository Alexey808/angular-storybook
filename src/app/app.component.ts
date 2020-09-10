import { Component } from '@angular/core';
import {ITask} from './components/task/task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  task: ITask = {
    id: 'id-1',
    state: 'UNCHECKED',
    title: 'name-1',
  };

  public onToggle(task: ITask): void {
    console.log(task);
  }
}
