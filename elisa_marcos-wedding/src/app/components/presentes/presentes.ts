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
  protected readonly listaUrl = 'https://link-da-sua-lista.com';
  protected readonly chavePix = 'elisamarcoswedding@gmail.com';
  protected readonly codigoPix = this.gerarPix();
  protected readonly copiado = signal(false);

  protected readonly sugestoes: Sugestao[] = [
    { icone: 'restaurant', titulo: 'Jantar Romântico', descricao: 'Lua de mel', valor: 250 },
    { icone: 'flight_takeoff', titulo: 'Passagens Aéreas', descricao: 'Ida para a viagem', valor: 300 },
    { icone: 'flight_land', titulo: 'Passagens Aéreas', descricao: 'Volta da viagem', valor: 300 },
    { icone: 'landscape', titulo: 'Passeio dos Noivos', descricao: 'Ajuda na viagem', valor: 300 },
    { icone: 'luggage', titulo: 'Malas de Viagem', descricao: 'Para muitas aventuras', valor: 300 },
    { icone: 'spa', titulo: 'Day Spa', descricao: 'Para relaxar juntos', valor: 100 },
    { icone: 'celebration', titulo: 'Brinde', descricao: 'Para celebrarmos a nova fase', valor: 100 },
    { icone: 'favorite', titulo: 'Mimo', descricao: 'Para tornar nosso dia ainda mais especial', valor: 50 }
  ];

  protected readonly selecionado = signal<Sugestao | null>(null);
  protected readonly codigoPresente = computed(() => this.gerarPix(this.selecionado()?.valor));

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