import {
  Directive,
  ElementRef,
  inject,
  input,
  afterNextRender,
  DestroyRef,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollReveal]',
  host: {
    '[attr.data-reveal]': 'animation()',
    '[attr.data-reveal-delay]': 'delay() || null',
  },
})
export class ScrollReveal {
  /** Animation type: fade-up | fade-down | fade-left | fade-right | zoom-in | fade */
  readonly animation = input<string>('fade-up', { alias: 'appScrollReveal' });

  /** Stagger delay index (1-8), used for card grids */
  readonly delay = input<number | undefined>(undefined);

  /** How much of the element must be visible (0-1) */
  readonly threshold = input(0.15);

  private readonly el = inject(ElementRef);
  private readonly destroyRef = inject(DestroyRef);
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) return;

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
            }
          }
        },
        { threshold: this.threshold(), rootMargin: '0px 0px -40px 0px' }
      );

      observer.observe(this.el.nativeElement);

      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
