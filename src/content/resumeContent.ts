import {
  ResumeContent,
  Education,
  Profile,
  Skills,
  WorkExperience,
  Project,
  Companies,
  Colleges,
  ProjectNames,
} from './resumeContentType';

export const profile: Profile = {
  name: 'Kung-Ling Hsu',
  image: './profile.png',
  mail: 'lancehsu12@gmail.com',
  summary:
    'A detail-oriented and dependable software engineer seeking a position to offer expertise in HTML/CSS/JavaScript, React.js, Redux, Apollo GraphQL, MongoDB to develop web application.',
  github: 'https://github.com/lancehsu',
  linkedIn: 'https://www.linkedin.com/in/klhsu/',
  target: 'Front-end/Full-stack engineer',
};

export const skills: Skills = {
  proficiency: [
    'HTML/CSS/JavaScript',
    'TypeScript',
    'React',
    'GraphQL',
    'Redux',
    'Next.js',
    'Material UI',
    'i18n',
    'Git',
  ],
  familiar: [
    'Express.js',
    'MongoDB',
    'SQL',
    'Gatsby.js',
    'Webpack',
    'Heroku',
    'Konva.js',
    'Babylon.js',
    'Docker',
    'Storybook',
  ],
  knowledge: [
    'Java',
    'Python',
    'Redis',
    'machine learning',
    'image processing',
    'computer graphic',
  ],
};

export const workExperience: WorkExperience = {
  [Companies.appier]: {
    title: 'Software Engineer',
    from: '2020 Oct',
    to: 'Present',
    content: [
      {
        title: 'Building data science platform',
        details: [
          {
            title:
              'Developing web application using React, TypeScript, PostCSS, GraphQL, & MongoDB',
          },
          {
            title:
              'Communicate with UI/UX designers, PM, & back-end team to clarify the requirement',
          },
          {
            title:
              'Planning sprint tasks with front-end team and ensure the tasks are delivered smoothly',
          },
        ],
      },
    ],
  },
  [Companies.linker]: {
    title: 'Software Engineer',
    from: '2019 Feb',
    to: '2020 Aug',
    content: [
      {
        title: 'Building data labeling platform',
        details: [
          {
            title:
              'Developing web application using TypeScript, React.js, Apollo GraphQL, Next.js, & Fluent UI',
          },
          { title: 'Developing 2D image labeling system using canvas 2d library Konva.js' },
          { title: 'Developing medical image labeling system for CT & MRI images labeling' },
          {
            title: 'Developing LiDAR point cloud labeling system using WebGL framework Babylon.js',
          },
          { title: 'Communicate with back-end engineers about API design' },
          { title: 'Providing web app internationalization by i18next for global users' },
          {
            title:
              'Communicate with data scientists about UX and APIs for label assistance tools implemented using computer vision and machine learning',
          },
        ],
      },
      {
        title:
          'Developing Microsoft Vision on Edge solution with Typescript, React.js, Redux, Redux-Thunk, Konva.js, & Fluent UI',
        url: 'https://github.com/Azure-Samples/azure-intelligent-edge-patterns',
      },
    ],
  },
};

export const education: Education = {
  [Colleges.NTU]: {
    from: '2014',
    to: '2017',
    degree: 'Master of Engineering, Bio-Industrial Mechatronics Engineering',
    content: [
      {
        title: 'Conference',
        details: [
          {
            title:
              'International Symposium on Machinery and Mechatronics for Agriculture and Bio-systems Engineering (ISMAB) 2016',
          },
          { title: 'Conference on Agricultural Machinery and Bio-Mechatronics Engineering 2016' },
        ],
      },
      {
        title: 'Journal',
        details: [
          {
            title:
              'Hsu, H.-C., Hsu, K.-L., Chan, C.-Y., Wang, C.-N., & Kuo, Y.-F., Quantifying colour and spot characteristics for the ventral petals in Sinningia speciosa, Biosystems Engineering, 167, 40-50.',
            url: 'https://www.sciencedirect.com/science/article/abs/pii/S1537511017308218',
          },
        ],
      },
    ],
  },
  [Colleges.NCHU]: {
    from: '2009',
    to: '2014',
    degree: 'Bachelor of Engineering, Chemical Engineering',
  },
};

export const project: Project = {
  [ProjectNames.Azure]: {
    image: './Azure-Sample.png',
    githubLink:
      'https://github.com/Azure-Samples/azure-intelligent-edge-patterns/tree/master/factory-ai-vision',
    content:
      'A sample showing how to deploy a Custom Vision model to Azure IoT edge device and get Machine learning solution up and running in a single day.',
  },
};

const resumeContent: ResumeContent = {
  profile,
  skills,
  workExperience,
  education,
  project,
};

export default resumeContent;
