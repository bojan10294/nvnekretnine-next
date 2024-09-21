import { IconType } from 'components/Icon';

export const buttonClasses =
  'inline-block py-3 text-white uppercase rounded-4xl px-7 lg:px-9 lg:py-4 lg:text-lg bg-primary hover:bg-primary-dark duration-200';

export const navLinks = [
  {
    link: '/gradjevinsko-preduzece',
    title: 'Građevinsko preduzeće'
  },
  {
    link: '/gradjevinsko-preduzece#reference',
    title: 'Reference'
  },
  {
    link: '/prodaja-stanova',
    title: 'Prodaja stanova'
  },
  {
    link: '/kontakt',
    title: 'Kontakt'
  }
];

export const inputClasses =
  'w-full px-4 pt-4 pb-2 border-b-2 outline-transparent focus:border-b-primary';

interface Service {
  title: string;
  description: string;
  shortDescription: string;
  img: string;
  icon: IconType;
}

export const services: Service[] = [
  {
    description:
      'We create web applications which are designed to provide users with dynamic, interactive, and user-friendly experiences. Our applications can be as simple as a static website that provides information, or as complex as a cloud-based system that enables users to interact with each other and with vast amounts of data. Examples of web applications include e-commerce websites, social media platforms, online forums, news websites, online productivity tools such as email, project management, and office applications, and many others.',
    icon: 'web-app',
    img: '/img/services-1.webp',
    shortDescription:
      'We create web applications which are designed to provide users with dynamic, interactive, and user-friendly experiences. Our applications can be as simple as a static website that provides information, or as complex as a cloud-based system.',
    title: 'Web applications'
  },
  {
    description:
      'We provide a range of frontend development services, including designing and building user interfaces, implementing interactive features and animations, and ensuring cross-browser compatibility. We also provide deployment, caching, and performance tuning services for frontend infrastructure management and optimization. Our applications are always highly usable and accessible to a variety of users, including those with disabilities.',
    icon: 'frontend',
    img: '/img/services-3.webp',
    shortDescription:
      'We provide a range of frontend development services, including designing and building user interfaces, implementing interactive features and animations, and ensuring cross-browser compatibility.',
    title: 'Frontend development'
  },
  {
    description:
      'We provide backend services that include building and maintaining the APIs, databases and other server side components of web applications and software systems. In addition, we provide services for managing and optimizing the backend infrastructure, such as load balancing, performance tuning, and server configuration. We also provide consulting and support services to help businesses decide strategically about their backend architecture and technology stack.',
    icon: 'backend',
    img: '/img/services-5.png',
    shortDescription:
      'We offer backend services for web applications and software systems, which include creating and maintaining databases, APIs, and other server-side components.',
    title: 'Backend development'
  },
  {
    description:
      'We provide UX and UI services which help clients to create products and services that are easy to use, enjoyable, and meet the needs of their users. We design user interfaces that are both aesthetically pleasing and intuitive to navigate and use. They conduct user research and testing to evaluate the usability and effectiveness of their designs, and refine their work based on feedback from users.',
    icon: 'backend',
    img: '/img/services-4.webp',
    shortDescription:
      'We provide UX and UI services which help clients to create products and services that are easy to use, enjoyable, and meet the needs of their users. We design user interfaces that are both aesthetically pleasing and intuitive to navigate and use.',
    title: 'UX/UI design'
  },
  {
    description:
      'Our company provides DevOps and cloud services to help businesses with their software development and deployment processes. Our services include automating software development workflows, managing cloud infrastructure, implementing continuous integration and continuous deployment pipelines, and providing cloud security. With DevOps and cloud methodologies businesses can accelerate their software development processes, reduce errors and downtime, and deliver better products and services in a scalable and cost-effective manner.',
    icon: 'cloud',
    img: '/img/services-6.jpg',
    shortDescription:
      'We offer a range of services, including automating software development workflows, managing cloud infrastructure, implementing continuous integration and continuous deployment pipelines, and providing cloud security.',
    title: 'Cloud services'
  },
  {
    description:
      'Our company provides Content Management System services that offers businesses a software platform to manage and publish digital content. We provide businesses with a user-friendly interface that simplifies the process of creating and publishing digital content, without requiring technical expertise. We also offer features such as content scheduling, version control, and access control to ensure that content is managed efficiently and securely. Additionally, CMS companies provide integration with other software systems such as e-commerce platforms, analytics tools, and social media channels.',
    icon: 'cms',
    img: '/img/services-2.webp',
    shortDescription:
      'Our company provide businesses with a user-friendly interface that simplifies the process of creating and publishing digital content, without requiring technical expertise.',
    title: 'Content Management System'
  }
];
