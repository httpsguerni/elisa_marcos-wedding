import { Component, computed, signal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Qr } from '../qr/qr';
import { pixCopiaECola } from '../../utils/pix';

interface Sugestao {
  icone: string;
  titulo: string;
  descricao: string;
  valor: number;
}

@Component({
  selector: 'app-presentes',
  imports: [NgTemplateOutlet, RouterLink, Qr],
  templateUrl: './presentes.html',
  styleUrl: './presentes.css',
  host: { '(document:keydown.escape)': 'fechar()' }
})
export class Presentes {
  protected readonly listaUrl = 'presentes';
  protected readonly chavePix = 'elisamarcoswedding@gmail.com';
  protected readonly codigoPix = this.gerarPix();

  protected readonly copiado = signal(false);
  protected readonly selecionado = signal<Sugestao | null>(null);
  protected readonly concluido = signal(false);
  protected readonly codigoPresente = computed(() => this.gerarPix(this.selecionado()?.valor));

  protected readonly sugestoes: Sugestao[] = [
      { icone: 'restaurant', titulo: 'Jantar Romântico', descricao: 'Lua de mel', valor: 250 },
    { icone: 'outdoor_grill', titulo: 'Kit churrasco para o noivo', descricao: 'Para ele finalmente provar que sabe o ponto da carne', valor: 150 },
    { icone: 'movie', titulo: 'Noite da pipoca', descricao: 'Filme, sofá e a eterna briga pela escolha do filme', valor: 60 },
    { icone: 'pool', titulo: 'Dia de natação', descricao: 'Para queimar as calorias da festa', valor: 80 },
    { icone: 'celebration', titulo: 'Uma noite no karaokê de encontros e desencontros', descricao: 'Uma noite de música, risadas e histórias', valor: 250 },
    { icone: 'flight_takeoff', titulo: 'Passagens Aéreas', descricao: 'Ida para a viagem', valor: 300 },
    { icone: 'flight_land', titulo: 'Passagens Aéreas', descricao: 'Volta da viagem', valor: 300 },
    { icone: 'hiking', titulo: 'Trilha a dois', descricao: 'Para testar a paciência um do outro morro acima', valor: 100 },
    { icone: 'fitness_center', titulo: 'Mês de academia', descricao: 'Para cumprir a promessa pós-casamento', valor: 150 },
    { icone: 'landscape', titulo: 'Passeio dos Noivos', descricao: 'Ajuda na viagem', valor: 300 },
    { icone: 'luggage', titulo: 'Malas de Viagem', descricao: 'Para muitas aventuras', valor: 300 },
    { icone: 'spa', titulo: 'Day Spa', descricao: 'Para relaxar juntos', valor: 100 },
    { icone: 'celebration', titulo: 'Brinde', descricao: 'Para celebrarmos a nova fase', valor: 100 },
    { icone: 'favorite', titulo: 'Mimo', descricao: 'Para tornar nosso dia ainda mais especial', valor: 50 },
    { icone: 'favorite', titulo: 'Mimo', descricao: 'Para tornar nosso dia ainda mais especial', valor: 50 },
    { icone: 'wine_bar', titulo: 'Vinho para a noiva', descricao: 'Para aguentar as piadas do noivo', valor: 90 },
    { icone: 'nightlife', titulo: 'Noite de dança', descricao: 'Para o noivo aprender algo além do dois pra lá, dois pra cá', valor: 120 },
  ];

  protected brl(valor: number) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  protected async copiar() {
    await navigator.clipboard.writeText(this.chavePix);
    this.copiado.set(true);
    setTimeout(() => this.copiado.set(false), 2000);
  }

  protected abrir(item: Sugestao) {
    this.selecionado.set(item);
  }

  protected fechar() {
    this.selecionado.set(null);
    this.concluido.set(false);
  }

  private gerarPix(valor?: number) {
    return pixCopiaECola({
      chave: '+5511972742596',
      nome: 'Nome do Titular',
      cidade: 'Sao Paulo',
      valor
    });
  }
}