import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  init(): void {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route.snapshot.data;
        })
      )
      .subscribe(data => this.updateMetaTags(data));
  }

  private updateMetaTags(data: Record<string, string>): void {
    const title = data['title'] ?? 'Senova — Carpintería de Lujo y Diseño de Interiores';
    this.title.setTitle(title);

    this.setOrRemove('description', data['description']);
    this.setOrRemove('keywords', data['keywords']);

    // Open Graph
    this.setOrRemoveProperty('og:title', data['ogTitle'] ?? data['title']);
    this.setOrRemoveProperty('og:description', data['ogDescription'] ?? data['description']);
    this.setOrRemoveProperty('og:image', data['ogImage']);
    this.setOrRemoveProperty('og:url', data['ogUrl']);
    this.setOrRemoveProperty('og:type', 'website');
    this.setOrRemoveProperty('og:site_name', 'Senova');
    this.setOrRemoveProperty('og:locale', 'es_CO');

    // Twitter Card
    this.setOrRemove('twitter:card', 'summary_large_image');
    this.setOrRemove('twitter:title', data['twitterTitle'] ?? data['title']);
    this.setOrRemove('twitter:description', data['twitterDescription'] ?? data['description']);
    this.setOrRemove('twitter:image', data['twitterImage']);
    this.setOrRemove('twitter:url', data['twitterUrl']);
  }

  private setOrRemove(name: string, content: string | undefined): void {
    if (content) {
      this.meta.updateTag({ name, content });
    } else {
      this.meta.removeTag(`name="${name}"`);
    }
  }

  private setOrRemoveProperty(property: string, content: string | undefined): void {
    if (content) {
      this.meta.updateTag({ property, content });
    } else {
      this.meta.removeTag(`property="${property}"`);
    }
  }
}
