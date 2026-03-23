import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ScrollReveal } from '../../../core/directives/scroll-reveal.directive';

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-project-process',
  imports: [ScrollReveal],
  templateUrl: './project-process.html',
  styleUrl: './project-process.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectProcess {
  readonly sectionId = input('project-process');
  readonly title = input('Nuestro Proceso');
  readonly description = input(
    'Cada transformación sigue un proceso estructurado que garantiza resultados de alta calidad:'
  );
  readonly steps = input.required<ProcessStep[]>();
}
