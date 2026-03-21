import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ScrollReveal } from '../../../core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about-cta',
  imports: [ScrollReveal],
  templateUrl: './about-cta.html',
  styleUrl: './about-cta.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutCta {
  readonly title = input('¿Listo para transformar tu espacio?');
  readonly primaryLabel = input('Cotiza tu proyecto');
  readonly primaryLink = input('/contacto');
  readonly secondaryLabel = input('Hablar por WhatsApp');
  readonly secondaryLink = input('https://wa.me/34912345678');
}
