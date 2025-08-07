import { defineQuery } from "next-sanity";

export const philosophyQuery = defineQuery(`*
    [_type=="philosophy"][0]
    {title, philosophy, imageLight, imageDark}
`);

export const inspirationsQuery = defineQuery(`*
    [_type=="inspirations"]|order(date asc)
    {name, title, image, impact}
`);

export const quotesQuery = defineQuery(`*
    [_type=="quotes"]|order(date asc)
    {heading, quote, author, maxwidth}
`);

export const booksQuery = defineQuery(`*
    [_type=="books"]|order(date asc)
    {title, author, image, genre}
`);
