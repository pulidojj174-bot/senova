import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ScrollReveal } from '../../../core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about-badges',
  imports: [ScrollReveal],
  templateUrl: './about-badges.html',
  styleUrl: './about-badges.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutBadges {
  readonly sectionId = input('about-essence');
  readonly title = input('Nuestra esencia');
  readonly description = input.required<string[]>();
  readonly badges = input.required<string[]>();
}
