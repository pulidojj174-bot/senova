import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeSection } from '../../organisms/home-section/home-section';

@Component({
  selector: 'app-home-template',
  imports: [HomeSection],
  template: '<app-home-section />',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTemplate {}
