import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SpecialtySection } from '../../organisms/specialty-section/specialty-section';

@Component({
  selector: 'app-category-template',
  imports: [SpecialtySection],
  template: '<app-specialty-section />',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryTemplate {}
