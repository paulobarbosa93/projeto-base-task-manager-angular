import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

// errors
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

@Injectable()

export class LearningObservables {
  public constructor(private http: Http) {
    // creating observer object
    let observer = {
      next: function(newData) {
        console.log("Chamou o método next e passou como parâmetro o 'newData' => ", newData);
      },
      error: function(errorData) {
        console.log("Chamou o método error e passou como parâmetro o 'errorData' => ", errorData);
      },
      complete: function() {
        console.log("Chamou o método complete e encerrou");
      }
    };

    // this.http.get('api/tasks')
    //   .subscribe(observer);

    // this.http.get('api/tasks')
    //   .subscribe({
    //     next: function(newData){
    //       console.log("Chamou o método next e passou como parâmetro o 'newData' => ", newData);
    //     },
    //     error: function(errorData){
    //       console.log("Chamou o método error e passou como parâmetro o 'errorData' => ", errorData);
    //     },
    //     complete: function(){
    //       console.log("Chamou o método complete e encerrou");
    //     }
    //   });

    // this.http.get('api/tasks')
    //   .subscribe(
    //     function(newData){
    //       console.log("Chamou o método next e passou como parâmetro o 'newData' => ", newData);
    //     },
    //     function(errorData){
    //       console.log("Chamou o método error e passou como parâmetro o 'errorData' => ", errorData);
    //     },
    //     function(){
    //       console.log("Chamou o método complete e encerrou");
    //     }
    //   );

    // this.http.get('api/tasks')
    //   .subscribe(
    //     (newData) => {
    //       console.log("Chamou o método next e passou como parâmetro o 'newData' => ", newData);
    //     },
    //     (errorData) => {
    //       console.log("Chamou o método error e passou como parâmetro o 'errorData' => ", errorData);
    //     },
    //     () => {
    //       console.log("Chamou o método complete e encerrou");
    //     }
    //   );

    // this.http.get('api/tasks')
    //   .subscribe(
    //     newData => console.log("Chamou o método next e passou como parâmetro o 'newData' => ", newData),
    //     errorData => console.log("Chamou o método error e passou como parâmetro o 'errorData' => ", errorData),
    //     () => console.log("Chamou o método complete e encerrou")
    //   );

    // this.http.get('api/taskss')
    //   .catch(this.handlerErrors)
    //   .subscribe({
    //     next: function(newData) {
    //       console.log("Chamou o método next e passou como parâmetro o 'newData' => ", newData);
    //     },
    //     error: function(errorData) {
    //       console.log("Chamou o método error e passou como parâmetro o 'errorData' => ", errorData);
    //     },
    //     complete: function() {
    //       console.log("Chamou o método complete e encerrou");
    //     }
    //   });
  }

  public handlerErrors(error: Response) {
    console.log("salvando erro em banco de dados para o desenvolvedor => ", error);
    return Observable.throw(error);
  }
}
