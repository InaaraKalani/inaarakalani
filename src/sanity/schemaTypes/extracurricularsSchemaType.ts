import { defineType } from "sanity";
import { required } from "./validations";

export const extracurricularsSchemaType = defineType({
  name: "extracurriculars",
  title: "Extracurriculars",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: required },
    { name: "icon", title: "Icon", type: "string", validation: required },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: required,
    },
    {
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }],
      validation: required,
    },
  ],
});
