import { defineType } from "sanity";
import { required } from "./validations";

export const inspirationSchemaType = defineType({
  name: "inspirations",
  title: "Inspirations",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string", validation: required },
    { name: "title", title: "Title", type: "string", validation: required },
    { name: "image", title: "Image", type: "image", validation: required },
    { name: "impact", title: "Impact", type: "string", validation: required },
    {
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          { title: "Stage Mic", value: "stageMic" },
          { title: "Rocket", value: "rocket" },
          { title: "Books", value: "books" },
          { title: "Pen", value: "pen" },
          { title: "Open Book", value: "openBook" },
        ],
      },
    },
  ],
});
