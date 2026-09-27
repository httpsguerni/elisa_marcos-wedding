import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-localizacao',
  imports: [RouterLink],
  templateUrl: './localizacao.html',
  styleUrl: './localizacao.css'
})
export class Localizacao {
  protected readonly local = {
    nome: 'Nome do Local',
    descricao: 'Um refúgio cercado pela natureza',
    endereco: 'Endereço completo'
  };

  protected readonly etapas = [
    {
      icone: 'church',
      titulo: 'Cerimônia',
      horario: 'Às 16h00',
      linhas: [this.local.nome, this.local.endereco]
    },
    {
      icone: 'celebration',
      titulo: 'Recepção',
      horario: 'Após a cerimônia',
      linhas: ['Mesmo local', 'Estacionamento no local']
    }
  ];

  protected readonly mapsUrl =
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(`${this.local.nome}, ${this.local.endereco}`);
}