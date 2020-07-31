import ResumeContent, { Profile, Skills } from './resumeContentType';

export const profile: Profile = {
  name: 'Kung-Ling Hsu',
  image: '/photo.png',
  mail: 'lancehsu12@gmail.com',
  summary:
    'A detail-oriented and dependable software engineer seeking a position to offer expertise in HTML/CSS/JavaScript, React.js, Redux, Apollo GraphQL, Next.js to develop web application.',
  github: 'https://github.com/lancehsu',
  linkedIn: 'https://www.linkedin.com/in/klhsu/',
  target: 'Front-end/Full-stack engineer',
};

export const skills: Skills = {
  proficiency: [
    'HTML/CSS/JavaScript',
    'TypeScript',
    'React',
    'React hooks',
    'Apollo GraphQL',
    'Redux',
    'Redux-Thunk',
    'Next.js',
    'Babylon.js',
    'Konva.js',
    'Material UI',
    'Fluent UI',
    'i18next',
    'Git',
    'Github',
    'VSCode',
  ],
  familiar: ['Gatsby.js', 'Express.js', 'MongoDB', 'MATLAB', 'Webpack', 'Heroku', 'Vim'],
  knowledge: [
    'Java',
    'Python',
    'Cpp',
    'SQL',
    'Sentry',
    'Docker',
    'machine learning',
    'image processing',
    'computer graphic',
    'data structure & algorithms',
  ],
};

const resumeContent: ResumeContent = {
  profile,
  skills,
  workExperience: {},
  education: {},
  projects: {},
};

export default resumeContent;
