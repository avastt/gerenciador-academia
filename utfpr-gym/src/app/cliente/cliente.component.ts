import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {

  @Input()
    email: string
  @Input()
    nome: string
  @Input()
    nascimento: string
  @Input()    
    endereco: string
  @Input()  
    complemento: string
  @Input()
    cidade: string
  @Input()    
    cep: string
}