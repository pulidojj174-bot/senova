import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ScrollReveal } from '../../../core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-specialty-hero',
  imports: [ScrollReveal],
  templateUrl: './specialty-hero.html',
  styleUrl: './specialty-hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecialtyHero {
  readonly title = input('Nuestras especialidades en diseño y transformación de espacios');
  readonly subtitle = input(
    'Creamos ambientes únicos, funcionales y elegantes, adaptados a tu estilo de vida.'
  );
}
