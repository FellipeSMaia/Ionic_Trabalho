import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private produtos: Produto[] = [
    {
      codigo: 'PRATO-01',
      descricao: 'Hambúrguer Artesanal Cheddar Bacon',
      valorNormal: 32.9,
      valorComDesconto: 28.9,
      detalhes:
        'Hambúrguer 180g de carne bovina, queijo cheddar, bacon crocante, alface, tomate, cebola roxa e molho especial da casa no pão brioche',
    },
    {
      codigo: 'PRATO-02',
      descricao: 'Pizza Margherita Especial',
      valorNormal: 45.9,
      valorComDesconto: 39.9,
      detalhes:
        'Pizza tradicional com molho de tomate, mussarela de búfala, manjericão fresco, azeite extra virgem e orégano na massa artesanal',
    },
    {
      codigo: 'PRATO-03',
      descricao: 'Salmão Grelhado com Quinoa',
      valorNormal: 58.9,
      valorComDesconto: 52.9,
      detalhes:
        'Filé de salmão grelhado na brasa, quinoa tricolor, legumes refogados, molho de ervas finas e limão siciliano',
    },
    {
      codigo: 'BEBIDA-01',
      descricao: 'Suco Natural de Laranja 500ml',
      valorNormal: 12.9,
      valorComDesconto: 9.9,
      detalhes:
        'Suco 100% natural de laranja pêra, espremido na hora, rico em vitamina C, servido gelado com gelo',
    },
    {
      codigo: 'PRATO-04',
      descricao: 'Risotto de Camarão com Açafrão',
      valorNormal: 67.9,
      valorComDesconto: 59.9,
      detalhes:
        'Risotto cremoso com camarões grandes, açafrão, vinho branco, queijo parmesão, manteiga e salsinha fresca',
    },
    {
      codigo: 'SOBREMESA-01',
      descricao: 'Petit Gâteau de Chocolate Belga',
      valorNormal: 24.9,
      valorComDesconto: 19.9,
      detalhes:
        'Bolinho quente de chocolate belga com centro cremoso, acompanha sorvete de baunilha artesanal e calda de frutas vermelhas',
    },
    {
      codigo: 'BEBIDA-02',
      descricao: 'Caipirinha Premium de Cachaça Artesanal',
      valorNormal: 18.9,
      valorComDesconto: 15.9,
      detalhes:
        'Caipirinha com cachaça artesanal envelhecida, limão tahiti fresco, açúcar mascavo e gelo especial, servida em copo rocks',
    },
    {
      codigo: 'PRATO-05',
      descricao: 'Lasanha da Nonna Italiana',
      valorNormal: 42.9,
      valorComDesconto: 37.9,
      detalhes:
        'Lasanha tradicional com molho bolonhesa caseiro, presunto, mussarela, molho branco e queijo parmesão gratinado',
    },
    {
      codigo: 'ENTRADA-01',
      descricao: 'Tábua de Frios Premium',
      valorNormal: 78.9,
      valorComDesconto: 69.9,
      detalhes:
        'Seleção de queijos nacionais e importados, embutidos artesanais, frutas secas, geleias especiais, torradinhas e crackers para 2-3 pessoas',
    },
    {
      codigo: 'PRATO-06',
      descricao: 'Picanha Nobre na Brasa 400g',
      valorNormal: 89.9,
      valorComDesconto: 79.9,
      detalhes:
        'Picanha nobre 400g grelhada na brasa, acompanha farofa de bacon, vinagrete, arroz branco e feijão tropeiro mineiro',
    },
    {
      codigo: 'BEBIDA-03',
      descricao: 'Vinho Tinto Reserva Cabernet Sauvignon',
      valorNormal: 85.9,
      valorComDesconto: 72.9,
      detalhes:
        'Vinho tinto seco encorpado, safra 2019, notas de frutas vermelhas maduras, especiarias e carvalho, harmoniza perfeitamente com carnes',
    },
    {
      codigo: 'SOBREMESA-02',
      descricao: 'Cheesecake de Frutas Vermelhas',
      valorNormal: 22.9,
      valorComDesconto: 18.9,
      detalhes:
        'Cheesecake cremoso no biscoito de graham, cobertura de frutas vermelhas frescas, calda de morango e chantilly artesanal',
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
