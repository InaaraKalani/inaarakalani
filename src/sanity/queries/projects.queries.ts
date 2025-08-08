import { defineQuery } from "next-sanity";

export const projectStatsQuery = defineQuery(`{
  'totalProjects': count(*[_type == "projects"]),
  'completedProjects': count(*[_type == "projects" && status=="completed"]),
  'ongoingProjects': count(*[_type == "projects" && status=="ongoing"]),
  'technologies': count(*[_type == "technologies"])
}`);

export const featuredProjectsQuery = defineQuery(`*
  [_type == "projects" && featured == true]
  {
    title,
    description,
    longDescription,
    image,
    liveUrl,
    githubUrl,
    gitlabUrl,
    technologies[]->{name, variant},
  }  
`);

export const projectsQuery = defineQuery(`*
  [_type == "projects"]
  | order(year desc, _createdAt desc)
  {
    title,
    description,
    longDescription,
    image,
    year,
    liveUrl,
    githubUrl,
    gitlabUrl,
    featured,
    category,
    status,
    teamType,
    teamCount,
    applications,
    technologies[]->{name, variant},
    highlights
  }  
`);
