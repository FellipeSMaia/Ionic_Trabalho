import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private produtos: Produto[] = [
    {
      codigo: 'PROD-01',
      descricao: 'Smartphone Samsung Galaxy A54',
      valorNormal: 1299.9,
      valorComDesconto: 999.9,
      detalhes:
        'Smartphone com 128GB de armazenamento, câmera tripla de 50MP e tela Super AMOLED de 6.4 polegadas',
    },
    {
      codigo: 'PROD-02',
      descricao: 'Notebook Dell Inspiron 15',
      valorNormal: 2499.99,
      valorComDesconto: 1899.99,
      detalhes:
        'Notebook com processador Intel Core i5, 8GB RAM, SSD 256GB e tela Full HD de 15.6 polegadas',
    },
    {
      codigo: 'PROD-03',
      descricao: 'Smart TV LG 55" 4K',
      valorNormal: 2199.9,
      valorComDesconto: 1699.9,
      detalhes:
        'Smart TV LED 55 polegadas com resolução 4K UHD, HDR e sistema operacional webOS',
    },
    {
      codigo: 'PROD-04',
      descricao: 'Fone de Ouvido JBL Tune 510BT',
      valorNormal: 199.9,
      valorComDesconto: 149.9,
      detalhes:
        'Fone de ouvido Bluetooth com cancelamento de ruído, bateria de 40 horas e som JBL Pure Bass',
    },
    {
      codigo: 'PROD-05',
      descricao: 'Tablet iPad Air 64GB',
      valorNormal: 3499.99,
      valorComDesconto: 2999.99,
      detalhes:
        'iPad Air com chip A14 Bionic, tela Liquid Retina de 10.9 polegadas e suporte ao Apple Pencil',
    },
    {
      codigo: 'PROD-06',
      descricao: 'Console PlayStation 5',
      valorNormal: 4199.99,
      valorComDesconto: 3799.99,
      detalhes:
        'Console de videogame com SSD ultrarrápido, ray tracing e controle DualSense com feedback háptico',
    },
    {
      codigo: 'PROD-07',
      descricao: 'Apple Watch Series 9 45mm',
      valorNormal: 2899.9,
      valorComDesconto: 2399.9,
      detalhes:
        'Smartwatch com GPS, tela Always-On Retina, monitoramento de saúde e resistência à água até 50 metros',
    },
    {
      codigo: 'PROD-08',
      descricao: 'Cafeteira Nespresso Essenza Mini',
      valorNormal: 349.9,
      valorComDesconto: 279.9,
      detalhes:
        'Cafeteira compacta com sistema de cápsulas, 2 tamanhos de café, aquecimento rápido em 25 segundos',
    },
    {
      codigo: 'PROD-09',
      descricao: 'Kindle Paperwhite 11ª Geração',
      valorNormal: 549.9,
      valorComDesconto: 429.9,
      detalhes:
        'E-reader com tela de 6.8", luz ajustável, resistente à água e bateria que dura semanas',
    },
    {
      codigo: 'PROD-10',
      descricao: 'Air Fryer Philips Walita Essential',
      valorNormal: 499.9,
      valorComDesconto: 399.9,
      detalhes:
        'Fritadeira elétrica sem óleo com capacidade de 4.1L, timer digital e 7 programas pré-definidos',
    },
    {
      codigo: 'PROD-11',
      descricao: 'Câmera Canon EOS Rebel T7',
      valorNormal: 1899.9,
      valorComDesconto: 1499.9,
      detalhes:
        'Câmera DSLR 24.1MP com lente 18-55mm, gravação Full HD e conectividade Wi-Fi/Bluetooth',
    },
    {
      codigo: 'PROD-12',
      descricao: 'Echo Dot 5ª Geração Alexa',
      valorNormal: 299.9,
      valorComDesconto: 199.9,
      detalhes:
        'Smart speaker com Alexa, som mais potente, hub de casa inteligente e controle por voz',
    },
  ];

  constructor() {}

  getProdutos(): Produto[] {
    return this.produtos;
  }

  getProdutoPorCodigo(codigo: string): Produto | undefined {
    return this.produtos.find((p) => p.codigo === codigo);
  }
}
