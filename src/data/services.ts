export interface Service {
  icon: string;
  name: string;
  description: string;
  signupUrl?: string;
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
    signupUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdYgQdkSi4oxPlNZemPRSQ7e3OQL_oRIhohq1d6QzxKGjDewQ/viewform',
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
