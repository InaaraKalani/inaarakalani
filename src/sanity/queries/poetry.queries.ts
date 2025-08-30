import { defineQuery } from "next-sanity";

export const poetryQuery = defineQuery(`*
    [_type=="poetry"]|order(order asc)
    {title, createdAt, type, tags, content}
`);
