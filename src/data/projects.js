import characterAtlasImage from '../../assets/Character-Atlas.png';
import nabtaImage from '../../assets/Nabta.png';
import calculatorImage from '../../assets/Calculator.png';
import rockPaperScissorsImage from '../../assets/Rock-Paper-Scissors-Game.png';
import stopwatchImage from '../../assets/Stopwatch.png';
import worldClockImage from '../../assets/Time-In-Paris.png';
import houseDrawingImage from '../../assets/HouseDraw.png';

export const featuredProjects = [
  {
    id: 'character-atlas',
    title: 'Character Atlas',
    description: 'A small explorer for memorable characters from familiar worlds.',
    category: 'Web experience',
    image: characterAtlasImage,
    imageAlt: 'Character Atlas home page',
    liveUrl: 'https://abdaltwabsayed.github.io/Character-Atlas/',
    featured: true,
  },
  {
    id: 'nabta',
    title: 'Nabta',
    description: 'A responsive e-commerce storefront.',
    category: 'Web experience',
    image: nabtaImage,
    imageAlt: 'Nabta responsive e-commerce storefront',
    liveUrl: 'https://abdaltwabsayed.github.io/Nabta-Storefront/',
  },
];

export const miniProjects = [
  {
    id: 'calculator',
    title: 'Calculator',
    description: 'A browser-based calculator.',
    category: 'Interactive tool',
    image: calculatorImage,
    imageAlt: 'Calculator project screenshot',
    liveUrl: 'https://abdaltwabsayed.github.io/Calculator/',
    technologies: ['JavaScript'],
  },
  {
    id: 'rock-paper-scissors',
    title: 'Rock Paper Scissors',
    description: 'A classic game built for the browser.',
    category: 'Interactive tool',
    image: rockPaperScissorsImage,
    imageAlt: 'Rock Paper Scissors game screenshot',
    sourceUrl:
      'https://github.com/abdaltwabsayed/My-Web-Development/tree/master/rockPaperScissors/rockPaperScissors.html',
    technologies: ['JavaScript'],
  },
  {
    id: 'stopwatch',
    title: 'Stopwatch',
    description: 'A simple browser stopwatch.',
    category: 'Interactive tool',
    image: stopwatchImage,
    imageAlt: 'Stopwatch project screenshot',
    sourceUrl:
      'https://github.com/abdaltwabsayed/My-Web-Development/tree/master/stopwatch/stopwatch.html',
    technologies: ['JavaScript'],
  },
  {
    id: 'world-clock',
    title: 'World Clock',
    description: 'A clock for checking time around the world.',
    category: 'Interactive tool',
    image: worldClockImage,
    imageAlt: 'World Clock project screenshot',
    liveUrl: 'https://abdaltwabsayed.github.io/World-Clock/',
    technologies: ['JavaScript'],
  },
  {
    id: 'pokemon-fetcher',
    title: 'Pokémon Fetcher',
    description: 'A Pokémon-themed web project.',
    category: 'Web project',
    liveUrl: 'https://abdaltwabsayed.github.io/Pokemon-Fetcher/',
    illustration: 'pokemon',
  },
  {
    id: 'house-mocking-drawing',
    title: 'House Mocking Drawing',
    description: 'A drawing made with web technologies.',
    category: 'Visual study',
    image: houseDrawingImage,
    imageAlt: 'House drawing made with web technologies',
    sourceUrl:
      'https://github.com/abdaltwabsayed/My-Web-Development/tree/master/HouseMockingDrawing.html',
  },
];

export const teamProject = {
  id: 'nahed',
  title: 'Nahed',
  description:
    'A Telegram bot built with two colleagues to help university teachers manage assignments and share files with students.',
  category: 'Team project',
  contribution:
    'My contribution: Login, Registration, and Assignment features implemented in Java.',
  technologies: ['Java'],
  illustration: 'nahed',
};
