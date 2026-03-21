import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ScrollReveal } from '../../../core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about-service-list',
  imports: [ScrollReveal],
  templateUrl: './about-service-list.html',
  styleUrl: './about-service-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutServiceList {
  readonly sectionId = input('about-services');
  readonly title = input('Qué hacemos');
  readonly description = input('');
  readonly items = input.required<string[]>();
}
