import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ScrollReveal } from '../../../core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about-text-block',
  imports: [ScrollReveal, NgOptimizedImage],
  templateUrl: './about-text-block.html',
  styleUrl: './about-text-block.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutTextBlock {
  readonly sectionId = input.required<string>();
  readonly title = input<string | undefined>(undefined);
  readonly paragraphs = input.required<string[]>();
  readonly imageSrc = input<string | undefined>(undefined);
  readonly imageAlt = input('');
  readonly imagePosition = input<'left' | 'right'>('right');
}
