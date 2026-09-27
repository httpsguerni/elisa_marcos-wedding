import { Component, effect, input, signal } from '@angular/core';
import QRCode from 'qrcode';

@Component({
  selector: 'app-qr',
  template: `<img [src]="src()" [alt]="text()">`,
  styles: `:host { display: block; } img { width: 100%; }`
})
export class Qr {
  readonly text = input.required<string>();
  readonly color = input('#005A45');

  protected readonly src = signal('');

  constructor() {
    effect(async () => {
      const options = { width: 400, margin: 1, color: { dark: this.color() } };
      this.src.set(await QRCode.toDataURL(this.text(), options));
    });
  }
}