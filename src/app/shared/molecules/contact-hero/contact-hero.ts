import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ScrollReveal } from '../../../core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact-hero',
  imports: [ScrollReveal],
  templateUrl: './contact-hero.html',
  styleUrl: './contact-hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactHero {
  readonly title = input('Contáctanos');
  readonly description = input(
    'Cada proyecto comienza con una conversación. Cuéntanos tu visión y crearemos juntos el espacio que siempre imaginaste.'
  );
}
