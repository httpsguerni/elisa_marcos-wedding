import { Component, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnDestroy {
  protected readonly info = {
    data: '10 de Junho de 2027',
    horario: 'Às 16:00 horas',
    local: 'Nome do Local',
    endereco: 'Endereço completo'
  };

  private readonly target = new Date('2027-06-10T16:00:00').getTime();
  protected readonly countdown = signal(this.calc());
  private readonly timer = setInterval(() => this.countdown.set(this.calc()), 1000);

  private calc() {
    const s = Math.max(0, this.target - Date.now()) / 1000;
    const pad = (n: number) => String(Math.floor(n)).padStart(2, '0');
    return [
      { label: 'Dias', value: pad(s / 86400) },
      { label: 'Horas', value: pad((s / 3600) % 24) },
      { label: 'Min', value: pad((s / 60) % 60) },
      { label: 'Seg', value: pad(s % 60) }
    ];
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}