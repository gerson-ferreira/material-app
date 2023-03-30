import { Component, OnInit } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  situation: string;
  manufactureDate: string;
  expiryDate: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  produtos: Product[] = [
    {
      id: 1,
      name: 'Produto A',
      price: 25.99,
      quantity: 10,
      situation: 'expired',
      manufactureDate: '2023-01-01',
      expiryDate: '2023-12-31',
    },
  ];
  produtosFiltrados: Product[] = [];

  sortOrder: 'asc' | 'desc' = 'asc';
  sortKey: keyof Product = 'name';
  filtroSituacao: string = 'all';

  constructor() {}

  ngOnInit(): void {
    this.filtrarSituacao();
    this.atualizarSituacao();
  }

  filtrarSituacao(): void {
    switch (this.filtroSituacao) {
      case 'expired':
        this.produtosFiltrados = this.produtos.filter(
          (p) => p.situation === 'expired'
        );
        break;
      case 'notExpired':
        this.produtosFiltrados = this.produtos.filter(
          (p) => p.situation !== 'notExpired'
        );
        break;
      default:
        this.produtosFiltrados = this.produtos;
    }
  }

  atualizarSituacao(): void {
    const today = new Date();
    this.produtos = this.produtos.map((produto) => {
      const dataValidade = new Date(produto.expiryDate);
      produto.situation = dataValidade < today ? 'Vencido' : 'No prazo';
      return produto;
    });
  }

  sort(key: keyof Product): void {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.sortKey = key;
    this.produtosFiltrados.sort((a, b) => {
      if (a[key] < b[key]) {
        return this.sortOrder === 'asc' ? -1 : 1;
      } else if (a[key] > b[key]) {
        return this.sortOrder === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  filtrarProdutos(filtro: string): void {}
}
