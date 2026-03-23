import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeHero, HeroSlide } from '../../molecules/home-hero/home-hero';
import { HomeAbout } from '../../molecules/home-about/home-about';
import { HomeSpecialties, SpecialtyCard } from '../../molecules/home-specialties/home-specialties';
import { HomeProjects, HomeProject } from '../../molecules/home-projects/home-projects';
import { ProjectProcess, ProcessStep } from '../../molecules/project-process/project-process';
import { HomeValue, ValueProp } from '../../molecules/home-value/home-value';
import { HomeContent, ContentItem } from '../../molecules/home-content/home-content';
import { AboutCta } from '../../molecules/about-cta/about-cta';

@Component({
  selector: 'app-home-section',
  imports: [
    HomeHero,
    HomeAbout,
    HomeSpecialties,
    HomeProjects,
    ProjectProcess,
    HomeValue,
    HomeContent,
    AboutCta,
  ],
  templateUrl: './home-section.html',
  styleUrl: './home-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSection {
  // ── 1. Hero Slides ──
  readonly heroSlides: HeroSlide[] = [
    {
      image: 'assets/images/home-hero-1.jpg',
      alt: 'Diseño interior moderno con muebles de madera',
      title: 'Transformamos espacios con diseño y artesanía',
      subtitle: 'Muebles a medida que reflejan tu estilo de vida, fabricados con las mejores maderas.',
    },
    {
      image: 'assets/images/home-hero-2.jpg',
      alt: 'Sala de estar elegante con mobiliario personalizado',
      title: 'Cada espacio merece ser único',
      subtitle: 'Del concepto a la realidad: diseño personalizado con acabados de lujo.',
    },
    {
      image: 'assets/images/home-hero-3.jpg',
      alt: 'Cocina de lujo con acabados artesanales',
      title: 'Calidad que se ve y se siente',
      subtitle: 'Más de 10 años diseñando espacios que inspiran.',
    },
  ];

  // ── 3. Specialties ──
  readonly specialtyCards: SpecialtyCard[] = [
    {
      image: 'assets/images/home-specialty-salas.jpg',
      alt: 'Sala de TV moderna con mueble en madera',
      title: 'Salas de TV',
      link: '/categorias',
    },
    {
      image: 'assets/images/home-specialty-cocinas.jpg',
      alt: 'Cocina integral con diseño contemporáneo',
      title: 'Cocinas',
      link: '/categorias',
    },
    {
      image: 'assets/images/home-specialty-closets.jpg',
      alt: 'Closet personalizado con organización inteligente',
      title: 'Closets',
      link: '/categorias',
    },
    {
      image: 'assets/images/home-specialty-banos.jpg',
      alt: 'Mueble de baño elegante y funcional',
      title: 'Baños',
      link: '/categorias',
    },
    {
      image: 'assets/images/home-specialty-custom.jpg',
      alt: 'Mueble personalizado a medida',
      title: 'Muebles Personalizados',
      link: '/categorias',
    },
  ];

  // ── 4. Featured Projects ──
  readonly featuredProjects: HomeProject[] = [
    {
      id: 'home-sala',
      title: 'Sala de TV Moderna',
      beforeImage: 'assets/images/project-sala-before.jpg',
      afterImage: 'assets/images/project-sala-after.jpg',
      beforeAlt: 'Sala antes de la transformación',
      afterAlt: 'Sala después de la transformación',
    },
    {
      id: 'home-cocina',
      title: 'Cocina Integral',
      beforeImage: 'assets/images/project-cocina-before.jpg',
      afterImage: 'assets/images/project-cocina-after.jpg',
      beforeAlt: 'Cocina antes de la transformación',
      afterAlt: 'Cocina después de la transformación',
    },
  ];

  // ── 5. Process Steps ──
  readonly processSteps: ProcessStep[] = [
    {
      number: 1,
      title: 'Diseño',
      description: 'Creamos un diseño personalizado según tus necesidades y estilo.',
    },
    {
      number: 2,
      title: 'Visualización 3D',
      description: 'Renders realistas para que veas el resultado antes de fabricar.',
    },
    {
      number: 3,
      title: 'Fabricación',
      description: 'Cada pieza se fabrica con materiales seleccionados y acabados artesanales.',
    },
    {
      number: 4,
      title: 'Instalación',
      description: 'Instalación profesional con precisión y cuidado del espacio.',
    },
  ];

  // ── 6. Value Props ──
  readonly valueProps: ValueProp[] = [
    {
      icon: '🎨',
      title: 'Diseño Personalizado',
      description: 'Cada proyecto es único, diseñado a la medida de tus necesidades y preferencias.',
    },
    {
      icon: '🪵',
      title: 'Trabajo en Madera',
      description: 'Utilizamos maderas nobles con técnicas artesanales de alta calidad.',
    },
    {
      icon: '✨',
      title: 'Atención al Detalle',
      description: 'Cada acabado, unión y terminado refleja nuestro compromiso con la excelencia.',
    },
  ];

  // ── 7. Instagram Content ──
  readonly contentItems: ContentItem[] = [
    {
      image: 'assets/images/home-content-1.jpg',
      alt: 'Video de transformación de sala',
      tag: 'Reel',
      title: 'Transformación completa de sala de TV',
    },
    {
      image: 'assets/images/home-content-2.jpg',
      alt: 'Antes y después de cocina',
      tag: 'Antes / Después',
      title: 'Cocina: de lo clásico a lo moderno',
    },
    {
      image: 'assets/images/home-content-3.jpg',
      alt: 'Proceso de fabricación paso a paso',
      tag: 'Proceso',
      title: 'Así fabricamos tu mueble a medida',
    },
    {
      image: 'assets/images/home-content-4.jpg',
      alt: 'Video de instalación de closet',
      tag: 'Video',
      title: 'Instalación de closet en 48 horas',
    },
    {
      image: 'assets/images/home-content-5.jpg',
      alt: 'Detalle de acabados en madera',
      tag: 'Detalle',
      title: 'Acabados artesanales que marcan la diferencia',
    },
    {
      image: 'assets/images/home-content-6.jpg',
      alt: 'Reel de mueble de baño',
      tag: 'Reel',
      title: 'Mueble de baño: resistente y elegante',
    },
  ];
}
