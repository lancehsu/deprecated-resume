type ResumeContent = {
  profile: Profile,
  skills: Skills,
  workExperience: WorkExperience,
  education: Education,
  projects: Projects,
}

export type Profile = {
  name: string,
  image: string,
  mail: string,
  github: string,
  linkedIn: string,
  summary: string,
  target: string,
}

export type Skills = {
  proficiency: string[],
  familiar: string[],
  knowledge: string[],
}

export type WorkExperience = {};

export type Education = {};

export type Projects = {};

export default ResumeContent;