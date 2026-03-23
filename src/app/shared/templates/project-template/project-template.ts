import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectSection } from '../../organisms/project-section/project-section';

@Component({
  selector: 'app-project-template',
  imports: [ProjectSection],
  template: '<app-project-section />',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectTemplate {}
