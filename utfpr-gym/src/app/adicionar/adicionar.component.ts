import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit, OnChanges {
    adicionar: 'adicionar'

    email: string
    nome: string
    nascimento: string
    endereco: string
    complemento: string
    cidade: string
    cep: string
  

  constructor(private storageService: LocalStorageService){}

  ngOnChanges(changes: SimpleChanges): void {
      
  }

  ngOnInit(): void {
    
  }

  onClick(): void {
    this.storageService.set("nome", this.nome)
    this.storageService.set("email", this.email)
    this.storageService.set("nascimento", this.nascimento)
    this.storageService.set("endereco", this.endereco)
    this.storageService.set("complemento", this.complemento)
    this.storageService.set("cidade", this.cidade)
    this.storageService.set("cep", this.cep)
  }
}
