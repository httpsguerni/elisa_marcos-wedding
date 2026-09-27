import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pre-wedding',
  imports: [RouterLink],
  templateUrl: './pre-wedding.html',
  styleUrl: './pre-wedding.css',
  host: { '(document:keydown.escape)': 'aberta.set(null)' }
})
export class PreWedding {
  protected readonly total = 12;
  //protected readonly fotos = Array.from({ length: this.total }, (_, i) => `images/pre-wedding/${i + 1}.jpg`);
  protected readonly aberta = signal<string | null>(null);

  protected readonly fotos = Array(12).fill('images/ceremony.jpg');
}