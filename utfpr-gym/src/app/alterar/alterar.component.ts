import { Component } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Cliente } from '../Cliente';


@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.css']
})
export class AlterarComponent {

  listaDeClientes: Cliente[] = [];
  clienteAlterar: Cliente = new Cliente('', '', '', '', '', '', ''); // Objeto temporário para armazenar dados do formulário


  alterarCliente() {
    // Obtém a lista inicial do LocalStorage
    this.listaDeClientes = this.storageService.get("clientes") || [];

    const indiceCliente = this.listaDeClientes.findIndex(cliente => cliente.email === this.clienteAlterar.email);

    // Se o cliente existir, altera os dados
    if (indiceCliente !== -1) {
      this.listaDeClientes[indiceCliente] = this.clienteAlterar;
      console.log(this.listaDeClientes)
      this.storageService.set("clientes", this.listaDeClientes);
    } else {
      console.error('Cliente não encontrado para alteração.');
    }
  }

  constructor(private storageService: LocalStorageService){
  }
}
