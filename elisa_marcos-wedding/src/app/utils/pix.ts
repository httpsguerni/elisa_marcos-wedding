interface Pix {
  chave: string;
  nome: string;
  cidade: string;
  valor?: number;
}

const field = (id: string, value: string) => id + String(value.length).padStart(2, '0') + value;

const ascii = (text: string, max: number) =>
  text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').slice(0, max);

function crc16(payload: string) {
  let crc = 0xffff;
  for (const char of payload) {
    crc ^= char.charCodeAt(0) << 8;
    for (let i = 0; i < 8; i++) {
      crc = crc & 0x8000 ? (crc << 1) ^ 0x1021 : crc << 1;
    }
  }
  return (crc & 0xffff).toString(16).toUpperCase().padStart(4, '0');
}

export function pixCopiaECola({ chave, nome, cidade, valor }: Pix) {
  const payload = [
    field('00', '01'),
    field('26', field('00', 'br.gov.bcb.pix') + field('01', chave)),
    field('52', '0000'),
    field('53', '986'),
    valor ? field('54', valor.toFixed(2)) : '',
    field('58', 'BR'),
    field('59', ascii(nome, 25)),
    field('60', ascii(cidade, 15)),
    field('62', field('05', '***')),
    '6304'
  ].join('');

  return payload + crc16(payload);
}