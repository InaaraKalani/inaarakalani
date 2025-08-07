import { defineType } from "sanity";
import { required } from "./validations";

export const skillSchemaType = defineType({
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: required,
      options: {
        list: [
          { title: "Frontend", value: "Frontend" },
          { title: "Backend", value: "Backend" },
          { title: "Other Tools", value: "Other Tools" },
        ],
      },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      validation: required,
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "reference",
              validation: required,
              to: [{ type: "technologies" }],
            },
            {
              name: "variant",
              title: "Variant",
              type: "string",
              validation: required,
              options: {
                list: [
                  { title: "Primary", value: "primary" },
                  { title: "Accent", value: "accent" },
                  { title: "Ghost", value: "ghost" },
                ],
              },
            },
          ],
        },
      ],
    },
  ],
});
