import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutHero } from '../../molecules/about-hero/about-hero';
import { AboutTextBlock } from '../../molecules/about-text-block/about-text-block';
import { AboutBadges } from '../../molecules/about-badges/about-badges';
import { AboutServiceList } from '../../molecules/about-service-list/about-service-list';
import { AboutValueCard, ValueCard } from '../../molecules/about-value-card/about-value-card';
import { AboutQuote } from '../../molecules/about-quote/about-quote';
import { AboutCta } from '../../molecules/about-cta/about-cta';
import { ScrollReveal } from '../../../core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about-section',
  imports: [
    AboutHero,
    AboutTextBlock,
    AboutBadges,
    AboutServiceList,
    AboutValueCard,
    AboutQuote,
    AboutCta,
    ScrollReveal,
  ],
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSection {
  readonly whoWeAre = [
    'Somos una empresa especializada en el diseño y fabricación de muebles en madera, creada para transformar espacios con estilo, funcionalidad y durabilidad.',
    'Desarrollamos proyectos personalizados para salas de TV, cocinas, baños, closets y diferentes ambientes del hogar, integrando tendencias modernas de interiorismo con soluciones prácticas para la vida diaria.',
    'Creemos que cada espacio debe reflejar la esencia de quien lo habita, por eso diseñamos ambientes únicos, equilibrados y llenos de armonía.',
  ];

  readonly essenceDescription = [
    'Nuestro enfoque se basa en la elegancia, el minimalismo y la conexión con lo natural.',
    'Cada diseño busca transmitir equilibrio, sofisticación y calidez, creando espacios funcionales que perduran en el tiempo y generan bienestar.',
  ];

  readonly essenceBadges = [
    'Elegancia',
    'Armonía',
    'Sofisticación',
    'Funcionalidad',
    'Minimalismo',
  ];

  readonly services = [
    'Diseño y asesoramiento personalizado',
    'Visualización en 3D de proyectos',
    'Toma de medidas profesional',
    'Fabricación de mobiliario a medida',
    'Instalación con altos estándares de calidad',
  ];

  readonly valueCards: ValueCard[] = [
    {
      title: 'Diseño personalizado',
      description: 'Creamos soluciones a la medida, adaptadas a tu estilo y necesidades.',
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
    },
    {
      title: 'Calidad en madera',
      description: 'Trabajamos con materiales de alta calidad y acabados impecables.',
      icon: 'M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z',
    },
    {
      title: 'Atención al detalle',
      description: 'Cada proyecto refleja precisión, cuidado y excelencia.',
      icon: 'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
    },
  ];

  readonly philosophyParagraphs = [
    'Creemos que un espacio bien diseñado no solo se ve bien, sino que se vive mejor.',
    'Por eso, cada proyecto que realizamos está pensado para mejorar tu calidad de vida, aportando comodidad, organización y una estética que perdure en el tiempo.',
  ];

  readonly clientsParagraphs = [
    'Trabajamos principalmente con personas que valoran el diseño, la comodidad y la organización en su hogar.',
    'Nuestros clientes buscan soluciones personalizadas, elegantes y funcionales, con un enfoque en calidad y detalle.',
  ];

  readonly differentiators = [
    'Acompañamiento completo de inicio a fin',
    'Visualización realista antes de construir',
    'Transparencia en costos',
    'Cumplimiento y profesionalismo',
    'Diseño + fabricación en un solo lugar',
  ];
}
