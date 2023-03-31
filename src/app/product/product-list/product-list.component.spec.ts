import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { ProductService } from '../services/product.service';
import { of } from 'rxjs';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productService: jest.Mocked<ProductService>;

  beforeEach(async () => {
    const productServiceMock: Partial<ProductService> = {
      loadProducts: jest.fn(),
    };

    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      providers: [{ provide: ProductService, useValue: productServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(
      ProductService
    ) as jest.Mocked<ProductService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testa se loadProducts chama o serviço productService.loadProducts
  it('should call loadProducts on ngOnInit', () => {
    productService.loadProducts.mockReturnValue(of([]));
    component.ngOnInit();
    expect(productService.loadProducts).toHaveBeenCalled();
  });

  // Testa se filtrarSituacao filtra os produtos corretamente
  it('should filter products by situation', () => {
    component.produtos = [
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

    component.filtroSituacao = 'expired';
    component.filtrarSituacao();
    expect(component.produtosFiltrados).toHaveLength(1);
    expect(component.produtosFiltrados[0].id).toBe(1);

    component.filtroSituacao = 'notExpired';
    component.filtrarSituacao();
    expect(component.produtosFiltrados).toHaveLength(1);
    expect(component.produtosFiltrados[0].id).toBe(2);

    component.filtroSituacao = 'all';
    component.filtrarSituacao();
    expect(component.produtosFiltrados).toHaveLength(2);
  });

  // Testa se a função sort ordena os produtos corretamente
  it('should sort products', () => {
    component.produtos = [
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
    component.produtosFiltrados = [...component.produtos]; // Adicione esta linha para atualizar a lista de produtos filtrados

    component.sort('name');
    expect(component.produtosFiltrados[0].id).toBe(2);
    expect(component.produtosFiltrados[1].id).toBe(1);

    component.sort('name');
    expect(component.produtosFiltrados[0].id).toBe(1);
    expect(component.produtosFiltrados[1].id).toBe(2);
  });
});
