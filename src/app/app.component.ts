import { Component } from '@angular/core';

import { TokenService } from './shared/token.service';
import { LearningObservables } from './learning-observables.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LearningObservables]
})

export class AppComponent {
  title = 'Gerenciador de Tarefas';

  public constructor(
    private learningObservables: LearningObservables,
    private tokenService: TokenService
  ) {
    this.tokenService.init({
      apiBase: 'https://taskmanager-api-paulo.herokuapp.com',
      globalOptions: {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.taskmanager.v2'
        }
      }
    });
  }
}
