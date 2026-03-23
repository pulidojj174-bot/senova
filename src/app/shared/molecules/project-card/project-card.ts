import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ImageCompareModule } from 'primeng/imagecompare';
import { ScrollReveal } from '../../../core/directives/scroll-reveal.directive';

export interface ProjectData {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

@Component({
  selector: 'app-project-card',
  imports: [ImageCompareModule, ScrollReveal],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCard {
  readonly project = input.required<ProjectData>();
  readonly reverse = input(false);
}
