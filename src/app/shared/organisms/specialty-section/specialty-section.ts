import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SpecialtyHero } from '../../molecules/specialty-hero/specialty-hero';
import {
  SpecialtyAccordion,
  Specialty,
} from '../../molecules/specialty-accordion/specialty-accordion';
import {
  SpecialtyBenefits,
  Benefit,
} from '../../molecules/specialty-benefits/specialty-benefits';
import { AboutTextBlock } from '../../molecules/about-text-block/about-text-block';
import { AboutServiceList } from '../../molecules/about-service-list/about-service-list';
import { AboutQuote } from '../../molecules/about-quote/about-quote';
import { AboutCta } from '../../molecules/about-cta/about-cta';

@Component({
  selector: 'app-specialty-section',
  imports: [
    SpecialtyHero,
    SpecialtyAccordion,
    SpecialtyBenefits,
    AboutTextBlock,
    AboutServiceList,
    AboutQuote,
    AboutCta,
  ],
  templateUrl: './specialty-section.html',
  styleUrl: './specialty-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecialtySection {
  readonly introParagraphs = [
    'Nos especializamos en el diseño y fabricación de mobiliario en madera, enfocado en transformar cada espacio del hogar con equilibrio entre estética, funcionalidad y durabilidad.',
    'Cada proyecto es único y está diseñado para reflejar la personalidad, necesidades y estilo de nuestros clientes.',
  ];

  readonly specialties: Specialty[] = [
    {
      id: 'salas-tv',
      title: 'Salas de TV y entretenimiento',
      icon: '🛋️',
      paragraphs: [
        'Diseñamos espacios de entretenimiento modernos, cómodos y funcionales, donde cada elemento está pensado para brindar confort y estilo.',
        'Integramos muebles personalizados que optimizan el espacio, mejoran la organización y crean una experiencia visual armoniosa.',
      ],
      images: [
        { src: 'assets/images/specialty-1.jpg', alt: 'Sala de TV moderna con mueble de entretenimiento' },
        { src: 'assets/images/specialty-2.jpg', alt: 'Diseño de sala de entretenimiento' },
        { src: 'assets/images/specialty-3.jpg', alt: 'Mueble de TV personalizado en madera' },
        { src: 'assets/images/specialty-4.jpg', alt: 'Centro de entretenimiento moderno' },
        { src: 'assets/images/specialty-5.jpg', alt: 'Sala de TV con iluminación integrada' },
        { src: 'assets/images/specialty-6.jpg', alt: 'Diseño minimalista de sala de TV' },
        { src: 'assets/images/specialty-7.jpg', alt: 'Mobiliario de entretenimiento a medida' },
        { src: 'assets/images/specialty-8.jpg', alt: 'Mueble multimedia en madera natural' },
        { src: 'assets/images/specialty-9.jpg', alt: 'Sala de TV con sistema de almacenamiento' },
        { src: 'assets/images/specialty-10.jpg', alt: 'Espacio de entretenimiento familiar' },
      ],
    },
    {
      id: 'cocinas',
      title: 'Cocinas integrales',
      icon: '🍽️',
      paragraphs: [
        'Creamos cocinas eficientes, elegantes y totalmente personalizadas, diseñadas para facilitar el día a día.',
        'Nos enfocamos en la distribución, almacenamiento y selección de materiales para lograr espacios prácticos y duraderos.',
      ],
      images: [
        { src: 'assets/images/specialty-3.jpg', alt: 'Cocina integral moderna' },
        { src: 'assets/images/specialty-1.jpg', alt: 'Cocina personalizada con isla central' },
        { src: 'assets/images/specialty-5.jpg', alt: 'Diseño de cocina minimalista' },
        { src: 'assets/images/specialty-2.jpg', alt: 'Cocina con acabados en madera' },
        { src: 'assets/images/specialty-7.jpg', alt: 'Cocina integral con almacenamiento' },
        { src: 'assets/images/specialty-4.jpg', alt: 'Cocina funcional y elegante' },
        { src: 'assets/images/specialty-9.jpg', alt: 'Diseño de cocina abierta' },
        { src: 'assets/images/specialty-6.jpg', alt: 'Cocina moderna con materiales premium' },
        { src: 'assets/images/specialty-10.jpg', alt: 'Cocina a medida Senova' },
        { src: 'assets/images/specialty-8.jpg', alt: 'Cocina con iluminación LED integrada' },
      ],
    },
    {
      id: 'banos',
      title: 'Muebles de baño',
      icon: '🚿',
      paragraphs: [
        'Diseñamos mobiliario de baño resistente, funcional y estéticamente atractivo, adaptado a condiciones de humedad y uso constante.',
        'Cada detalle está pensado para ofrecer comodidad, orden y durabilidad.',
      ],
      images: [
        { src: 'assets/images/specialty-5.jpg', alt: 'Mueble de baño moderno' },
        { src: 'assets/images/specialty-8.jpg', alt: 'Vanity de baño personalizado' },
        { src: 'assets/images/specialty-1.jpg', alt: 'Mueble de baño en madera tratada' },
        { src: 'assets/images/specialty-10.jpg', alt: 'Diseño de baño minimalista' },
        { src: 'assets/images/specialty-3.jpg', alt: 'Baño con almacenamiento integrado' },
        { src: 'assets/images/specialty-6.jpg', alt: 'Mueble bajo lavabo' },
        { src: 'assets/images/specialty-2.jpg', alt: 'Baño moderno con acabados premium' },
        { src: 'assets/images/specialty-9.jpg', alt: 'Mobiliario de baño a medida' },
        { src: 'assets/images/specialty-4.jpg', alt: 'Diseño de baño funcional' },
        { src: 'assets/images/specialty-7.jpg', alt: 'Baño elegante con madera natural' },
      ],
    },
    {
      id: 'closets',
      title: 'Closets y vestiers',
      icon: '👗',
      paragraphs: [
        'Desarrollamos soluciones de almacenamiento inteligentes que optimizan el espacio y mejoran la organización.',
        'Nuestros diseños combinan estética y funcionalidad, creando espacios prácticos y visualmente elegantes.',
      ],
      images: [
        { src: 'assets/images/specialty-7.jpg', alt: 'Closet moderno con organización interna' },
        { src: 'assets/images/specialty-4.jpg', alt: 'Vestier personalizado en madera' },
        { src: 'assets/images/specialty-9.jpg', alt: 'Walk-in closet diseñado por Senova' },
        { src: 'assets/images/specialty-2.jpg', alt: 'Closet con iluminación integrada' },
        { src: 'assets/images/specialty-6.jpg', alt: 'Solución de almacenamiento elegante' },
        { src: 'assets/images/specialty-1.jpg', alt: 'Closet minimalista funcional' },
        { src: 'assets/images/specialty-10.jpg', alt: 'Vestier con acabados premium' },
        { src: 'assets/images/specialty-8.jpg', alt: 'Closet a medida con cajones' },
        { src: 'assets/images/specialty-5.jpg', alt: 'Vestier moderno y organizado' },
        { src: 'assets/images/specialty-3.jpg', alt: 'Diseño de closet integral' },
      ],
    },
    {
      id: 'mobiliario',
      title: 'Mobiliario personalizado',
      icon: '🪵',
      paragraphs: [
        'Diseñamos y fabricamos muebles a la medida, adaptados completamente a las necesidades de cada cliente.',
        'Trabajamos la madera con precisión y detalle, logrando piezas únicas que elevan cualquier espacio.',
      ],
      images: [
        { src: 'assets/images/specialty-9.jpg', alt: 'Mueble personalizado en madera maciza' },
        { src: 'assets/images/specialty-6.jpg', alt: 'Mesa de comedor artesanal' },
        { src: 'assets/images/specialty-2.jpg', alt: 'Estantería a medida en madera' },
        { src: 'assets/images/specialty-8.jpg', alt: 'Mobiliario de sala personalizado' },
        { src: 'assets/images/specialty-4.jpg', alt: 'Mueble de diseño exclusivo' },
        { src: 'assets/images/specialty-10.jpg', alt: 'Pieza de madera artesanal' },
        { src: 'assets/images/specialty-1.jpg', alt: 'Escritorio personalizado en madera' },
        { src: 'assets/images/specialty-5.jpg', alt: 'Mobiliario hecho a medida' },
        { src: 'assets/images/specialty-3.jpg', alt: 'Mueble único de diseño Senova' },
        { src: 'assets/images/specialty-7.jpg', alt: 'Carpintería de autor personalizada' },
      ],
    },
  ];

  readonly approachItems = [
    'Asesoramiento personalizado desde el inicio',
    'Diseño en 3D para visualizar tu proyecto',
    'Toma de medidas precisa',
    'Cotización clara y detallada',
    'Instalación profesional con altos estándares',
  ];

  readonly benefits: Benefit[] = [
    {
      icon: 'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z',
      text: 'Espacios funcionales y organizados',
    },
    {
      icon: 'M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z',
      text: 'Diseños modernos y minimalistas',
    },
    {
      icon: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
      text: 'Materiales de alta calidad',
    },
    {
      icon: 'M21 11V3h-8l3.29 3.29-10 10L3 13v8h8l-3.29-3.29 10-10z',
      text: 'Mayor aprovechamiento del espacio',
    },
    {
      icon: 'M19 3H5L2 9l10 12L22 9l-3-6zm-7 11.5L5.5 7h13L12 14.5z',
      text: 'Ambientes elegantes y duraderos',
    },
  ];

  readonly philosophyParagraphs = [
    'Creemos que cada espacio debe cumplir su propósito de forma eficiente sin perder su esencia estética.',
    'Por eso, nuestros diseños combinan simplicidad, elegancia y funcionalidad, creando ambientes que mejoran la calidad de vida.',
  ];
}
