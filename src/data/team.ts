import kelseyImg from '../assets/images/people/Kelsey Finch.webp';
import sareenaImg from '../assets/images/people/Sareena.webp';

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
  imagePosition?: string;
  placeholder: boolean;
}

export const team: TeamMember[] = [
  {
    name: 'Kelsey',
    role: 'Co-Founder / Therapist',
    bio:
      'Kelsey (she/her) grew up on a farm in rural Wisconsin. While not necessarily a traditional "farm girl," she always loved the animals and riding through the fields on a 4-wheeler. She went to college in Decorah, Iowa and studied world religions and psychology. She recognizes and finds value in the different experiences and worldviews people have. She moved to Des Moines, intending just to stay for a summer internship. Once in Des Moines, she fell in love and found herself "home." She got her Master\'s Degree in Clinical Mental Health Counseling from Drake University in 2018. She is Lead Therapist at New Beginnings Counseling Service, clinical supervisor, presenter, and a passionate therapist and advocate. Kelsey truly loves what she does and, as corny as it may sound, finds it an honor to walk alongside her clients.' +
      '\n\n' +
      'In her spare time, you can find her petting animals, especially dogs and horses, spending time with her people, or finding a new adventure. She loves to travel and jumps at the opportunity to explore a new place, though she loves coming home just as much.',
    photo: kelseyImg,
    imagePosition: 'center top',
    placeholder: false,
  },
  {
    name: 'Sareena',
    role: 'Co-Founder / Therapist & Equine Professional',
    bio:
      'From an early age, Sareena (she/her) developed a deep connection with horses, growing up showing horses and gaining hands-on experience that would shape both her personal and professional paths. Surrounded by family members and influential role models in the equine industry, she built a strong foundation of knowledge rooted in tradition, mentorship, and lived experience. Throughout her youth and into adulthood, she trained barrel horses and competed in rodeos across the Midwest, building not only strong horsemanship skills but also a profound respect for the partnership between horse and human.' +
      '\n\n' +
      'As a teenager, Sareena had the opportunity to work under an experienced trainer, where she further developed her skills and deepened her understanding of horse behavior, training, and care. These formative years, combined with the guidance of family and mentors, instilled in her a deep appreciation for communication, trust, and consistency—principles that continue to guide her work today. Horses have been more than a passion—they have been powerful teachers. Through years of experience, Sareena has learned countless life lessons from them, including patience, resilience, emotional awareness, and the importance of authentic connection. These lessons are at the heart of the equine-assisted therapy work she offers.' +
      '\n\n' +
      'Sareena has worked in the mental health field since 2012, serving in a variety of roles and gaining a wealth of knowledge and resources along the way. Sareena received her MSW from the University of Northern Iowa in 2024, she is currently practicing as an LMSW. Sareena utilizes a variety of therapeutic approaches to support each individual in meeting their goals, including training in somatic-based approaches. Sareena believes that therapy should never be one-size-fits-all; instead, she tailors her approach to each client, helping them identify and work toward their own personal goals.' +
      '\n\n' +
      'Above all, Sareena is committed to creating a space where every client feels welcome, accepted, and valued exactly as they are. By blending her extensive background in mental health with her lifelong experience with horses, she offers a unique and grounded approach to healing, growth, and self-discovery.',
    photo: sareenaImg,
    placeholder: false,
  },
];
