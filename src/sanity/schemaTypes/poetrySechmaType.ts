import { defineType } from "sanity";
import { required } from "./validations";

export const poetrySchemaType = defineType({
  name: "poetry",
  title: "Poetry & Song Lyrics",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: required },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      validation: required,
    },
    {
      name: "createdAt",
      title: "Created at (MMMM YYYY)",
      type: "string",
      validation: required,
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      validation: required,
      options: {
        list: [
          { title: "Poetry", value: "poetry" },
          { title: "Song Lyrics", value: "song" },
        ],
      },
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string", validation: required }],
      validation: required,
    },
    {
      name: "content",
      title: "Content",
      type: "text",
      validation: required,
    },
  ],
});
