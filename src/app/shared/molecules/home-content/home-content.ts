import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ScrollReveal } from '../../../core/directives/scroll-reveal.directive';

export interface ContentItem {
  image: string;
  alt: string;
  tag: string;
  title: string;
}

@Component({
  selector: 'app-home-content',
  imports: [NgOptimizedImage, ScrollReveal],
  templateUrl: './home-content.html',
  styleUrl: './home-content.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContent {
  readonly title = input('Inspiración y Contenido');
  readonly subtitle = input(
    'Los videos mostrando transformación generan mayor interacción y engagement.'
  );
  readonly items = input.required<ContentItem[]>();
}
