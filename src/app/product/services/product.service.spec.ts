import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { Product } from '../models/product.model';

describe('ProductService', () => {
  let service: ProductService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService],
    });

    service = TestBed.inject(ProductService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify(); // Verifica se não há solicitações pendentes
  });
  // Teste: Verifica se o ProductService foi criado corretamente
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Teste: Verifica se loadProducts faz a requisição GET correta e retorna a lista de produtos
  it('should load products', () => {
    // Dados fictícios para simular a resposta da API
    const mockProducts: Product[] = [
      {
        id: 1,
        name: 'Product A',
        price: 10,
        quantity: 5,
        manufactureDate: '2021-12-01',
        expiryDate: '2022-01-01',
        situation: 'expired',
      },
      {
        id: 2,
        name: 'Product B',
        price: 20,
        quantity: 10,
        manufactureDate: '2022-12-01',
        expiryDate: '2023-01-01',
        situation: 'notExpired',
      },
    ];

    // Chama o método loadProducts do serviço
    service.loadProducts().subscribe((products) => {
      expect(products).toEqual(mockProducts); // Verifica se os produtos retornados são iguais aos produtos fictícios
    });

    // Verifica se a requisição GET foi feita para a URL correta
    const req = httpTestingController.expectOne('assets/mocks/products.json');
    expect(req.request.method).toEqual('GET');

    // Fornece os dados fictícios como resposta da requisição
    req.flush(mockProducts);
  });
});
