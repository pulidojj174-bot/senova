import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ScrollReveal } from '../../../core/directives/scroll-reveal.directive';

export interface SpecialtyImage {
  src: string;
  alt: string;
}

export interface Specialty {
  id: string;
  title: string;
  icon: string;
  paragraphs: string[];
  images: SpecialtyImage[];
}

@Component({
  selector: 'app-specialty-accordion',
  imports: [NgOptimizedImage, ScrollReveal],
  templateUrl: './specialty-accordion.html',
  styleUrl: './specialty-accordion.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecialtyAccordion {
  readonly specialties = input.required<Specialty[]>();
  readonly sectionTitle = input('Nuestras Especialidades');
  readonly activeId = signal<string | null>(null);

  toggle(id: string) {
    this.activeId.update(current => (current === id ? null : id));
  }
}
