import { Component } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Cliente } from '../Cliente';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {

  listaDeClientes: Cliente[] | null = [];

  constructor(private storageService: LocalStorageService){
    
    this.listaDeClientes = storageService.get("clientes");
    console.log(storageService.get("clientes"))
  }

}
