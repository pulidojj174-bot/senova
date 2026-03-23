import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ScrollReveal } from '../../../core/directives/scroll-reveal.directive';

export interface Benefit {
  icon: string;
  text: string;
}

@Component({
  selector: 'app-specialty-benefits',
  imports: [ScrollReveal],
  templateUrl: './specialty-benefits.html',
  styleUrl: './specialty-benefits.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecialtyBenefits {
  readonly title = input('¿Qué obtienes con nuestras especialidades?');
  readonly benefits = input.required<Benefit[]>();
}
