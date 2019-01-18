import { Injectable } from '@angular/core'
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable()

export class InMemoryTaskDataService implements InMemoryDbService{
  public createDb(){
    let tasks = [
      { id: 1, title: 'Ir a academia' },
      { id: 2, title: 'Pagar boleto' },
      { id: 3, title: 'Seguir uma dieta' },
      { id: 4, title: 'Ler 24 livros' },
      { id: 5, title: 'Estudar mais' },
      { id: 6, title: 'Abrir um negócio próprio' },
      { id: 7, title: 'Comprar um carro' }
    ];

    return { tasks }
  }
}
