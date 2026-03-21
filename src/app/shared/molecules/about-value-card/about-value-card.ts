import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface ValueCard {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-about-value-card',
  imports: [],
  templateUrl: './about-value-card.html',
  styleUrl: './about-value-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutValueCard {
  readonly card = input.required<ValueCard>();
}
