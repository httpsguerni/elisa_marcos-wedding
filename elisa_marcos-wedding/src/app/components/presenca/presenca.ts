import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbww3DgaPUB6qi6vy7Ni4qHjADSk4DP19KDOKrCfK5iKR-qn9oAogHkBABljaM4f5wnI6w/exec';

type Status = 'idle' | 'enviando' | 'sucesso' | 'erro';

@Component({
  selector: 'app-presenca',
  imports: [FormsModule, RouterLink],
  templateUrl: './presenca.html',
  styleUrl: './presenca.css'
})
export class Presenca {
  protected readonly prazo = '31 de Maio de 2027';
  protected readonly max = 10;

  protected nome = '';
  protected recado = '';
  protected readonly acompanhantes = signal(0);
  protected readonly total = computed(() => String(this.acompanhantes()).padStart(2, '0'));
  protected readonly status = signal<Status>('idle');

  protected alterar(delta: number) {
    this.acompanhantes.update(n => Math.min(this.max, Math.max(0, n + delta)));
  }

  protected async confirmar() {
    const nome = this.nome.trim();
    if (!nome || this.status() === 'enviando') return;

    this.status.set('enviando');
    try {
      const res = await fetch(SHEET_URL, {
        method: 'POST',
        body: JSON.stringify({ nome, acompanhantes: this.acompanhantes(), recado: this.recado.trim() })
      });
      if (!res.ok) throw new Error();
      this.status.set('sucesso');
    } catch {
      this.status.set('erro');
    }
  }
}