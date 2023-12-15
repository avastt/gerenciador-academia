export class Cliente {
    email: string;
    nome: string;
    nascimento: string;
    endereco: string;
    complemento: string;
    cidade: string;
    cep: string;
  
    constructor(
      email: string,
      nome: string,
      nascimento: string,
      endereco: string,
      complemento: string,
      cidade: string,
      cep: string
    ) {
      this.email = email;
      this.nome = nome;
      this.nascimento = nascimento;
      this.endereco = endereco;
      this.complemento = complemento;
      this.cidade = cidade;
      this.cep = cep;
    }
  }