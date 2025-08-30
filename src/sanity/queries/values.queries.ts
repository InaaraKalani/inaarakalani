import { defineQuery } from "next-sanity";

export const philosophyQuery = defineQuery(`*
    [_type=="philosophy"][0]
    {title, philosophy, imageLight, imageDark}
`);

export const inspirationsQuery = defineQuery(`*
    [_type=="inspirations"]|order(_createdAt asc)
    {name, title, image, impact, icon}
`);

export const quotesQuery = defineQuery(`*
    [_type=="quotes"]|order(_createdAt asc)
    {heading, quote, author, maxwidth}
`);

export const booksQuery = defineQuery(`*
    [_type=="books"]|order(_createdAt asc)
    {title, author, image, genre}
`);
