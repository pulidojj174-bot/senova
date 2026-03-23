import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ScrollReveal } from '../../../core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-project-impact',
  imports: [ScrollReveal],
  templateUrl: './project-impact.html',
  styleUrl: './project-impact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectImpact {
  readonly title = input('El impacto del antes y después');
  readonly text = input(
    'Mostrar el antes y después permite a nuestros clientes visualizar el potencial de sus espacios, generando confianza y facilitando la toma de decisión.'
  );
}
