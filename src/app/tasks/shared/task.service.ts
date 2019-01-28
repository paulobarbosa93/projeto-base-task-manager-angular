import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Angular2TokenService } from 'angular2-token';
import { Task } from './task.model';

@Injectable()

export class TaskService {
  public tasksUrl = 'tasks';

  public constructor(private tokenHttp: Angular2TokenService) { }

  public getAll(): Observable<Task[]> {
    let url = `${this.tasksUrl}?q[s]=updated_at+DESC`

    return this.tokenHttp.get(url)
      .catch(this.handlerErrors)
      .map((response: Response) => {
        let collection = response.json().data as Array<any>;
        let tasks: Task[] = [];

        collection.forEach(item => {
          let task = new Task(
            item.id,
            item.attributes.title,
            item.attributes.description,
            item.attributes.done,
            item.attributes.deadline
          );

          tasks.push(task);
        });

        return tasks;
      });
  }

  public getImportants(): Observable<Task[]> {
    return this.getAll()
      .catch(this.handlerErrors)
      .map(tasks => tasks.slice(0, 3));
  }

  public getById(id: number): Observable<Task> {
    let url = `${this.tasksUrl}/${id}`;

    return this.http.get(url)
      .catch(this.handlerErrors)
      .map((response: Response) => response.json().data as Task);
  }

  public create(task: Task): Observable<Task> {
    let body = JSON.stringify(task);


    return this.http.post(this.tasksUrl, body)
      .catch(this.handlerErrors)
      .map(response => response.json().data as Task);
  }

  public update(task: Task): Observable<Task> {
    let url = `${this.tasksUrl}/${task.id}`;
    let body = JSON.stringify(task);

    return this.http.put(url, body)
      .catch(this.handlerErrors)
      .map(() => task);
  }

  public delete(id: number): Observable<null> {
    let url = `${this.tasksUrl}/${id}`;

    return this.http.delete(url)
      .catch(this.handlerErrors)
      .map(() => null);
  }

  public searchByTitle(term: string): Observable<Task[]> {
    let url = `${this.tasksUrl}?title=${term}`;

    return this.http.get(url)
      .catch(this.handlerErrors)
      .map(response => response.json().data as Task[]);
  }

  private handlerErrors(error: Response) {
    console.log('Salvando o erro em um arquivo de log =>', error);
    return Observable.throw(error);
  }
}
