import { defineQuery } from "next-sanity";

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
