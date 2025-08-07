import { defineQuery } from "next-sanity";

export const skillsQuery = defineQuery(`*
    [_type == "skills"] | order(_createdAt asc) {
        title,
        description,
        skills[] {'name': name->name, variant}
    }
`);

export const experiencesQuery = defineQuery(`*
    [_type=="experiences"]|order(_createdAt desc)
    {title, company, period, description, achievements, history}
`);

export const educationQuery = defineQuery(`*
    [_type=="education"]|order(_createdAt desc)
    {title, description, institution, period, achievements}
`);

export const extracurricularsQuery = defineQuery(`*
    [_type=="extracurriculars"]|order(_createdAt asc)
    {title, description, icon, highlights}
`);
