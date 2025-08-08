import { defineQuery } from "next-sanity";

export const achievementsQuery = defineQuery(`*
    [_type=="achievements"]|order(_createdAt asc)
    {title, highlight, description}
`);
