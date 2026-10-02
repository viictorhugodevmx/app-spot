export type Place = {
  id: string;
  emoji: string;
  name: string;
  location: string;
  description: string;
  category: string;
};

export const PLACES: Place[] = [
  {
    id: 'hidden-beach',
    emoji: '🌊',
    name: 'Hidden Beach',
    location: 'Pacific Coast',
    description:
      'A quiet beach surrounded by cliffs, perfect for disconnecting and enjoying the ocean.',
    category: 'Beach',
  },
  {
    id: 'mountain-cabin',
    emoji: '🏔️',
    name: 'Mountain Cabin',
    location: 'Highlands',
    description:
      'A cozy cabin surrounded by mountains, cold mornings and peaceful hiking trails.',
    category: 'Nature',
  },
  {
    id: 'old-town',
    emoji: '🏛️',
    name: 'Old Town',
    location: 'Historic District',
    description:
      'Cobblestone streets, local cafés and historic architecture made for slow exploration.',
    category: 'City',
  },
  {
    id: 'forest-retreat',
    emoji: '🌲',
    name: 'Forest Retreat',
    location: 'Northern Forest',
    description:
      'A quiet retreat surrounded by trees, trails and plenty of space to unplug.',
    category: 'Nature',
  },
];
