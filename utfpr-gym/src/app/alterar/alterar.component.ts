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

    this.validarCEP(this.clienteAlterar.cep);

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

  validarCEP(cep: string): boolean {
    // Expressão regular para verificar se o CEP tem o formato correto (XXXXXXXX)
    const regexCEP = /^[0-9]{8}$/;
    return regexCEP.test(cep);
  }

  constructor(private storageService: LocalStorageService){
  }
}
