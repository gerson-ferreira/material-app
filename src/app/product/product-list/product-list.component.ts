import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  produtos: Product[] = [];
  produtosFiltrados: Product[] = [];
  sortOrder: 'asc' | 'desc' = 'asc';
  sortKey: keyof Product = 'name';
  filtroSituacao: string = 'all';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
    this.filtrarSituacao();
    this.atualizarSituacao();
  }

  loadProducts(): void {
    this.productService.loadProducts().subscribe({
      next: (products) => {
        this.produtos = products;
        this.filtrarSituacao();
        this.atualizarSituacao();
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      },
    });
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
          (p) => p.situation !== 'expired'
        );
        break;
      default:
        this.produtosFiltrados = this.produtos;
        break;
    }
  }

  atualizarSituacao(): void {
    const today = new Date();
    this.produtos = this.produtos.map((produto) => {
      const dataValidade = new Date(produto.expiryDate);
      produto.situation = dataValidade < today ? 'expired' : 'notExpired';
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
