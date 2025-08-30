import { defineQuery } from "next-sanity";

export const introductionQuery = defineQuery(`*
  [_type=="introduction"][0]
  {heading, roles, description, location, imageLight, imageDark, email, github, linkedin, instagram}
`);

export const aboutQuery = defineQuery(`*
  [_type=="about"][0]{
    heading,
    description,
    education {title, "latest":reference->{description, achievements}},
    skills {title, skills[] {"name": name->name, variant}},
    goals {title, goals}
  }
`);

export const achievementsQuery = defineQuery(`*
  [_type=="achievements"]|order(_createdAt asc)
  {title, highlight, description}
`);
