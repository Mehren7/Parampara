export type Instructor = {
  id: string;
  name: string;
  expertise: string;
  languages: string[];
  ratePerHour: number;
  location: string;
  description: string;
  specialties: string[];
};

export const instructors: Instructor[] = [
  {
    id: '1',
    name: 'Meena Sharma',
    expertise: 'Hindi and Culture Mentor',
    languages: ['Hindi', 'English'],
    ratePerHour: 12,
    location: 'Jaipur, Rajasthan',
    description:
      'Meena teaches spoken Hindi, festival customs, devotional songs, and family storytelling in warm 1:1 sessions.',
    specialties: ['Hindi conversation', 'Diwali traditions', 'Indian folk stories'],
  },
  {
    id: '2',
    name: 'Priya Nair',
    expertise: 'Malayalam & South Indian Cuisine',
    languages: ['Malayalam', 'English'],
    ratePerHour: 14,
    location: 'Kochi, Kerala',
    description:
      'Priya combines language learning with cooking rituals, proverbs, and daily life vocabulary rooted in Kerala culture.',
    specialties: ['Malayalam basics', 'Home cooking', 'Cultural context'],
  },
  {
    id: '3',
    name: 'Shreya Patel',
    expertise: 'Gujarati Traditions',
    languages: ['Gujarati', 'English', 'Hindi'],
    ratePerHour: 10,
    location: 'Ahmedabad, Gujarat',
    description:
      'Shreya helps learners reclaim Gujarati identity through songs, family recipes, folk crafts, and conversation practice.',
    specialties: ['Gujarati language', 'Festivals', 'Family crafts'],
  },
];
