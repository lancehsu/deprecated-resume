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
    'A detail-oriented and dependable software engineer with 4+ years experience. Familiar with React, TypeScript, GraphQL, and Redux. Experienced in developing web and decentralized applications.',
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
    'Web3',
  ],
  familiar: [
    'Express.js',
    'MongoDB',
    'SQL',
    'Gatsby.js',
    'Heroku',
    'Konva.js',
    'Babylon.js',
    'Docker',
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
  [Companies.cronos]: {
    title: 'Software Developer',
    location: 'Taipei, Taiwan',
    from: 'Nov 2022',
    to: 'Present',
    content: [
      {
        details: [
          {
            title: 'Developing web3 lending platform using React, TypeScript, Next.js, and Web3.js',
          },
          {
            title: 'Developing NFT marketplace and decentralized exchange platform',
          },
        ],
      },
    ],
  },
  [Companies.cdc]: {
    title: 'Software Developer',
    location: 'Taipei, Taiwan',
    from: 'Mar 2022',
    to: 'Nov 2022',
    content: [
      {
        details: [
          {
            title: 'Developing web3 application using React, TypeScript, and Web3.js',
          },
        ],
      },
    ],
  },
  [Companies.appier]: {
    title: 'Software Engineer',
    location: 'Taipei, Taiwan',
    from: 'Oct 2020',
    to: 'Mar 2022',
    content: [
      {
        // title: 'Building data science platform',
        details: [
          {
            title:
              'Developing web application using React, TypeScript, PostCSS, GraphQL, and MongoDB',
          },
          {
            title:
              'Communicating with UI/UX designers, PM, and back-end team to clarify the requirement',
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
    location: 'Taipei, Taiwan',
    from: 'Feb 2019',
    to: 'Aug 2020',
    content: [
      {
        // title: 'Building data labeling platform',
        details: [
          {
            title:
              'Developing 2D image labeling system using TypeScript, React.js, Apollo GraphQL, Next.js, and canvas 2d library Konva.js',
          },
          { title: 'Developing medical image labeling system for CT and MRI images labeling' },
          {
            title: 'Developing LiDAR point cloud labeling system using WebGL framework Babylon.js',
          },
          // { title: 'Communicate with back-end engineers about API design' },
          // { title: 'Providing web app internationalization by i18next for global users' },
          // {
          //   title:
          //     'Communicate with data scientists about UX and APIs for label assistance tools implemented using computer vision and machine learning',
          // },
          {
            title:
              'Developing Microsoft Vision on Edge solution with Typescript, React.js, Redux, Redux-Thunk, Konva.js, and Fluent UI',
            url: 'https://github.com/Azure-Samples/azure-intelligent-edge-patterns',
          },
        ],
      },
    ],
  },
};

export const education: Education = {
  [Colleges.NTU]: {
    from: 'Sep 2014',
    to: 'Jun 2017',
    location: 'Taipei, Taiwan',
    degree: 'Master of Engineering, Bio-Industrial Mechatronics Engineering',
    // content: [
    // {
    //   title: 'Conference',
    //   details: [
    //     {
    //       title:
    //         'International Symposium on Machinery and Mechatronics for Agriculture and Bio-systems Engineering (ISMAB) 2016',
    //     },
    //     { title: 'Conference on Agricultural Machinery and Bio-Mechatronics Engineering 2016' },
    //   ],
    // },
    // {
    //   title: 'Journal',
    //   details: [
    //     {
    //       title:
    //         'Hsu, H.-C., Hsu, K.-L., Chan, C.-Y., Wang, C.-N., & Kuo, Y.-F., Quantifying colour and spot characteristics for the ventral petals in Sinningia speciosa, Biosystems Engineering, 167, 40-50.',
    //       url: 'https://www.sciencedirect.com/science/article/abs/pii/S1537511017308218',
    //     },
    //   ],
    // },
    // ],
  },
  [Colleges.NCHU]: {
    location: 'Taichung, Taiwan',
    from: 'Sep 2009',
    to: 'Jun 2014',
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
