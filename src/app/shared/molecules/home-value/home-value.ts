import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ScrollReveal } from '../../../core/directives/scroll-reveal.directive';

export interface ValueProp {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home-value',
  imports: [ScrollReveal],
  templateUrl: './home-value.html',
  styleUrl: './home-value.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeValue {
  readonly title = input('Nuestra Promesa de Valor');
  readonly items = input.required<ValueProp[]>();
}
