import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ScrollReveal } from '../../../core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-project-hero',
  imports: [ScrollReveal],
  templateUrl: './project-hero.html',
  styleUrl: './project-hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectHero {
  readonly title = input('Transformaciones reales, resultados que hablan por sí solos');
  readonly subtitle = input(
    'Descubre cómo convertimos espacios comunes en ambientes únicos, funcionales y elegantes.'
  );
}
