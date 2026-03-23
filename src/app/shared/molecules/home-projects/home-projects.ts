import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ImageCompareModule } from 'primeng/imagecompare';
import { ScrollReveal } from '../../../core/directives/scroll-reveal.directive';

export interface HomeProject {
  id: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

@Component({
  selector: 'app-home-projects',
  imports: [ImageCompareModule, ScrollReveal],
  templateUrl: './home-projects.html',
  styleUrl: './home-projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeProjects {
  readonly title = input('Proyectos Destacados');
  readonly subtitle = input(
    'El contenido de antes y después es el que más impacto genera en nuestros usuarios.'
  );
  readonly projects = input.required<HomeProject[]>();
  readonly linkLabel = input('Ver todos los proyectos');
  readonly linkHref = input('/proyectos');
}
