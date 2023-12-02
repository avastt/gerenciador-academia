import { Component } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';


@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.css']
})
export class AlterarComponent {

  updateEmail: String
  updateNome: String
  updateNascimento: String
  updateEndereco: String
  updateComplemento: String
  updateCidade: String
  updateCep: String

  constructor(private storageService: LocalStorageService){
  }

  onClick(): void {
    this.storageService.set("email", this.updateEmail);
    this.storageService.set("nome", this.updateNome);
    this.storageService.set("nascimento", this.updateNascimento);
    this.storageService.set("endereco", this.updateEndereco);
    this.storageService.set("complemento", this.updateComplemento);
    this.storageService.set("cidade", this.updateCidade);
    this.storageService.set("cep", this.updateCep);
  }
}
