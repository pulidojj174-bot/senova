import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectHero } from '../../molecules/project-hero/project-hero';
import { ProjectCard, ProjectData } from '../../molecules/project-card/project-card';
import { ProjectProcess, ProcessStep } from '../../molecules/project-process/project-process';
import { ProjectImpact } from '../../molecules/project-impact/project-impact';
import { AboutTextBlock } from '../../molecules/about-text-block/about-text-block';
import { AboutCta } from '../../molecules/about-cta/about-cta';

@Component({
  selector: 'app-project-section',
  imports: [
    ProjectHero,
    ProjectCard,
    ProjectProcess,
    ProjectImpact,
    AboutTextBlock,
    AboutCta,
  ],
  templateUrl: './project-section.html',
  styleUrl: './project-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectSection {
  readonly introParagraphs = [
    'Cada proyecto que realizamos refleja nuestro compromiso con el diseño, la calidad y la transformación de espacios.',
    'Mostramos el proceso completo, desde el estado inicial hasta el resultado final, permitiéndote visualizar el impacto real de nuestro trabajo.',
    'Los contenidos de antes y después son los que generan mayor interés en nuestros clientes, ya que evidencian el cambio y la calidad del resultado final.',
  ];

  readonly projects: ProjectData[] = [
    {
      id: 'sala',
      icon: '🛋️',
      title: 'Sala de TV Moderna',
      description:
        'Transformamos una sala tradicional en un espacio moderno, funcional y elegante, optimizando el almacenamiento y mejorando la experiencia visual.',
      features: [
        'Diseño minimalista',
        'Mueble en madera personalizado',
        'Iluminación integrada',
        'Optimización del espacio',
      ],
      beforeImage: 'assets/images/project-sala-before.jpg',
      afterImage: 'assets/images/project-sala-after.jpg',
      beforeAlt: 'Sala de TV antes de la transformación',
      afterAlt: 'Sala de TV después de la transformación',
    },
    {
      id: 'cocina',
      icon: '🍽️',
      title: 'Cocina Integral',
      description:
        'Rediseñamos completamente la cocina para mejorar su funcionalidad, almacenamiento y estética, logrando un espacio práctico y sofisticado.',
      features: [
        'Distribución optimizada',
        'Materiales de alta calidad',
        'Almacenamiento inteligente',
        'Acabados de lujo',
      ],
      beforeImage: 'assets/images/project-cocina-before.jpg',
      afterImage: 'assets/images/project-cocina-after.jpg',
      beforeAlt: 'Cocina antes de la transformación',
      afterAlt: 'Cocina después de la transformación',
    },
    {
      id: 'closet',
      icon: '👗',
      title: 'Closet Personalizado',
      description:
        'Creamos un sistema de almacenamiento inteligente que mejora la organización y maximiza el uso del espacio disponible.',
      features: [
        'Diseño a medida',
        'Cajones organizadores',
        'Iluminación interior LED',
        'Espejo integrado',
      ],
      beforeImage: 'assets/images/project-closet-before.jpg',
      afterImage: 'assets/images/project-closet-after.jpg',
      beforeAlt: 'Closet antes de la transformación',
      afterAlt: 'Closet después de la transformación',
    },
    {
      id: 'bano',
      icon: '🚿',
      title: 'Mueble de Baño',
      description:
        'Diseñamos un mobiliario resistente y elegante, adaptado a condiciones de humedad y uso diario.',
      features: [
        'Materiales resistentes a humedad',
        'Diseño ergonómico',
        'Almacenamiento oculto',
        'Acabado premium',
      ],
      beforeImage: 'assets/images/project-bano-before.jpg',
      afterImage: 'assets/images/project-bano-after.jpg',
      beforeAlt: 'Mueble de baño antes de la transformación',
      afterAlt: 'Mueble de baño después de la transformación',
    },
  ];

  readonly processSteps: ProcessStep[] = [
    {
      number: 1,
      title: 'Evaluación del espacio',
      description: 'Analizamos las dimensiones, necesidades y estilo para crear una propuesta personalizada.',
    },
    {
      number: 2,
      title: 'Diseño y visualización 3D',
      description: 'Presentamos renders realistas para que visualices el resultado antes de fabricar.',
    },
    {
      number: 3,
      title: 'Fabricación personalizada',
      description: 'Cada pieza se fabrica con materiales seleccionados y acabados artesanales.',
    },
    {
      number: 4,
      title: 'Instalación profesional',
      description: 'Nuestro equipo instala con precisión, garantizando un resultado impecable.',
    },
  ];
}
