import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Localizacao } from './components/localizacao/localizacao';
import { PreWedding } from './components/pre-wedding/pre-wedding';
import { Presentes } from './components/presentes/presentes';
import { Presenca } from './components/presenca/presenca';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'presenca', component: Presenca },
  { path: 'fotos', component: PreWedding },
  { path: 'presentes', component: Presentes },
  { path: 'localizacao', component: Localizacao },
  { path: '**', redirectTo: '' }
];
