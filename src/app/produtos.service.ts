import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';
import { ProdutosComponent } from './produtos/produtos.component';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos;

  constructor() { }

  getAll(){ 
    return this.produtos;
  }

  getOne(produtoId: number) {
    return this.produtos.find(produtos => produtos.id = produtoId);
  }
}
