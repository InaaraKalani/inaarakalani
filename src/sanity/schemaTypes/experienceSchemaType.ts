import { defineType } from "sanity";
import { required } from "./validations";

export const experienceSchemaType = defineType({
  name: "experiences",
  title: "Experiences",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: required },
    { name: "company", title: "Company", type: "string", validation: required },
    { name: "period", title: "Period", type: "string", validation: required },
    {
      name: "description",
      title: "Description",
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
    {
      name: "history",
      title: "History",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: required,
            },
            {
              name: "company",
              title: "Company",
              type: "string",
              validation: required,
            },
            {
              name: "period",
              title: "Period",
              type: "string",
              validation: required,
            },
          ],
        },
      ],
    },
  ],
});
