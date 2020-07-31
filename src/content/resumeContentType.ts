type ResumeContent = {
  profile: Profile;
  skills: Skills;
  workExperience: WorkExperience;
  education: Education;
  projects: Projects;
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

type Content = { name: string; url?: string; details?: { name: string; url?: string }[] };

export type WorkExperience = {
  [company: string]: {
    title: string;
    from: string;
    to: string;
    content: Content[];
  };
};

export type Education = {
  [company: string]: {
    from: string;
    to: string;
    content: Content[];
  };
};

export type Projects = {};

export default ResumeContent;
