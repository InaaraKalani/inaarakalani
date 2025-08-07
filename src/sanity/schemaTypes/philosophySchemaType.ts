import { defineType } from "sanity";
import { required } from "./validations";

export const philosophySchemaType = defineType({
  name: "philosophy",
  title: "Philosophy",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: required },
    {
      name: "philosophy",
      title: "Philosophy",
      type: "text",
      validation: required,
    },
    {
      name: "imageLight",
      title: "Image (Light Mode)",
      type: "image",
      validation: required,
    },
    {
      name: "imageDark",
      title: "Image (Dark Mode)",
      type: "image",
      validation: required,
    },
  ],
});
