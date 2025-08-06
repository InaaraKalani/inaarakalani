import { defineType } from "sanity";
import { required } from "./validations";

export const technologySchemaType = defineType({
  name: "technologies",
  title: "Technologies",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string", validation: required },
    {
      name: "variant",
      title: "Variant",
      type: "string",
      validation: required,
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Accent", value: "accent" },
          { title: "Neutral", value: "neutral" },
        ],
      },
    },
  ],
});
