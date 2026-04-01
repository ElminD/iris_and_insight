export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
  placeholder: boolean;
}

export const team: TeamMember[] = [
  {
    name: 'Kelsey',
    role: 'Co-Founder / Therapist',
    bio: "Kelsey grew up on a farm in rural Wisconsin. She went to college in Decorah, Iowa and moved to Des Moines for a summer internship after she graduated, intending to move to the Twin Cities in the fall. Once in Des Moines, she fell in love and found herself 'home.' She got her Master's Degree in Clinical Mental Health Counseling from Drake University in 2018. She is a Lead Therapist at New Beginnings Counseling Service, clinical supervisor, presenter, and passionate therapist and advocate. Kelsey truly loves what she does. In her spare time, you can find her petting horses or dogs, spending time with her spouse and friends, or finding a new adventure.",
    photo: '/src/assets/images/people/kelsey-with-horse-1.jpg',
    placeholder: false,
  },
  {
    name: 'Sareena',
    role: 'Co-Founder / Therapist & Equine Professional',
    bio: 'Bio coming soon...',
    photo: '/src/assets/images/people/sareena-hugging-horse.jpg',
    placeholder: true,
  },
];
