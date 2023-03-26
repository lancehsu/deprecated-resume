export enum Companies {
  linker = 'Linker Networks Inc.',
  appier = 'Appier Inc.',
  cdc = 'Crypto.com',
  cronos = 'Cronos Labs',
}

export enum Colleges {
  NTU = 'National Taiwan University',
  NCHU = 'National Chung Hsing University',
}

export enum ProjectNames {
  Azure = 'Factory AI Vision',
}

export type ResumeContent = {
  profile: Profile;
  skills: Skills;
  workExperience: WorkExperience;
  education: Education;
  project: Project;
};

export type Profile = {
  name: string;
  image: string;
  mail: string;
  github: string;
  linkedIn: string;
  summary: string;
  target: string;
};

export type Skills = {
  proficiency: string[];
  familiar: string[];
  knowledge: string[];
};

export type Detail = { title?: string; url?: string };
export type Content = Detail & { details?: ReadonlyArray<Detail> };

export type WorkExperienceInfo = {
  title: string;
  location: string;
  from?: string;
  to?: string;
  content: ReadonlyArray<Content>;
};

export type WorkExperience = Record<Companies, WorkExperienceInfo>;

export type EducationInfo = {
  from: string;
  to: string;
  location: string;
  degree: string;
  content?: Content[];
};
export type Education = Record<Colleges, EducationInfo>;

export type ProjectInfo = {
  image: string;
  content: string;
  githubLink: string;
};
export type Project = Record<ProjectNames, ProjectInfo>;
