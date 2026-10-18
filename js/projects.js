// To add a project: append one entry. The page renders the list in this order.
// `art` colours the preview window: a dark `base` lit by two glows.
export const projects = [
  {
    name: 'The Cocktail Cabinet',
    kind: 'Games',
    url: 'https://cocktail-cabinet.eliweiss.me',
    description: 'Seven arcade games you can play as the human or as the computer: Snake, Breakout, Splat, Asteroids, Missile Command, Imitation and Mastermind.',
    art: { base: '#0a0d18', glowA: '#ffb020', glowB: '#28d7f0' },
  },
  {
    name: 'CS Quiz',
    kind: 'Quiz',
    url: 'https://quiz.eliweiss.me',
    description: 'Ten computer science topics, twenty timed questions each, and a full review of why every answer is right or wrong.',
    art: { base: '#0e1026', glowA: '#7a5cff', glowB: '#33d6c0' },
  },
  {
    name: 'Jack and the Beanstalk',
    kind: 'AI Image',
    url: 'https://beanstalk.eliweiss.me',
    description: 'Upload a photo, get cartoonified in the style you pick, and star as Jack planting the magic beans and climbing the beanstalk.',
    art: { base: '#0b1a10', glowA: '#e8b33c', glowB: '#4fbf6a' },
  },
];
