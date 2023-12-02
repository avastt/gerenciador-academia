import { Component, Input } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {

  nome= String;
  email= String;
  nascimento= String;
  endereco= String;
  complemento= String;
  cidade= String;
  cep= String;

  constructor(private storageService: LocalStorageService){
    
    this.nome = storageService.get("nome");
    this.email = storageService.get("email");
    this.nascimento = storageService.get("nascimento");
    this.endereco = storageService.get("endereco");
    this.complemento = storageService.get("complemento");
    this.cidade = storageService.get("cidade");
    this.cep = storageService.get("cep");
  }

}
