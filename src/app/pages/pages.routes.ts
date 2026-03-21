import { Routes } from '@angular/router';

export const pagesRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout-home/layout-home').then(m => m.LayoutHome),
    children: [
      {
        path: '',
        loadComponent: () => import('./home/home').then(m => m.Home),
        data: {
          title: 'Inicio | Senova — Carpintería de Lujo y Diseño de Interiores',
          description:
            'Senova transforma espacios con carpintería de lujo a medida. Cocinas, vestidores, mobiliario y diseño de interiores con maderas nobles y acabados artesanales.',
          keywords: 'carpintería de lujo, diseño de interiores, mobiliario a medida, cocinas de lujo, vestidores, Senova',
          ogTitle: 'Senova — Carpintería de Lujo y Diseño de Interiores',
          ogDescription:
            'Transformamos espacios con carpintería de lujo a medida. Cocinas, vestidores, mobiliario y diseño de interiores con maderas nobles y acabados artesanales.',
          ogImage: 'https://senova.com/assets/images/og-image.png',
          ogUrl: 'https://senova.com/',
          twitterTitle: 'Senova — Carpintería de Lujo y Diseño de Interiores',
          twitterDescription:
            'Transformamos espacios con carpintería de lujo a medida. Cocinas, vestidores, mobiliario y diseño de interiores con maderas nobles y acabados artesanales.',
          twitterImage: 'https://senova.com/assets/images/twitter-image.png',
          twitterUrl: 'https://senova.com/',
        },
      },
      {
        path: 'proyectos',
        loadComponent: () => import('./project/project').then(m => m.Project),
        data: {
          title: 'Proyectos | Senova',
          description:
            'Descubre nuestros proyectos de carpintería de lujo y diseño de interiores. Cada espacio refleja artesanía excepcional, materiales nobles y atención al detalle.',
          keywords: 'proyectos carpintería, diseño interiores lujo, portfolio, mobiliario a medida, Senova',
          ogTitle: 'Proyectos | Senova',
          ogDescription:
            'Descubre nuestros proyectos de carpintería de lujo y diseño de interiores. Artesanía excepcional y atención al detalle en cada espacio.',
          ogImage: 'https://senova.com/assets/images/og-projects.png',
          ogUrl: 'https://senova.com/proyectos',
          twitterTitle: 'Proyectos | Senova',
          twitterDescription:
            'Descubre nuestros proyectos de carpintería de lujo y diseño de interiores. Artesanía excepcional y atención al detalle en cada espacio.',
          twitterImage: 'https://senova.com/assets/images/twitter-projects.png',
          twitterUrl: 'https://senova.com/proyectos',
        }
      },
      {
        path: 'contacto',
        loadComponent: () => import('./contact/contact').then(m => m.Contact),
        data: {
          title: 'Contacto | Senova',
          description:
            'Solicita una consulta personalizada para tu proyecto de carpintería de lujo o diseño de interiores. Visita nuestro showroom o contáctanos para comenzar a crear tu espacio ideal.',
          keywords: 'contacto Senova, consulta diseño interiores, presupuesto carpintería, showroom',
          ogTitle: 'Contacto | Senova',
          ogDescription:
            'Solicita una consulta personalizada para tu proyecto de carpintería de lujo o diseño de interiores. Visita nuestro showroom.',
          ogImage: 'https://senova.com/assets/images/og-contact.png',
          ogUrl: 'https://senova.com/contacto',
          twitterTitle: 'Contacto | Senova',
          twitterDescription:
            'Solicita una consulta personalizada para tu proyecto de carpintería de lujo o diseño de interiores.',
          twitterImage: 'https://senova.com/assets/images/twitter-contact.png',
          twitterUrl: 'https://senova.com/contacto',
        }
      },
      {
        path: 'nosotros',
        loadComponent: () => import('./about/about').then(m => m.About),
        data: {
          title: 'Nosotros | Senova',
          description:
            'Conoce la historia, filosofía y equipo de Senova. Artesanos especializados en carpintería de lujo con décadas de experiencia transformando espacios con maderas nobles y diseño excepcional.',
          keywords: 'sobre Senova, artesanos carpintería, historia, equipo diseño interiores, filosofía',
          ogTitle: 'Nosotros | Senova',
          ogDescription:
            'Artesanos especializados en carpintería de lujo con décadas de experiencia transformando espacios con maderas nobles y diseño excepcional.',
          ogImage: 'https://senova.com/assets/images/og-about.png',
          ogUrl: 'https://senova.com/nosotros',
          twitterTitle: 'Nosotros | Senova',
          twitterDescription:
            'Artesanos especializados en carpintería de lujo con décadas de experiencia transformando espacios con maderas nobles y diseño excepcional.',
          twitterImage: 'https://senova.com/assets/images/twitter-about.png',
          twitterUrl: 'https://senova.com/nosotros',
        }
      },
      {
        path: 'categorias',
        loadComponent: () => import('./category/category').then(m => m.Category),
        data: {
          title: 'Especialidades | Senova',
          description:
            'Explora nuestras especialidades: cocinas de lujo, vestidores a medida, bibliotecas, panelados, mobiliario de autor y más. Cada pieza es una obra de artesanía en madera.',
          keywords: 'especialidades carpintería, cocinas lujo, vestidores medida, bibliotecas, mobiliario autor, Senova',
          ogTitle: 'Especialidades | Senova',
          ogDescription:
            'Cocinas de lujo, vestidores a medida, bibliotecas, panelados y mobiliario de autor. Cada pieza es una obra de artesanía en madera.',
          ogImage: 'https://senova.com/assets/images/og-categories.png',
          ogUrl: 'https://senova.com/categorias',
          twitterTitle: 'Especialidades | Senova',
          twitterDescription:
            'Cocinas de lujo, vestidores a medida, bibliotecas, panelados y mobiliario de autor. Artesanía excepcional.',
          twitterImage: 'https://senova.com/assets/images/twitter-categories.png',
          twitterUrl: 'https://senova.com/categorias',
        }
      }
    ],
  },
];

export default pagesRoutes;
