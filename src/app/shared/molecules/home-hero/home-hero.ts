import {
  ChangeDetectionStrategy,
  Component,
  signal,
  computed,
  input,
  afterNextRender,
  DestroyRef,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

export interface HeroSlide {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-home-hero',
  imports: [NgOptimizedImage],
  templateUrl: './home-hero.html',
  styleUrl: './home-hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeHero {
  readonly slides = input.required<HeroSlide[]>();
  readonly ctaLabel = input('Cotiza tu proyecto');
  readonly ctaLink = input('/contacto');

  readonly activeIndex = signal(0);
  readonly currentSlide = computed(() => this.slides()[this.activeIndex()]);

  private readonly destroyRef = inject(DestroyRef);
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) return;

      const interval = setInterval(() => {
        this.activeIndex.update((i) => (i + 1) % this.slides().length);
      }, 5000);

      this.destroyRef.onDestroy(() => clearInterval(interval));
    });
  }

  goTo(index: number) {
    this.activeIndex.set(index);
  }

  prev() {
    this.activeIndex.update((i) => (i - 1 + this.slides().length) % this.slides().length);
  }

  next() {
    this.activeIndex.update((i) => (i + 1) % this.slides().length);
  }
}
