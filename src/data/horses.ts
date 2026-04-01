import catImg from '../assets/images/horses/Cat.jpg';
import ginnyImg from '../assets/images/horses/Ginny.jpg';
import greyImg from '../assets/images/horses/Grey.jpg';
import boomerImg from '../assets/images/horses/Boomer_JR.jpg';
import bodieImg from '../assets/images/horses/Bodie the Goatie.jpg';
import catsImg from '../assets/images/scenic/Friendly Cat and Scaredy Cat.jpg';

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
    description: 'Description coming soon...',
  },
  {
    name: 'Grey',
    photo: greyImg,
    imagePosition: 'center top',
    description: 'Description coming soon...',
  },
  {
    name: 'Boomer JR',
    photo: boomerImg,
    description: 'Description coming soon...',
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
  {
    name: 'Friendly Cat & Scaredy Cat',
    photo: catsImg,
    description: 'The barn cats who keep everyone company.',
  },
];
