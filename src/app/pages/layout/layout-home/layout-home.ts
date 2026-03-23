import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "../../../shared/organisms/navbar/navbar";
import { Footer } from "../../../shared/organisms/footer/footer";
import { SeoService } from "../../../core/services/seo.service";

@Component({
  selector: 'app-layout-home',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './layout-home.html',
  styleUrl: './layout-home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutHome {
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.init();
  }
}
