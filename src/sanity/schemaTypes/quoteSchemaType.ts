import { defineType } from "sanity";
import { required } from "./validations";

export const quoteSchemaType = defineType({
  name: "quotes",
  title: "Quotes",
  type: "document",
  fields: [
    { name: "heading", title: "Heading", type: "string", validation: required },
    { name: "quote", title: "Quote", type: "text", validation: required },
    { name: "author", title: "Author", type: "string", validation: required },
    {
      name: "maxwidth",
      title: "Container Width",
      type: "string",
      validation: required,
      options: {
        list: [
          { title: "XL", value: "max-w-xl" },
          { title: "2XL", value: "max-w-2xl" },
          { title: "3XL", value: "max-w-3xl" },
          { title: "4XL", value: "max-w-4xl" },
        ],
      },
    },
  ],
});
