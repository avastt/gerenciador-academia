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

    this.validarCEP(this.clienteAtual.cep);
    // Obtém a lista inicial do LocalStorage
    const listaInicial = this.storageService.get("clientes");
  
    // Verifica se a lista inicial é uma array
    if (Array.isArray(listaInicial)) {
      // Atribui a lista inicial a this.listaDeClientes
      this.listaDeClientes = listaInicial;
    } else {
      // Se não for uma array, inicializa this.listaDeClientes como uma array vazia
      this.listaDeClientes = [];
    }
  
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
  
    console.log(this.listaDeClientes);
  
    // Salva a lista atualizada no LocalStorage
    this.storageService.set("clientes", this.listaDeClientes);
  }

  validarCEP(cep: string): boolean {
    // Expressão regular para verificar se o CEP tem o formato correto (XXXXXXXX)
    const regexCEP = /^[0-9]{8}$/;
    return regexCEP.test(cep);
  }

   adicionar: 'adicionar'

  constructor(private storageService: LocalStorageService){}

  ngOnChanges(changes: SimpleChanges): void {
      
  }

  ngOnInit(): void {
    
  }
}
