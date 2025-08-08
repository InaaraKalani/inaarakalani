import { defineType } from "sanity";
import { required } from "./validations";

export const bookSchemaType = defineType({
  name: "books",
  title: "Books",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: required },
    { name: "author", title: "Author", type: "string", validation: required },
    { name: "image", title: "Image", type: "image", validation: required },
    { name: "genre", title: "Genre", type: "string", validation: required },
  ],
});
