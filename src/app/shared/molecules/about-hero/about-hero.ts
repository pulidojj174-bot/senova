import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ScrollReveal } from '../../../core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about-hero',
  imports: [ScrollReveal, NgOptimizedImage],
  templateUrl: './about-hero.html',
  styleUrl: './about-hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutHero {
  readonly title = input('Transformamos espacios en experiencias únicas');
  readonly subtitle = input(
    'Diseño de interiores y mobiliario personalizado que combina elegancia, funcionalidad y durabilidad.'
  );
}
