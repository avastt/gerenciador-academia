import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';



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
  

  constructor(){}

  ngOnChanges(changes: SimpleChanges): void {
      
  }

  ngOnInit(): void {
  }

  onClick(): void {
    console.log(this.email);
  }
}
