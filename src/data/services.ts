export interface Service {
  icon: string;
  name: string;
  description: string;
  workshop?: Workshop;
}

export interface Workshop {
  // The name that will be shown for the workshop.
  name: string;
  // The date that will be shown for the workshop.
  // Does not have to be a "literal" date, any string works.
  date: string;
  // Must point to an image in the public folder in the form /assets/path/to/image.jpg
  image: string;
  // The date the workshop should no longer shop up on the website.
  // Include the time and timezone (E.G. 2026-07-17T00:00:00-05:00)
  cutoff: Date;
  // The url to the signup for the workshop.
  signupUrl: string;
}

export const services: Service[] = [
  {
    icon: '🐴',
    name: 'EAL Sessions',
    description: 'Experiential learning with horses',
  },
  {
    icon: '💬',
    name: 'EAP Sessions',
    description: 'Equine-assisted psychotherapy',
  },
  {
    icon: '🏢',
    name: 'Corporate Partnerships',
    description: 'Team building & leadership development',
  },
  {
    icon: '🎓',
    name: 'Workshops',
    description: 'Group learning experiences',
    workshop: {
      name: 'Herd Wisdom: Understanding Ourselves Through Horse Interaction',
      date: 'July 24 2026 6pm to 7:30pm',
      // Must point to an image in the public folder in the form /assets/path/to/image.jpg
      image: '/assets/images/workshops/IrisAndInsight-July24-2026-Workshop-Flyer.jpg',
      cutoff: new Date('2026-07-17T00:00:00-05:00'),
      signupUrl:
        'https://docs.google.com/forms/d/e/1FAIpQLSfvCM620HQTfeVwa2nsfCgwTn9fVWk48JVIVxRDlBqNW-FP6w/viewform',
    },
  },
];

export const clientTags: string[] = [
  'Adolescents',
  'Adults',
  'Couples',
  'Families',
  'Businesses',
  'LGBTQ+',
  'Corporate Teams',
];
