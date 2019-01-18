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
  public headers = new Headers({ 'Content-Type': 'application/json' });

  public constructor(private http: Http) { }

  public getAll(): Observable<Task[]> {
    return this.http.get(this.tasksUrl)
      .catch(this.handlerErrors)
      .map((response: Response) => response.json().data as Task[]);
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


    return this.http.post(this.tasksUrl, body, { headers: this.headers })
      .catch(this.handlerErrors)
      .map(response => response.json().data as Task);
  }

  public update(task: Task): Observable<Task> {
    let url = `${this.tasksUrl}/${task.id}`;
    let body = JSON.stringify(task);

    return this.http.put(url, body, { headers: this.headers })
      .catch(this.handlerErrors)
      .map(() => task);
  }

  public delete(id: number): Observable<null> {
    let url = `${this.tasksUrl}/${id}`;

    return this.http.delete(url)
      .catch(this.handlerErrors)
      .map(() => null);
  }

  private handlerErrors(error: Response) {
    console.log('Salvando o erro em um arquivo de log =>', error);
    return Observable.throw(error);
  }
}
