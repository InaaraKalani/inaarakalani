import { defineType } from "sanity";
import { required } from "./validations";

export const aboutSchemaType = defineType({
  name: "about",
  title: "About Me",
  type: "document",
  fields: [
    { name: "heading", title: "Heading", type: "string", validation: required },
    {
      name: "description",
      title: "Description",
      type: "string",
      validation: required,
    },
    {
      name: "education",
      type: "object",
      validation: required,
      fields: [
        { name: "title", title: "Title", type: "string", validation: required },
        {
          name: "reference",
          title: "Last Education",
          type: "reference",
          validation: required,
          to: [{ type: "education" }],
        },
      ],
    },
    {
      name: "skills",
      type: "object",
      validation: required,
      fields: [
        { name: "title", title: "Title", type: "string" },
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
                      { title: "Muted", value: "muted" },
                      { title: "Ghost", value: "ghost" },
                    ],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "goals",
      title: "Future Goals",
      type: "object",
      fields: [
        { name: "title", title: "Title", type: "string" },
        {
          name: "goals",
          title: "goals",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    },
  ],
});
