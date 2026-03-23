import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ScrollReveal } from '../../../core/directives/scroll-reveal.directive';

export interface SpecialtyCard {
  image: string;
  alt: string;
  title: string;
  link: string;
}

@Component({
  selector: 'app-home-specialties',
  imports: [NgOptimizedImage, ScrollReveal],
  templateUrl: './home-specialties.html',
  styleUrl: './home-specialties.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSpecialties {
  readonly title = input('Nuestras Especialidades');
  readonly cards = input.required<SpecialtyCard[]>();
}
