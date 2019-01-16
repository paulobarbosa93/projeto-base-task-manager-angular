import { Http } from '@angular/http'
import { Injectable } from '@angular/core'

@Injectable()

export class LearningObservables {
  public constructor(private http: Http){
    // creating observer object
    let observer = {
      next: function(newData){
        console.log("Chamou o método next e passou como parâmetro o 'newData' => ", newData);
      },
      error: function(errorData){
        console.log("Chamou o método error e passou como parâmetro o 'errorData' => ", errorData);
      },
      complete: function(){
        console.log("Chamou o método complete e encerrou");
      }
    };

    this.http.get('api/tasks')
      .subscribe(observer);
  }
}
