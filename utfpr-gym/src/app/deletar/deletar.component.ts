import { Component } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent {

  constructor(private storageService: LocalStorageService){
  }

  onClick(): void {
    this.storageService.remove("email");
    this.storageService.remove("nome");
    this.storageService.remove("nascimento");
    this.storageService.remove("endereco");
    this.storageService.remove("complemento");
    this.storageService.remove("cidade");
    this.storageService.remove("cep");
  }
}
