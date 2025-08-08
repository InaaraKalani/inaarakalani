import { defineType } from "sanity";
import { required } from "./validations";

export const projectSchemaType = defineType({
  name: "projects",
  title: "Projects",
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
      name: "longDescription",
      title: "Long Description",
      type: "text",
      validation: required,
    },
    { name: "image", title: "Image", type: "image", validation: required },
    { name: "year", title: "Year", type: "number", validation: required },
    { name: "liveUrl", title: "Live URL", type: "url" },
    { name: "githubUrl", title: "Github URL", type: "url" },
    { name: "gitlabUrl", title: "Gitlab URL", type: "url" },
    { name: "featured", title: "Featured", type: "boolean" },
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
    {
      name: "teamType",
      title: "Team Type",
      type: "string",
      validation: required,
      options: {
        list: [
          { title: "Solo Project", value: "solo" },
          { title: "Team Project", value: "team" },
        ],
      },
    },
    {
      name: "teamCount",
      title: "Number of Developers",
      type: "number",
      hidden: ({ document }) => document?.teamType !== "team",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const doc = context.document as { teamType?: string };
          if (doc?.teamType === "team" && !value) {
            return "Please specify the number of developers in the team";
          } else if (value === 1) {
            return "Number of developers should be greater than 1 for team projects.";
          }
          return true;
        }),
    },
    {
      name: "applications",
      title: "Names of Applications/Products (if more than 1)",
      type: "array",
      of: [{ type: "string" }],
    },
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
