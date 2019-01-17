import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

import { Task } from './task.model';

@Injectable()

export class TaskService {
  public tasksUrl = 'api/tasks';

  public constructor(private http: Http) { }

  public getTasks(): Observable<Task[]> {
    return this.http.get(this.tasksUrl)
      .catch(this.handlerErrors)
      .map((response: Response) => response.json().data as Task[]);
  }

  public getImportantTasks(): Observable<Task[]> {
    return this.getTasks()
      .catch(this.handlerErrors)
      .map(tasks => tasks.slice(0, 3));
  }

  public getTask(id: number): Observable<Task> {
    let url = `${this.tasksUrl}/${id}`;

    return this.http.get(url)
      .catch(this.handlerErrors)
      .map((response: Response) => response.json().data as Task);
  }

  public createTask(task: Task): Observable<Task> {
    let body = JSON.stringify(task);
    let headers = new Headers({ 'Content-Type': 'application/json' });

    return this.http.post(this.tasksUrl, body, { headers: headers })
      .catch(this.handlerErrors)
      .map(response => response.json().data as Task);
  }

  public updateTask(task: Task): Observable<Task> {
    let url = `${this.tasksUrl}/${task.id}`;
    let body = JSON.stringify(task);
    let headers = new Headers({ 'Content-Type': 'application/json' });

    return this.http.put(url, body, { headers: headers })
      .catch(this.handlerErrors)
      .map(() => task);
  }

  public deleteTask(id: number): Observable<null> {
    let url = `${this.tasksUrl}/${id}`;
    let headers = new Headers({ 'Content-Type': 'application/json' });

    return this.http.delete(url)
      .catch(this.handlerErrors)
      .map(() => null);
  }

  private handlerErrors(error: Response) {
    console.log('Salvando o erro em um arquivo de log =>', error);
    return Observable.throw(error);
  }
}
