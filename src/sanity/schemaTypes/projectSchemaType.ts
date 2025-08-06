import { defineType } from "sanity";
import { required } from "./validations";

export const projectSchemaType = defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: required,
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      validation: required,
    },
    {
      name: "longDescription",
      title: "Long Description",
      type: "text",
      validation: required,
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: required,
    },
    { name: "liveUrl", title: "Live URL", type: "url" },
    { name: "githubUrl", title: "Github URL", type: "url" },
    { name: "gitlabUrl", title: "Gitlab URL", type: "url" },
    {
      name: "category",
      title: "Category",
      type: "string",
      validation: required,
      options: {
        list: [
          { title: "Frontend", value: "frontend" },
          { title: "Backend", value: "backend" },
          { title: "Fullstack", value: "fullstack" },
        ],
      },
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      validation: required,
      options: {
        list: [
          { title: "Completed", value: "completed" },
          { title: "In Progress", value: "ongoing" },
        ],
      },
    },
    { name: "featured", title: "Featured", type: "boolean" },
    { name: "year", title: "Year", type: "string", validation: required },
    { name: "team", title: "Team", type: "string", validation: required },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: [{ type: "technologies" }] }],
    },
    {
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
});
