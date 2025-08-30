import { defineType } from "sanity";
import { required } from "./validations";

export const introductionSchemaType = defineType({
  name: "introduction",
  title: "Introduction",
  type: "document",
  fields: [
    { name: "heading", title: "Heading", type: "string", validation: required },
    {
      name: "roles",
      title: "Roles",
      type: "array",
      of: [{ type: "string", validation: required }],
      validation: required,
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: required,
    },
    {
      name: "location",
      title: "Location (City, Country)",
      type: "string",
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
    {
      name: "email",
      title: "Email Address",
      type: "email",
      validation: required,
    },
    {
      name: "github",
      title: "Github",
      type: "object",
      validation: required,
      fields: [
        { name: "name", type: "string" },
        { name: "url", type: "url" },
      ],
    },
    {
      name: "linkedin",
      title: "LinkedIn",
      type: "object",
      validation: required,
      fields: [
        { name: "name", type: "string" },
        { name: "url", type: "url" },
      ],
    },
    {
      name: "instagram",
      title: "Instagram",
      type: "object",
      validation: required,
      fields: [
        { name: "name", type: "string" },
        { name: "url", type: "url" },
      ],
    },
  ],
});
