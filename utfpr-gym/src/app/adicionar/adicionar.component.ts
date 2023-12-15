import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Cliente } from '../Cliente';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit, OnChanges {

  listaDeClientes: Cliente[] = [];
  clienteAtual: Cliente = new Cliente('', '', '', '', '', '', ''); // Objeto temporário para armazenar dados do formulário

  salvarCliente() {
    // Obtém a lista inicial do LocalStorage
    this.listaDeClientes = this.storageService.get("clientes") || [];

    // Adiciona o cliente atual à lista
    this.listaDeClientes.push(
      new Cliente(
        this.clienteAtual.email,
        this.clienteAtual.nome,
        this.clienteAtual.nascimento,
        this.clienteAtual.endereco,
        this.clienteAtual.complemento,
        this.clienteAtual.cidade,
        this.clienteAtual.cep
      )
    );

    console.log(this.listaDeClientes)

    this.storageService.set("clientes", this.listaDeClientes)
  }

   adicionar: 'adicionar'

  constructor(private storageService: LocalStorageService){}

  ngOnChanges(changes: SimpleChanges): void {
      
  }

  ngOnInit(): void {
    
  }
}
