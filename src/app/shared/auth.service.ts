import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Angular2TokenService } from 'angular2-token';

import { User } from './user.model';

@Injectable()

export class AuthService {
  public constructor(private tokenService: Angular2TokenService) { }

  public signUp(user: User) : Observable<Response> {
    return this.tokenService.registerAccount(user as any)
      .catch(this.handlerErrors);
  }

  public signIn(uid: string, password: string) {
    // call Angular2-Token signIn method
    // returns a Observable<Response>
  }

  public signOut(): Observable<Response> {
    return this.tokenService.signOut()
      .catch(this.handlerErrors);
  }

  public userSignedIn(): boolean {
    return this.tokenService.userSignedIn();
  }

  private handlerErrors(error: Response) {
    console.log('Salvando o erro em um arquivo de log =>', error);
    return Observable.throw(error);
  }
}
