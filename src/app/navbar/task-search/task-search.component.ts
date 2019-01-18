import { Component } from '@angular/core';

import { Task } from '../../tasks/shared/task.model';
import { TaskService } from '../../tasks/shared/task.service';

@Component({
  selector: 'task-search',
  templateUrl: './task-search.component.html'
})

export class TaskSearchComponent {
  public constructor(private taskService: TaskService) { }

  public search(term: string): void {
    console.log(term);
  }
}
