import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-footer-brand',
  imports: [],
  templateUrl: './footer-brand.html',
  styleUrl: './footer-brand.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterBrand {
  readonly brandName = input('Senova');
  readonly description = input('Diseño integral de espacios: desde la conceptualización hasta la ejecución de proyectos de carpintería y decoración de interiores.');
}
