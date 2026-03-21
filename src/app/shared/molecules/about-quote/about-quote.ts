import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ScrollReveal } from '../../../core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about-quote',
  imports: [ScrollReveal, NgOptimizedImage],
  templateUrl: './about-quote.html',
  styleUrl: './about-quote.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutQuote {
  readonly paragraphs = input.required<string[]>();
  readonly highlight = input<string | undefined>(undefined);
  readonly imageSrc = input<string | undefined>(undefined);
  readonly imageAlt = input('');
}
