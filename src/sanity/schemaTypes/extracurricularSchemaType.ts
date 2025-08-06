import { defineType } from "sanity";
import { required } from "./validations";

export const extracurricularSchemaType = defineType({
  name: "extracurricular",
  title: "Extracurricular",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: required },
    { name: "icon", title: "Icon", type: "string", validation: required },
    {
      name: "description",
      title: "Description",
      type: "string",
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
