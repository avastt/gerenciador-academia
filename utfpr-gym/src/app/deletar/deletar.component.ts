import { Component } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Cliente } from '../Cliente';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent {

  email: String;
  listaDeClientes: Cliente[] = [];

  deletarCliente() {
    // Obtém a lista inicial do LocalStorage
    this.listaDeClientes = this.storageService.get("clientes") || [];

    const indiceCliente = this.listaDeClientes.findIndex(cliente => cliente.email === this.email);

    // Se o cliente existir, deleta os dados
    if (indiceCliente !== -1) {
      this.listaDeClientes.splice(indiceCliente, 1);
      this.storageService.set("clientes", this.listaDeClientes);
    } else {
      console.error('Cliente não encontrado para remoção.');
    }
  }

  constructor(private storageService: LocalStorageService){
  }
}
