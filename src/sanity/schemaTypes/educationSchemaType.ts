import { defineType } from "sanity";
import { required } from "./validations";

export const educationSchemaType = defineType({
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: required },
    {
      name: "description",
      title: "Description",
      type: "string",
      validation: required,
    },
    {
      name: "institution",
      title: "Institution",
      type: "string",
      validation: required,
    },
    {
      name: "period",
      title: "Period",
      type: "string",
      validation: required,
    },
    {
      name: "achievements",
      title: "Achievements",
      type: "array",
      of: [{ type: "string" }],
      validation: required,
    },
  ],
});
