import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private produtosService: ProdutosService) { }

  listaProdutos = [] as Produtos[]

  ngOnInit(): void {

    this.carregarProdutos()
}

  carregarProdutos(){
    this.produtosService.getProdutos().subscribe((produtosRecebidos: Produtos[]) =>{
      this.listaProdutos = produtosRecebidos;
      console.log(this.listaProdutos)
    })
  }
}

    
let email = document.querySelector('#email')

function sendEmail(){
    let emailDigitado = email;
    console.log(emailDigitado)
}
