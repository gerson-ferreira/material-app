// product.service.ts
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products = [
    {
      "id": 1,
      "name": "Produto A",
      "price": 25.99,
      "quantity": 10,
      "manufactureDate": "2023-01-01",
      "expiryDate": "2023-12-31"
    },
    {
      "id": 2,
      "name": "Produto B",
      "price": 15.99,
      "quantity": 20,
      "manufactureDate": "2023-02-15",
      "expiryDate": "2024-02-14"
    },
    {
      "id": 3,
      "name": "Produto C",
      "price": 45.99,
      "quantity": 5,
      "manufactureDate": "2023-03-01",
      "expiryDate": "2023-09-30"
    }
  ]
  ;

  constructor() {}

  // Métodos para gerenciar produtos (adicionar, editar, excluir, listar, etc.)
}
