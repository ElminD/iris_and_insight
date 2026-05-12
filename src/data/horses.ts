import catImg from '../assets/images/horses/Cat.jpg';
import ginnyImg from '../assets/images/horses/Ginny.jpg';
import greyImg from '../assets/images/horses/Grey.jpg';
import boomerImg from '../assets/images/horses/Boomer_JR.jpg';
import bodieImg from '../assets/images/horses/Bodie the Goatie.jpg';

export interface Horse {
  name: string;
  fullName?: string;
  photo?: string;
  imagePosition?: string;
  description: string;
}

export const horses: Horse[] = [
  {
    name: 'Cat',
    fullName: 'How D Iris',
    photo: catImg,
    description: 'The horse who started it all. Cat is the heart and soul of Iris + Insight.',
  },
  {
    name: 'Ginny',
    photo: ginnyImg,
    description: '',
  },
  {
    name: 'Grey',
    photo: greyImg,
    imagePosition: 'center top',
    description: '',
  },
  {
    name: 'Boomer JR',
    photo: boomerImg,
    description: '',
  },
];

export interface BonusAnimal {
  name: string;
  photo?: string;
  description: string;
}

export const bonusAnimals: BonusAnimal[] = [
  {
    name: 'Bodie the Goat',
    photo: bodieImg,
    description: 'Our resident goat and unofficial greeter.',
  },
];
