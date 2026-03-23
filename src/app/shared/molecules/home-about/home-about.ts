import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ScrollReveal } from '../../../core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home-about',
  imports: [ScrollReveal],
  templateUrl: './home-about.html',
  styleUrl: './home-about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeAbout {
  readonly title = input('Quiénes Somos');
  readonly text = input(
    'Somos una empresa especializada en el diseño y fabricación de muebles en madera, creada para transformar espacios con estilo, funcionalidad y durabilidad.'
  );
  readonly linkLabel = input('Conoce más sobre nosotros');
  readonly linkHref = input('/nosotros');
}
