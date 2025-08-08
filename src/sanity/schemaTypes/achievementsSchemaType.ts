import { defineType } from "sanity";
import { required } from "./validations";

export const achievementsSchemaType = defineType({
  name: "achievements",
  title: "Achievements",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: required },
    {
      name: "highlight",
      title: "Highlight",
      type: "string",
      validation: required,
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: required,
    },
  ],
});
