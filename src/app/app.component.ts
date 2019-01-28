import { Component } from '@angular/core';

import { Angular2TokenService } from 'angular2-token'
import { LearningObservables } from './learning-observables.service'

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
    private tokenService: Angular2TokenService
  ) {
    this.tokenService.init({
      apiBase: 'http://api.task-manager.test:3004',
      globalOptions: {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.taskmanager.v2'
        }
      }
    });
  }
}
