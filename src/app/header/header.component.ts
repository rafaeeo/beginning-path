import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public carrinhoService: CarrinhoService,
    public produtosService: ProdutosService
  ) { }

  ngOnInit(): void {
  }

}
